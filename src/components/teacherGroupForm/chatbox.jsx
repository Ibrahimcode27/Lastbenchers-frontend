"use client";

import { useState } from "react";
import { FaPaperclip, FaRegSmileWink, FaPaperPlane } from "react-icons/fa";

const groups = [
  { id: 1, name: "Web Development" },
  { id: 2, name: "App Development" },
  { id: 3, name: "Full Stack Development" },
  { id: 4, name: "Python Developers" },
  { id: 5, name: "Java Developers" },
  { id: 6, name: "CyberSecurity" },
];

const initialMessages = [
  {
    sender: "Teacher",
    message:
      "Welcome to the class! Let's start with the basics of web development.",
  },
];

export default function ChatDashboard() {
  const [selectedGroup, setSelectedGroup] = useState(groups[0]);
  const [messages, setMessages] = useState(initialMessages);
  const [message, setMessage] = useState("");
  const [groupName, setGroupName] = useState("");

  const handleSendMessage = () => {
    if (message.trim() === "") return;
    setMessages([...messages, { sender: "Teacher", message: message }]);
    setMessage(""); // Clear input after sending
  };

  const handleGroupClick = (group) => {
    setSelectedGroup(group);
    setMessages([]);
  };

  const handleEmojiClick = (emoji) => {
    setMessage(message + emoji);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-[#1e4c9d] text-white p-4 flex flex-col">
        <h2 className="text-xl font-semibold mb-4">Groups</h2>
        <div className="flex-grow space-y-4 overflow-auto">
          {groups.map((group) => (
            <div
              key={group.id}
              className={`cursor-pointer p-2 rounded-md hover:bg-[#fdc93b] ${
                selectedGroup.id === group.id ? "bg-[#fdc93b]" : ""
              }`}
              onClick={() => handleGroupClick(group)}
            >
              {group.name}
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="w-3/4 bg-white p-6 flex flex-col">
        {/* Chat Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-[#334f6c]">
            {selectedGroup.name}
          </h2>
        </div>

        {/* Chat Display */}
        <div className="flex-grow overflow-auto mb-6 bg-gray-50 p-4 rounded-lg shadow-md space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.sender === "Teacher" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`px-4 py-2 rounded-lg ${
                  message.sender === "Teacher"
                    ? "bg-[#fdc938] text-white"
                    : "bg-[#e5e7eb] text-[#333]"
                } max-w-[70%]`}
              >
                <p>{message.message}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="flex items-center space-x-4">
          {/* Emoji Button */}
          <button
            className="text-2xl text-[#1e4c9d] hover:text-[#fdc93b]"
            onClick={() => handleEmojiClick("😊")}
          >
            <FaRegSmileWink />
          </button>

          {/* Message Input */}
          <input
            type="text"
            className="flex-grow p-3 rounded-md border border-gray-300"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          {/* Send Button */}
          <button
            className="text-2xl text-[#fdc938] hover:text-[#fdc93b]"
            onClick={handleSendMessage}
          >
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </div>
  );
}
