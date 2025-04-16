"use client";
import CourseList from "./CourseList";
import CourseAnalytics from "./CourseAnalytics";
import FeedbackAndReviews from "./FeedbackAndReviews";

export default function TeacherDashboard() {
  // Dummy data for courses
  const courses = [
    {
      course_id: 1,
      course_name: "Web Development Bootcamp",
      course_description: "Learn full-stack web development.",
      views: 1200,
      enrolled: 300,
      completed: 200,
      course_image_url: "/images/c1.jpg",
      course_overview:
        "A complete bootcamp to learn HTML, CSS, JS, and Node.js.",
    },
    {
      course_id: 2,
      course_name: "React for Beginners",
      course_description: "Start building React apps from scratch.",
      views: 800,
      enrolled: 150,
      completed: 120,
      course_image_url: "/images/c2.jpg",
      course_overview: "An introduction to React, JSX, components, and state.",
    },
  ];

  return (
    <div className="max-w-screen-lg mx-auto py-12">
      <h1 className="text-3xl font-semibold text-[#334f6c] mb-6">
        Teacher Dashboard
      </h1>

      {/* Courses List */}
      <CourseList courses={courses} />

      {/* Course Analytics (You can dynamically pass a course ID here) */}
      <CourseAnalytics course={courses[0]} />

      {/* Feedback & Reviews Section */}
      <FeedbackAndReviews courseId={1} />
    </div>
  );
}
