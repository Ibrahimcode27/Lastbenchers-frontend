"use client";
import Link from "next/link";

export default function RegistrationSection() {
  return (
    <section
      id="registration"
      className="py-12 px-8 bg-cover bg-center relative"
      style={{ backgroundImage: "url('/images/b1.jpg')" }}
    >
      <div className="reminder text-white text-center">
        <p className="text-xl">Get 100+ online courses</p>
        <h1 className="text-3xl font-semibold mb-6">Register to get it</h1>
        <div className="time flex justify-center space-x-6">
          <div className="date bg-[#334f6c] text-white p-6 rounded-md shadow-md">
            <p className="text-3xl font-bold">18</p>
            <p>Days</p>
          </div>
          <div className="date bg-[#334f6c] text-white p-6 rounded-md shadow-md">
            <p className="text-3xl font-bold">3</p>
            <p>Hours</p>
          </div>
          <div className="date bg-[#334f6c] text-white p-6 rounded-md shadow-md">
            <p className="text-3xl font-bold">58</p>
            <p>Minutes</p>
          </div>
        </div>
      </div>

      <div className="form mt-12 max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-[#334f6c] mb-6 text-center">
          Create Free Account NOW!
        </h3>
        <input
          type="text"
          placeholder="Name"
          className="w-full p-4 mb-4 text-[#334f6c] border-2 border-[#ddd] rounded-md focus:outline-none focus:ring-2 focus:ring-[#fdc93b]"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-4 mb-4 text-[#334f6c] border-2 border-[#ddd] rounded-md focus:outline-none focus:ring-2 focus:ring-[#fdc93b]"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full p-4 mb-6 text-[#334f6c] border-2 border-[#ddd] rounded-md focus:outline-none focus:ring-2 focus:ring-[#fdc93b]"
        />
        <div className="btn text-center">
          <Link
            href="#"
            className="w-full px-4 py-2 bg-[#fdc93b] text-white rounded-md hover:bg-[#fdc93b] focus:outline-none focus:ring-2 focus:ring-[#1e4c9d]"
          >
            Submit Form
          </Link>
        </div>
      </div>
    </section>
  );
}
