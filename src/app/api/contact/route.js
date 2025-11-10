// app/api/contact/route.js  (or wherever your API route lives)
import { NextResponse } from "next/server";
import { connectToDB } from "@/app/lib/db";
import Contact from "@/app/models/Contact";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

/**
 * POST handler - saves contact to DB and sends notification via AWS SES
 */
export async function POST(req) {
  try {
    const {
      firstName,
      lastName,
      email,
      additionalInfo,
      acceptedPrivacyPolicy,
    } = await req.json();

    // Basic validation
    if (
      !firstName ||
      !lastName ||
      !email ||
      !additionalInfo ||
      !acceptedPrivacyPolicy
    ) {
      return NextResponse.json(
        {
          error: "All fields are required and privacy policy must be accepted.",
        },
        { status: 400 }
      );
    }

    // Connect to DB and save contact
    await connectToDB();

    const newContact = new Contact({
      firstName,
      lastName,
      email,
      additionalInfo,
      acceptedPrivacyPolicy,
    });

    await newContact.save();

    // SES config & validation
    const { AWS_REGION, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY } =
      process.env;
    const FROM_ADDRESS = process.env.EMAIL_FROM;
    const FROM_NAME = process.env.EMAIL_FROM_NAME || "Info";
    const TO_ADDRESS = process.env.EMAIL_TO || FROM_ADDRESS;

    if (!AWS_REGION || !AWS_ACCESS_KEY_ID || !AWS_SECRET_ACCESS_KEY) {
      console.error("Missing AWS SES credentials/region in environment.");
      return NextResponse.json(
        { error: "Email service not configured." },
        { status: 500 }
      );
    }

    if (!FROM_ADDRESS) {
      return NextResponse.json(
        { error: "EMAIL_FROM environment variable is required." },
        { status: 500 }
      );
    }

    // Create SES client
    const sesClient = new SESClient({
      region: AWS_REGION,
      credentials: {
        accessKeyId: AWS_ACCESS_KEY_ID,
        secretAccessKey: AWS_SECRET_ACCESS_KEY,
      },
    });

    // Build Source header with display name: "Display Name" <address>
    const sourceHeader = `${escapeDisplayName(FROM_NAME)} <${FROM_ADDRESS}>`;

    // Prepare email bodies (HTML + text)
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9;">
        <h2 style="color: #333; text-align: center;">New Contact Form Submission</h2>
        <p style="font-size: 16px; color: #555;">You have received a new inquiry. Below are the details:</p>
        <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Name:</td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${escapeHtml(
              firstName
            )} ${escapeHtml(lastName)}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Email:</td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;"><a href="mailto:${escapeHtml(
              email
            )}" style="color: #007BFF; text-decoration: none;">${escapeHtml(
      email
    )}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Additional Info:</td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${escapeHtml(
              additionalInfo
            )}</td>
          </tr>
        </table>
        <p style="margin-top: 20px; font-size: 14px; color: #555; text-align: center;">Please follow up as necessary.</p>
      </div>
    `;

    const textBody = `New Contact Form Submission

Name: ${firstName} ${lastName}
Email: ${email}

Additional Info:
${additionalInfo}

Please follow up as necessary.
`;

    // SES params
    const params = {
      Destination: {
        ToAddresses: [TO_ADDRESS],
      },
      Message: {
        Body: {
          Html: { Data: htmlBody, Charset: "UTF-8" },
          Text: { Data: textBody, Charset: "UTF-8" },
        },
        Subject: { Data: "New Contact Form Submission", Charset: "UTF-8" },
      },
      Source: sourceHeader,
      ReplyToAddresses: [FROM_ADDRESS],
    };

    // Send email
    await sesClient.send(new SendEmailCommand(params));

    return NextResponse.json(
      { message: "Form submitted successfully!" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

/**
 * Escape HTML entities - simple helper
 * Not a full sanitizer; for complex input consider a sanitization library.
 */
function escapeHtml(unsafe = "") {
  return String(unsafe)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeDisplayName(name = "") {
  // If all ASCII and simple, return raw name
  const isAscii = /^[\x00-\x7F]*$/.test(name);
  if (isAscii && !/["<>@,;:\\]/.test(name)) {
    return name;
  }
  // RFC2047 base64 encode
  const b64 = Buffer.from(String(name), "utf8").toString("base64");
  return `=?UTF-8?B?${b64}?=`;
}
