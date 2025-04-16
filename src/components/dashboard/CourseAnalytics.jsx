"use client";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function CourseAnalytics({ course }) {
  // Data for the bar charts
  const chartData = {
    labels: ["Views", "Enrolled", "Completed"], // Categories for the graph
    datasets: [
      {
        label: "Course Statistics",
        data: [course.views, course.enrolled, course.completed], // Data points
        backgroundColor: "#fdc938", // Bar color
        borderColor: "#fdc938",
        borderWidth: 1,
      },
    ],
  };

  // Options for the graph
  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Course Performance",
        font: { size: 18 },
        color: "#334f6c",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 500, // Adjust step size for better scaling
        },
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-8">
      <h2 className="text-xl font-semibold text-[#334f6c] mb-4">
        Course Analytics
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Course Overview */}
        <div className="flex flex-col bg-gray-50 p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-[#334f6c]">
            Course Overview
          </h3>
          <p className="text-sm text-[#757373]">{course.course_overview}</p>
        </div>

        {/* Performance Graph */}
        <div className="flex flex-col bg-gray-50 p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-[#334f6c]">
            Course Performance
          </h3>
          <div className="flex justify-between mb-4">
            <div className="text-sm text-[#fdc938]">Views</div>
            <div className="text-sm text-[#757373]">{course.views}</div>
          </div>
          <div className="flex justify-between mb-4">
            <div className="text-sm text-[#fdc938]">Enrolled</div>
            <div className="text-sm text-[#757373]">{course.enrolled}</div>
          </div>
          <div className="flex justify-between mb-4">
            <div className="text-sm text-[#fdc938]">Completed</div>
            <div className="text-sm text-[#757373]">{course.completed}</div>
          </div>
          {/* Bar Chart */}
          <div className="mt-8">
            <Bar data={chartData} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
}
