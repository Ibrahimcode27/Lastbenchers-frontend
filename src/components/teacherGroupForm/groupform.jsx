"use client"; // Ensure this runs on the client side

import { useState } from "react";
import { useRouter } from "next/navigation"; // Use this to redirect after group creation

// Dummy student data
const students = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
  { id: 3, name: "Mike Johnson", email: "mike@example.com" },
  { id: 4, name: "Emily Davis", email: "emily@example.com" },
  { id: 5, name: "Chris Brown", email: "chris@example.com" },
];

export default function TeacherGroupForm() {
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter(); // Use Next.js useRouter to navigate

  // Filter students based on search query
  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle selection of students
  const handleSelectStudent = (id) => {
    setSelectedStudents((prevSelected) => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter((studentId) => studentId !== id);
      } else {
        return [...prevSelected, id];
      }
    });
  };

  // Handle group creation
  const handleCreateGroup = () => {
    if (selectedStudents.length > 0) {
      alert(`Group created with students: ${selectedStudents.join(", ")}`);

      // Redirect to the chatbox page after creating the group
      router.push("/chatbox"); // This will redirect to the /chatbox page
    } else {
      alert("Please select at least one student.");
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold text-[#334f6c] mb-8">
        Create Student Group
      </h1>

      {/* Search bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search students by name or email"
          className="p-3 w-full rounded-md border border-gray-300"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Student List */}
      <div className="space-y-4 mb-6">
        {filteredStudents.map((student) => (
          <div key={student.id} className="flex items-center space-x-4">
            <input
              type="checkbox"
              checked={selectedStudents.includes(student.id)}
              onChange={() => handleSelectStudent(student.id)}
              className="h-5 w-5"
            />
            <span className="text-lg">{student.name}</span>
            <span className="text-sm text-[#757373]">{student.email}</span>
          </div>
        ))}
      </div>

      {/* Create Group Button */}
      <div className="text-center">
        <button
          className="px-8 py-3 bg-[#fdc938] text-white rounded-md hover:bg-[#fdc93b] transition-colors"
          onClick={handleCreateGroup}
        >
          Create Group
        </button>
      </div>
    </div>
  );
}
