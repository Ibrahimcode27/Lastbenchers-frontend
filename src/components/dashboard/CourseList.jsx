"use client";
export default function CourseList({ courses }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-[#334f6c] mb-4">
        Courses List
      </h2>
      <ul className="space-y-4">
        {courses.map((course) => (
          <li
            key={course.course_id}
            className="p-4 flex items-center justify-between bg-gray-50 rounded-lg shadow-sm hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center space-x-4">
              <img
                src={course.course_image_url}
                alt={course.course_name}
                className="w-16 h-16 object-cover rounded-full"
              />
              <div>
                <h3 className="font-semibold text-lg text-[#334f6c]">
                  {course.course_name}
                </h3>
                <p className="text-sm text-[#757373]">
                  {course.course_description}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-[#fdc938]">Views: {course.views}</p>
              <p className="text-sm text-[#fdc938]">
                Enrolled: {course.enrolled}
              </p>
              <p className="text-sm text-[#fdc938]">
                Completed: {course.completed}
              </p>
            </div>
            <button className="text-[#1e4c9d] hover:text-[#fdc938]">
              View Analytics
            </button>
          </li>
        ))}
      </ul>
      <button className="mt-6 w-full py-2 px-4 bg-[#fdc938] text-white font-semibold rounded-md hover:bg-[#fdc93b]">
        Add Course
      </button>
    </div>
  );
}
