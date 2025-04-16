"use client";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import CoursesPage from "../../components/courselist/courselist";

export default function Courses() {
  return (
    <div>
      <Navbar />
      <CoursesPage />
      <Footer />
    </div>
  );
}
