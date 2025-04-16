"use client";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import BlogListWithCategories from "../../components/blog/BlogListWithCategories";

export default function BlogPage() {
  return (
    <div>
      <Navbar />
      <BlogListWithCategories />{" "}
      <Footer />
    </div>
  );
}
