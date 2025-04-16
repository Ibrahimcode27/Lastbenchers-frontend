"use client";

import { useState } from "react";

// Dummy data for courses
const courses = [
  {
    id: 1,
    name: "Web Development",
    description:
      "Learn the fundamentals of web development, including HTML, CSS, and JavaScript.",
    duration: "3 Months",
    price: "FREE",
    image_url: "/images/c1.jpg",
  },
  {
    id: 2,
    name: "App Development",
    description:
      "Learn how to build mobile apps for Android and iOS using React Native.",
    duration: "4 Months",
    price: "FREE",
    image_url: "/images/c2.jpg",
  },
  {
    id: 3,
    name: "Full Stack Development",
    description:
      "Become a full-stack developer with knowledge in both frontend and backend technologies.",
    duration: "6 Months",
    price: "FREE",
    image_url: "/images/c3.jpg",
  },
];

export default function CoursesPage({ theme }) {
  return (
    <div>
      {/* Courses Header */}
      <section className="bg-[#1e4c9d] text-white py-12 px-8 text-center">
        <h1 className="text-3xl font-semibold mb-4 mt-16">Explore Our Courses</h1>
        <p className="text-lg">
          Take a step towards mastering new skills. Browse our curated courses.
        </p>
      </section>

      {/* Courses List */}
      <section className="py-12 px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={course.image_url}
                alt={course.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-[#334f6c] mb-2">
                {course.name}
              </h3>
              <p className="text-[#757373] mb-4">{course.description}</p>
              <p className="text-sm text-[#757373]">
                Duration: {course.duration}
              </p>
              <div className="mt-4 text-[#fdc938]">₹{course.price}</div>
              <a
                href={`/course_inner`}
                className="text-[#fdc93b] hover:text-[#1e4c9d] mt-4 block"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
