"use client";

import { useState } from "react";
import axios from "axios";

const DeleteAccount = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);

  // Validate Email Format
  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleNextStep = () => {
    if (!email) {
      setStatus("Please enter your email.");
      return;
    }
    if (!isValidEmail(email)) {
      setStatus("Invalid email format.");
      return;
    }
    setStatus("");
    setStep(2);
  };

  const handleDelete = async () => {
    if (
      !confirm(
        "Are you sure you want to delete your account permanently? This action cannot be undone. All your associated data, including personal details, preferences, and history, will be erased."
      )
    ) {
      return;
    }

    setLoading(true);
    try {
      const response = await axios.delete(
        `https://server.cropgenapp.com/v1/api/auth/delete-user-by-email/${email}`,
        {
          headers: {
            "x-api-key": "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",
          },
        }
      );

      setLoading(false);
      setStatus(
        response.data.message ||
          "Your account and all associated data have been successfully deleted."
      );
      setStep(1);
      setEmail("");
    } catch (error) {
      setLoading(false);
      setStatus(
        error.response?.data?.message || "Failed to delete account. Try again."
      );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f0f7f4]">
      <div className="bg-[#184d47] p-6 rounded-lg shadow-lg max-w-md text-center text-white">
        <h2 className="text-2xl font-bold text-[#f4a261]">
          {step === 1
            ? "Delete Your Account & Data"
            : "Confirm Account Deletion"}
        </h2>
        <p className="mt-2">
          {step === 1
            ? "Enter your email to proceed with deleting your account and all associated data permanently."
            : "Warning: Deleting your account will remove all your personal data, preferences, and history. This action is irreversible."}
        </p>

        {step === 1 ? (
          <>
            <input
              type="email"
              className="mt-4 border p-2 rounded w-full text-black"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              onClick={handleNextStep}
              className="mt-4 bg-[#ff4d4d] hover:bg-[#e63946] text-white py-2 px-4 rounded-lg w-full transition"
            >
              Proceed to Delete
            </button>
          </>
        ) : (
          <button
            onClick={handleDelete}
            className="mt-4 bg-[#d90429] hover:bg-[#b2001a] text-white py-2 px-4 rounded-lg w-full transition"
            disabled={loading}
          >
            {loading ? "Deleting..." : "Delete My Account & Data"}
          </button>
        )}

        {status && <p className="mt-2 text-[#f4a261]">{status}</p>}

        {step === 2 && (
          <button
            onClick={() => setStep(1)}
            className="mt-2 text-[#8ecae6] underline"
          >
            Cancel
          </button>
        )}
      </div>
    </div>
  );
};

export default DeleteAccount;
