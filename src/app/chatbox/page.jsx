import TeacherNavbar from "@/components/layout/teacherNavbar";
import ChatDashboard from "@/components/teacherGroupForm/chatbox";

export default function TeacherHome() {
  return (
    <div className="min-h-screen bg-gray-50">
        <TeacherNavbar/>
        <ChatDashboard />
    </div>
  );
}
