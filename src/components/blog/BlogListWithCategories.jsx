"use client";

import { useState } from "react";

// Dummy data for categories and blogs
const categories = [
  "Web development",
  "App development",
  "Full Stack development",
  "Python developers",
  "Java developers",
  "CyberSecurity",
];

const blogs = [
  {
    blog_id: 1,
    title: "Understanding React",
    tagline: "Learn the basics of React.",
    category: "Web development",
    image_path: "/images/b2.jpg",
    author_name: "John Doe",
    created_at: "2023-06-10",
  },
  {
    blog_id: 2,
    title: "Mastering Python for Data Science",
    tagline: "A comprehensive guide to Python for Data Science.",
    category: "Python developers",
    image_path: "/images/b3.jpg",
    author_name: "Jane Smith",
    created_at: "2023-07-15",
  },
  {
    blog_id: 3,
    title: "Building Full-Stack Apps with Node.js",
    tagline: "How to build full-stack applications with Node.js.",
    category: "Full Stack development",
    image_path: "/images/b4.png",
    author_name: "Mike Ross",
    created_at: "2023-08-01",
  },
  {
    blog_id: 4,
    title: "Building Full-Stack Apps with Node.js",
    tagline: "How to build full-stack applications with Node.js.",
    category: "Full Stack development",
    image_path: "/images/b4.png",
    author_name: "Mike Ross",
    created_at: "2023-08-01",
  },
  // More blog data here...
];

export default function BlogListWithCategories() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter blogs based on selected category
  const filteredBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === selectedCategory);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category); // Update selected category
  };

  return (
    <section className="py-12 px-8">
      {/* Categories Filter */}
      <div className="flex gap-8 mt-12 mb-8 flex-wrap sm:flex-nowrap">
        {/* Categories Column - Fixed on mobile */}
        <div className="w-full sm:w-1/4 bg-white p-6 rounded-lg shadow-md sm:sticky sm:top-0 sm:h-screen">
          <h2 className="text-xl font-semibold text-[#334f6c] mb-4">
            Categories
          </h2>
          <ul className="space-y-4 mb-4">
            <li
              className={`cursor-pointer text-[#1e4c9d] hover:text-[#fdc938] ${
                selectedCategory === "All" ? "font-bold" : ""
              }`}
              onClick={() => handleCategoryChange("All")}
            >
              All Categories
            </li>
            {categories.map((category) => (
              <li
                key={category}
                className={`cursor-pointer text-[#1e4c9d] hover:text-[#fdc938] ${
                  selectedCategory === category ? "font-bold" : ""
                }`}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </li>
            ))}
          </ul>
          {/* Add Blog Button */}
          <p className="text-[#757373] mb-4">
            Share your knowledge through blogs! Choose a category and dive into
            the world of blogging.
          </p>
          <button
            className="w-full py-2 px-4 bg-[#fdc938] text-white font-semibold rounded-md hover:bg-[#fdc93b]"
            onClick={() => alert("Redirecting to Add Blog page...")}
          >
            Add Blog
          </button>
        </div>

        {/* Blogs List */}
        <div className="w-full sm:w-3/4">
          <h2 className="text-3xl font-semibold text-[#334f6c] mb-6">Blogs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog) => (
                <div
                  key={blog.blog_id}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
                >
                  <img
                    src={blog.image_path}
                    alt={blog.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold text-[#334f6c] mb-2">
                    {blog.title}
                  </h3>
                  <p className="text-[#757373] mb-4">{blog.tagline}</p>
                  <p className="text-sm text-[#757373] mb-4">
                    By: {blog.author_name} |{" "}
                    {new Date(blog.created_at).toLocaleDateString()}
                  </p>
                  <a
                    href={`/post`}
                    className="text-[#fdc93b] hover:text-[#1e4c9d]"
                  >
                    Read More
                  </a>
                </div>
              ))
            ) : (
              <p>No blogs available in this category.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}