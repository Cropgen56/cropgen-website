"use client";
import Image from "next/image";

const ContactUs = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 md:px-12 py-5 md:py-20 ">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2AB673]">
          Contact Us
        </h2>
        <p className="mt-4 text-[#000] text-sm sm:text-base">
          Need assistance? Pick the relevant department, submit the form, and
          we’ll take it from there. Want a demo? Contact our support team.
        </p>
      </div>

      <div className="mt-8 max-w-2xl mx-auto p-6 sm:p-8 ">
        <form className="flex flex-col  gap-4 w-full">
          <div className="flex justify-between gap-4 ">
            <input
              type="text"
              placeholder="First Name*"
              className="p-3 border rounded-md w-1/2 bg-[#EEEFF7]"
              required
            />
            <input
              type="text"
              placeholder="Last Name*"
              className="p-3 border rounded-md w-1/2 bg-[#EEEFF7]"
              required
            />
          </div>
          <input
            type="email"
            placeholder="E-mail*"
            className="p-3 border rounded-md w-full bg-[#EEEFF7] col-span-2"
            required
          />
          <p className="text-start text-sm">
            Fill in your goals, must-have features, contact preferences, and any
            additional information to help us serve you better.
          </p>
          <textarea
            placeholder="Additional Info*"
            className="p-3 border rounded-md w-full h-24 bg-[#EEEFF7] col-span-2"
            required
          ></textarea>
          <div className="flex items-center col-span-2">
            <input type="checkbox" className="mr-2" required />
            <label className="text-sm text-gray-600">
              I understand and agree to the Privacy Policy
            </label>
          </div>
          <button className="bg-[#28C878] text-white py-3 font-semibold hover:bg-[#28C878] transition w-1/4 mx-auto rounded-full col-span-2">
            Submit
          </button>
        </form>
      </div>

      <div className="mt-3 flex flex-row sm:flex-row justify-around items-center">
        <div className="text-start sm:text-left">
          <h3 className="text-xl sm:text-4xl font-bold">Head Office</h3>
          <p className="text-gray-600">
            Pune, Maharashtra,
            <br />
            411038, India
          </p>
          <p className="text-gray-600">
            Email:
            <br />
            info@cropgenapp.com
          </p>
        </div>
        <div>
          <Image
            src="/assets/image/comman/farm-satellite.webp"
            width={300}
            height={300}
            alt="farm with tractor and satellite"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
