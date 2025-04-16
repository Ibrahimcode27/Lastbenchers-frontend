"use client";

import Link from "next/link";

export default function TeacherNavbar() {
  return (
    <nav className="bg-[#1e4c9d] p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src="/images/logo.svg" alt="Logo" className="h-8" />
        </div>

        <div className="space-x-8 text-white text-lg">
          <Link href="/teacherhome" className="hover:text-[#fdc938]">
            Dashboard
          </Link>
          <Link href="/chatbox" className="hover:text-[#fdc938]">
            Classrooms
          </Link>
        </div>

        {/* User profile or logout */}
        <div className="text-white flex items-center space-x-4">
          <span>Welcome, Teacher</span>
          <button className="bg-[#fdc938] text-white py-1 px-4 rounded-md hover:bg-[#fdc93b]">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
