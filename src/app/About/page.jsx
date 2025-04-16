"use client";
import { useState, useEffect } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Section1 from "../../components/about/aboutheader";
import FeaturesSection from "@/components/Studenthome/FeaturesSection";
import TrustSection from "../../components/about/trust";

export default function About() {
  const [theme, setTheme] = useState("light");

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
      <Section1 />
      <FeaturesSection />
      <TrustSection />
      <Footer theme={theme} />
    </div>
  );
}
