"use client";

import { useState, useEffect } from "react"; // Import useState and useEffect
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import ContactSection from "../../components/contact/contact";

export default function ContactPage() {
  const [theme, setTheme] = useState("light"); // Declare theme state

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.body.classList.add(storedTheme + "-theme");
    }
  }, []);

  return (
    <div>
      <Navbar theme={theme} setTheme={setTheme} />
      <ContactSection />
      <Footer theme={theme} />
    </div>
  );
}
