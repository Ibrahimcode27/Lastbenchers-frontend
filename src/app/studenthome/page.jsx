"use client"
import { useState, useEffect } from "react";
import Navbar from "../../components/layout/Navbar";
import HomeSection from "../../components/Studenthome/HomeSection";
import FeaturesSection from "../../components/Studenthome/FeaturesSection";
import CoursesSection from "../../components/Studenthome/CoursesSection";
import RegistrationSection from "../../components/Studenthome/RegistrationSection";
import ExpertsSection from "../../components/Studenthome/ExpertsSection";
import Footer from "../../components/layout/Footer";

export default function StudentHomePage() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.body.classList.add(storedTheme + "-theme");
    }
  }, []);

  const courses = [
    {
      course_id: 1,
      course_name: "Python Basics",
      course_description: "Learn the basics of Python programming.",
      course_duration: "3 months",
      course_price: "FREE",
      course_image_url: "/images/c2.jpg",
    },
    {
      course_id: 2,
      course_name: "Data Science",
      course_description: "Learn data science and machine learning.",
      course_duration: "6 months",
      course_price: "FREE",
      course_image_url: "/images/c1.jpg",
    },
  ];

  return (
    <>
      <Navbar userName="John Doe" theme={theme} setTheme={setTheme} />
      <HomeSection theme={theme} />
      <FeaturesSection theme={theme} />
      <CoursesSection courses={courses} theme={theme} />
      <RegistrationSection theme={theme} />
      <ExpertsSection theme={theme} />
      <Footer theme={theme} />
    </>
  );
}
