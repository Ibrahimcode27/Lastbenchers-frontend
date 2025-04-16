"use client";
import Link from "next/link";

export default function CoursesSection({ courses, theme }) {
  return (
    <section
      id="course"
      className={`py-12 px-8 text-center ${
        theme === "dark"
          ? "bg-[#101c32] text-white"
          : "bg-gray-100 text-[#334f6c]"
      }`}
    >
      <h1
        className={`text-3xl font-bold mb-4 ${
          theme === "dark" ? "text-white" : "text-[#334f6c]"
        }`}
      >
        Our Courses
      </h1>
      <p
        className={`text-lg mb-8 ${
          theme === "dark" ? "text-[#b0b0b0]" : "text-[#757373]"
        }`}
      >
        Explore our selection of quality courses.
      </p>
      <div className="course-box grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.length > 0 ? (
          courses.map((course) => (
            <div
              className={`courses ${
                theme === "dark" ? "bg-[#333333]" : "bg-white"
              } p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105`}
              key={course.course_id}
            >
              <img
                src={course.course_image_url}
                alt={course.course_name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <div className="details mb-4">
                <h3
                  className={`text-xl font-semibold ${
                    theme === "dark" ? "text-white" : "text-[#334f6c]"
                  } mb-2`}
                >
                  {course.course_name}
                </h3>
                <p
                  className={`text-base ${
                    theme === "dark" ? "text-[#b0b0b0]" : "text-[#757373]"
                  } mb-2`}
                >
                  {course.course_description.substring(0, 100)}...
                </p>
                <p
                  className={`text-base ${
                    theme === "dark" ? "text-[#b0b0b0]" : "text-[#757373]"
                  } mb-4`}
                >
                  Duration: {course.course_duration}
                </p>
                <Link
                  href={`/course_inner/${course.course_id}`}
                  className={`${
                    theme === "dark" ? "text-[#fdc93b]" : "text-[#fdc93b]"
                  } hover:text-[#1e4c9d]`}
                >
                  Read More
                </Link>
              </div>
              <div
                className={`cost text-xl font-semibold ${
                  theme === "dark" ? "text-[#fdc93b]" : "text-[#fdc93b]"
                }`}
              >
                RS. {course.course_price}
              </div>
            </div>
          ))
        ) : (
          <p>No courses available at the moment.</p>
        )}
      </div>
    </section>
  );
}
