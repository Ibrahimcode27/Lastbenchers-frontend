"use client";
import Link from "next/link";

export default function HomeSection() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-cover bg-center bg-no-repeat bg-[url('/images/back.jpg')] sm:bg-cover sm:bg-center md:bg-cover">
      <p className="text-2xl max-w-2xl mb-7 mt-64 px-4 sm:text-xl sm:max-w-full">
        "Some goals are so worthy; it's glorious even to fail." – Capt Manoj
        Kumar Pandey (PVC).
      </p>
      <div className="space-x-4 flex flex-col sm:flex-row sm:space-x-4 sm:space-y-0 space-y-4">
        <Link
          href="/about"
          className="px-8 py-3 text-lg bg-[#1e4c9d] text-white rounded-md hover:bg-[#fdc938] sm:w-auto w-full text-center"
        >
          Learn More
        </Link>
        <Link
          href="/courses"
          className="px-8 py-3 text-lg bg-[#fdc938] text-white rounded-md hover:bg-[#1e4c9d] sm:w-auto w-full text-center"
        >
          Visit Courses
        </Link>
      </div>
    </section>
  );
}
