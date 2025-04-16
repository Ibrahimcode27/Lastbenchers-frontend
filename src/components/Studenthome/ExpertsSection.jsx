"use client";

import { useState } from "react";
import { SocialIcon } from "react-social-icons";

export default function ExpertsSection({ theme }) {
  return (
    <section
      id="experts"
      className={`py-12 px-8 text-center ${
        theme === "dark" ? "bg-[#1b3856]" : "bg-gray-100"
      }`}
    >
      <h1
        className={`text-3xl font-bold mb-4 ${
          theme === "dark" ? "text-white" : "text-[#334f6c]"
        }`}
      >
        Community Experts
      </h1>
      <p
        className={`text-lg mb-8 ${
          theme === "dark" ? "text-[#b0b0b0]" : "text-[#757373]"
        }`}
      >
        Replinsh man have things gathering lights yielding shall you
      </p>
      <div className="expert-box grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Expert 1 */}
        <div
          className={`profile ${
            theme === "dark" ? "bg-[#333333]" : "bg-white"
          } p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105`}
        >
          <img
            src="/images/pro1.webp"
            alt="Ema Irnik"
            className="w-32 h-32 object-cover rounded-full mb-4 mx-auto"
          />
          <h6
            className={`text-xl font-semibold ${
              theme === "dark" ? "text-white" : "text-[#334f6c]"
            } mb-2`}
          >
            Ema Irnik
          </h6>
          <p
            className={`text-base ${
              theme === "dark" ? "text-[#b0b0b0]" : "text-[#757373]"
            } mb-4`}
          >
            Python and Algorithm Expert
          </p>
          <div className="pro-links flex justify-center space-x-4">
            <SocialIcon
              url="https://www.facebook.com"
              fgColor={theme === "dark" ? "#ffffff" : "#1e4c9d"}
              bgColor={theme === "dark" ? "#1e4c9d" : "#fdc93b"}
              className="text-xl"
            />
            <SocialIcon
              url="https://www.instagram.com"
              fgColor={theme === "dark" ? "#ffffff" : "#1e4c9d"}
              bgColor={theme === "dark" ? "#1e4c9d" : "#fdc93b"}
              className="text-xl"
            />
            <SocialIcon
              url="https://www.linkedin.com"
              fgColor={theme === "dark" ? "#ffffff" : "#1e4c9d"}
              bgColor={theme === "dark" ? "#1e4c9d" : "#fdc93b"}
              className="text-xl"
            />
          </div>
        </div>

        {/* Expert 2 */}
        <div
          className={`profile ${
            theme === "dark" ? "bg-[#333333]" : "bg-white"
          } p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105`}
        >
          <img
            src="/images/pro2.webp"
            alt="Jacob John"
            className="w-32 h-32 object-cover rounded-full mb-4 mx-auto"
          />
          <h6
            className={`text-xl font-semibold ${
              theme === "dark" ? "text-white" : "text-[#334f6c]"
            } mb-2`}
          >
            Jacob John
          </h6>
          <p
            className={`text-base ${
              theme === "dark" ? "text-[#b0b0b0]" : "text-[#757373]"
            } mb-4`}
          >
            Python and Algorithm Expert
          </p>
          <div className="pro-links flex justify-center space-x-4">
            <SocialIcon
              url="https://www.facebook.com"
              fgColor={theme === "dark" ? "#ffffff" : "#1e4c9d"}
              bgColor={theme === "dark" ? "#1e4c9d" : "#fdc93b"}
              className="text-xl"
            />
            <SocialIcon
              url="https://www.instagram.com"
              fgColor={theme === "dark" ? "#ffffff" : "#1e4c9d"}
              bgColor={theme === "dark" ? "#1e4c9d" : "#fdc93b"}
              className="text-xl"
            />
            <SocialIcon
              url="https://www.linkedin.com"
              fgColor={theme === "dark" ? "#ffffff" : "#1e4c9d"}
              bgColor={theme === "dark" ? "#1e4c9d" : "#fdc93b"}
              className="text-xl"
            />
          </div>
        </div>

        {/* Expert 3 */}
        <div
          className={`profile ${
            theme === "dark" ? "bg-[#333333]" : "bg-white"
          } p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105`}
        >
          <img
            src="/images/pro3.webp"
            alt="George Andrew"
            className="w-32 h-32 object-cover rounded-full mb-4 mx-auto"
          />
          <h6
            className={`text-xl font-semibold ${
              theme === "dark" ? "text-white" : "text-[#334f6c]"
            } mb-2`}
          >
            George Andrew
          </h6>
          <p
            className={`text-base ${
              theme === "dark" ? "text-[#b0b0b0]" : "text-[#757373]"
            } mb-4`}
          >
            Python and Algorithm Expert
          </p>
          <div className="pro-links flex justify-center space-x-4">
            <SocialIcon
              url="https://www.facebook.com"
              fgColor={theme === "dark" ? "#ffffff" : "#1e4c9d"}
              bgColor={theme === "dark" ? "#1e4c9d" : "#fdc93b"}
              className="text-xl"
            />
            <SocialIcon
              url="https://www.instagram.com"
              fgColor={theme === "dark" ? "#ffffff" : "#1e4c9d"}
              bgColor={theme === "dark" ? "#1e4c9d" : "#fdc93b"}
              className="text-xl"
            />
            <SocialIcon
              url="https://www.linkedin.com"
              fgColor={theme === "dark" ? "#ffffff" : "#1e4c9d"}
              bgColor={theme === "dark" ? "#1e4c9d" : "#fdc93b"}
              className="text-xl"
            />
          </div>
        </div>

        {/* Expert 4 */}
        <div
          className={`profile ${
            theme === "dark" ? "bg-[#333333]" : "bg-white"
          } p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105`}
        >
          <img
            src="/images/pro4.webp"
            alt="Ema Watson"
            className="w-32 h-32 object-cover rounded-full mb-4 mx-auto"
          />
          <h6
            className={`text-xl font-semibold ${
              theme === "dark" ? "text-white" : "text-[#334f6c]"
            } mb-2`}
          >
            Ema Watson
          </h6>
          <p
            className={`text-base ${
              theme === "dark" ? "text-[#b0b0b0]" : "text-[#757373]"
            } mb-4`}
          >
            Python and Algorithm Expert
          </p>
          <div className="pro-links flex justify-center space-x-4">
            <SocialIcon
              url="https://www.facebook.com"
              fgColor={theme === "dark" ? "#ffffff" : "#1e4c9d"}
              bgColor={theme === "dark" ? "#1e4c9d" : "#fdc93b"}
              className="text-xl"
            />
            <SocialIcon
              url="https://www.instagram.com"
              fgColor={theme === "dark" ? "#ffffff" : "#1e4c9d"}
              bgColor={theme === "dark" ? "#1e4c9d" : "#fdc93b"}
              className="text-xl"
            />
            <SocialIcon
              url="https://www.linkedin.com"
              fgColor={theme === "dark" ? "#ffffff" : "#1e4c9d"}
              bgColor={theme === "dark" ? "#1e4c9d" : "#fdc93b"}
              className="text-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
