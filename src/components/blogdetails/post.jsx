"use client";

export default function BlogDetails() {
  return (
    <section className="py-12 px-8 max-w-3xl mx-auto">
      {/* Blog Title */}
      <h1 className="text-3xl font-semibold text-[#334f6c] mb-4">
        Understanding React: A Beginner's Guide
      </h1>

      {/* Author and Date */}
      <p className="text-sm text-[#757373] mb-4">
        By: John Doe | Published on: {new Date().toLocaleDateString()}
      </p>

      {/* Blog Image */}
      <img
        src="/images/b2.jpg"
        alt="React Blog Image"
        className="w-full h-64 object-cover rounded-lg mb-4"
      />

      {/* Blog Tagline */}
      <p className="text-lg text-[#757373] mb-6">
        A comprehensive guide to understanding React for absolute beginners.
      </p>

      {/* Blog Content */}
      <div className="text-base text-[#333] mb-6">
        <p>
          React is a popular JavaScript library for building user interfaces,
          developed and maintained by Facebook. It allows developers to create
          single-page applications with a component-based architecture. In this
          post, we will dive into the basics of React, including components,
          JSX, props, and state.
        </p>
        <p className="mt-4">
          The core concept in React is that everything is a component. A
          component can be either a functional component or a class component.
          Functional components are simpler and more common in modern React
          development. They are just JavaScript functions that return JSX. JSX
          is a syntax extension that allows you to write HTML-like code in
          JavaScript.
        </p>
        <p className="mt-4">
          One of the most powerful features of React is its ability to update
          the UI efficiently through its virtual DOM mechanism. When a component
          ’s state changes, React re-renders the component and updates the
          virtual DOM, which then gets compared to the actual DOM. This
          comparison process allows React to make updates efficiently, only
          changing the parts of the DOM that actually need to be updated.
        </p>
      </div>

      {/* Footer */}
      <div className="text-center mt-8">
        <a
          href="/blog"
          className="px-6 py-2 bg-[#fdc938] text-white rounded-md hover:bg-[#fdc93b]"
        >
          Back to Blogs
        </a>
      </div>
    </section>
  );
}
