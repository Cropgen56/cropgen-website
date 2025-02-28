import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    additionalInfo: { type: String, required: true },
    acceptedPrivacyPolicy: { type: Boolean, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Contact ||
  mongoose.model("Contact", ContactSchema);
