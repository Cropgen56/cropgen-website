import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { connectToDB } from "@/app/lib/db";
import Contact from "@/app/models/Contact";

export async function POST(req) {
  try {
    const {
      firstName,
      lastName,
      email,
      additionalInfo,
      acceptedPrivacyPolicy,
    } = await req.json();

    // Validate required fields
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

    // Connect to the database
    await connectToDB();

    // Save to database
    const newContact = new Contact({
      firstName,
      lastName,
      email,
      additionalInfo,
      acceptedPrivacyPolicy,
    });
    await newContact.save();

    // Send Email Notification to Website Owner
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Contact Form Submission",
      html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9;">
            <h2 style="color: #333; text-align: center;">New Contact Form Submission</h2>
            <p style="font-size: 16px; color: #555;">You have received a new inquiry. Below are the details:</p>
            <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Name:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Email:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;"><a href="mailto:${email}" style="color: #007BFF; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Additional Info:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${additionalInfo}</td>
              </tr>
            </table>
            <p style="margin-top: 20px; font-size: 14px; color: #555; text-align: center;">Please follow up as necessary.</p>
          </div>
        `,
    });

    return NextResponse.json(
      { message: "Form submitted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
