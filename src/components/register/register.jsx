"use client";

import { useState } from "react";
import Link from "next/link"; // ✅ THIS WAS MISSING
import axios from "axios";

export default function RegisterForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      await axios.post("http://localhost:5000/api/auth/register", form);
      setSuccess("Registration successful! Redirecting to login...");

      setTimeout(() => {
        window.location.href = "/login"; // ✅ Simple redirect
      }, 2000);
    } catch (err) {
      setError(err?.response?.data?.message || "Registration failed.");
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md mx-auto mt-12">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Register for TheLastBenchers
      </h2>

      {error && (
        <div className="bg-red-100 text-red-700 px-4 py-2 mb-4 rounded">
          {error}
        </div>
      )}
      {success && (
        <div className="bg-green-100 text-green-700 px-4 py-2 mb-4 rounded">
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            name="name"
            placeholder="Full Name"
            required
            onChange={handleChange}
            value={form.name}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            onChange={handleChange}
            value={form.email}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            onChange={handleChange}
            value={form.password}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <select
            name="role"
            onChange={handleChange}
            value={form.role}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="student">Register as Student</option>
            <option value="teacher">Register as Teacher</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Register
        </button>
      </form>

      <p className="mt-4 text-center text-gray-600">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-600 hover:underline">
          Login here
        </Link>
      </p>
    </div>
  );
}
