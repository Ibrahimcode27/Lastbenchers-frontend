"use client";

export default function CourseInner() {
  // Static course data
  const course = {
    course_name: "Web Development Bootcamp",
    course_description:
      "A comprehensive bootcamp to take you from beginner to advanced in web development.",
    course_duration: "3 Months",
    course_price: "Rs. 0000(Free)",
    course_image_url: "/images/c1.jpg", 
    course_overview:
      "In this course, you will learn HTML, CSS, JavaScript, React, and Node.js. By the end, you'll be able to build dynamic web applications.",
    course_learn_points: [
      "HTML & CSS basics",
      "JavaScript fundamentals",
      "React & Node.js",
      "Building dynamic web applications",
    ],
    instructor_name: "John Doe",
    instructor_description:
      "John is a senior web developer with over 10 years of experience in full-stack development. He has taught hundreds of students through his bootcamps.",
  };

  return (
    <section className="py-16 px-8 bg-gray-50 ">
      {/* Course Details */}
      <div className="max-w-screen-xl mx-auto mt-14">
        <div className="flex flex-col lg:flex-row gap-12 mb-12">
          {/* Course Image */}
          <div className="w-full lg:w-1/2 ">
            <img
              src={course.course_image_url}
              alt={course.course_name}
              className="w-full h-80 object-cover rounded-lg shadow-md"
            />
          </div>
          {/* Course Information */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-semibold text-[#334f6c] mb-4">
              {course.course_name}
            </h2>
            <p className="text-lg text-[#757373] mb-6">
              {course.course_description}
            </p>
            <div className="flex gap-6 mb-6">
              <span className="text-xl text-[#fdc938] font-semibold">
                Price: {course.course_price}
              </span>
              <span className="text-xl text-[#fdc938] font-semibold">
                Duration: {course.course_duration}
              </span>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-[#334f6c] mb-3">
                Course Overview
              </h3>
              <p className="text-[#757373]">{course.course_overview}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-[#334f6c] mb-3">
                What You Will Learn
              </h3>
              <ul className="list-disc pl-6 text-[#757373]">
                {course.course_learn_points.map((point, index) => (
                  <li key={index} className="mb-2">
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-[#334f6c] mb-3">
                Instructor
              </h3>
              <p className="text-[#757373]">{course.instructor_name}</p>
              <p className="text-[#757373]">{course.instructor_description}</p>
            </div>

            {/* Enroll Button */}
            <div className="text-center">
              <a
                href="#"
                className="px-8 py-3 bg-[#fdc938] text-white rounded-md hover:bg-[#fdc93b] transition-colors duration-200"
              >
                Enroll Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
