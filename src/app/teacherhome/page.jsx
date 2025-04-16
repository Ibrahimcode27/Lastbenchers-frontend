"use client";
import TeacherNavbar from "@/components/layout/teacherNavbar";
import TeacherDashboard from "../../components/dashboard/TeacherDashboard";

export default function TeacherHomePage() {
  return (
    <div>
      <TeacherNavbar/>
      <TeacherDashboard />
    </div>
  );
}
