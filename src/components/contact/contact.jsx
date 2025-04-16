"use client";

import { FaHome, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { SocialIcon } from "react-social-icons"; // Correct import for ReactSocialIcon

export default function ContactSection() {
  return (
    <section id="contact" className="py-12 bg-gray-50">
      {/* Contact Header */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-semibold text-[#334f6c] mt-12">
          Get In Touch
        </h2>
        <p className="text-lg text-[#757373]">
          Looking for help? Fill the form and start a new adventure.
        </p>
      </div>
      <hr className="mb-2 caret-amber-500"></hr>
      {/* Contact Details and Form Section */}
      <div className="flex flex-col sm:flex-row justify-between gap-8 px-8">
        {/* Contact Details */}
        <div className="w-full sm:w-1/2">
          <h3 className="text-xl font-semibold text-[#334f6c] mb-6">
            Contact Details
          </h3>
          <div className="space-y-6">
            <div className="flex items-center">
              <FaHome size={24} className="text-[#fdc938] mr-4" />
              <p className="text-[#757373]">
                Pillai College Of Engineering, New Panvel, India, 410210.
              </p>
            </div>
            <div className="flex items-center">
              <FaPhoneAlt size={24} className="text-[#fdc938] mr-4" />
              <p className="text-[#757373]">
                (+91) 976-123-4567 <br /> (+91) 976-123-4567
              </p>
            </div>
            <div className="flex items-center">
              <FaEnvelope size={24} className="text-[#fdc938] mr-4" />
              <p className="text-[#757373]">
                thelastbencher.help@gmail.com <br /> helpline@support.com
              </p>
            </div>
            <h3 className="text-xl font-semibold text-[#334f6c] mt-8">
              Follow Us
            </h3>
            <div className="flex space-x-4 mt-4">
              {/* Use ReactSocialIcon for social media links */}
              <SocialIcon
                url="https://www.facebook.com"
                target="_blank"
                className="text-2xl text-[#1e4c9d] hover:text-[#fdc938] cursor-pointer"
              />
              <SocialIcon
                url="https://www.instagram.com"
                target="_blank"
                className="text-2xl text-[#1e4c9d] hover:text-[#fdc938] cursor-pointer"
              />
              <SocialIcon
                url="https://www.linkedin.com"
                target="_blank"
                className="text-2xl text-[#1e4c9d] hover:text-[#fdc938] cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full sm:w-1/2 bg-white p-8 rounded-lg shadow-md">
          <h4 className="text-2xl font-semibold text-[#334f6c] mb-4">
            Let's Connect
          </h4>
          <p className="text-[#757373] mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, et maxime? Animi.
          </p>

          <form className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 rounded-md border border-gray-300 w-full sm:w-1/2"
              />
              <input
                type="email"
                placeholder="Email"
                className="p-3 rounded-md border border-gray-300 w-full sm:w-1/2"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="p-3 rounded-md border border-gray-300 w-full"
            />
            <textarea
              placeholder="How can we help you?"
              className="p-3 rounded-md border border-gray-300 w-full"
              rows="5"
            />
            <div>
              <button className="px-6 py-3 bg-[#fdc938] text-white rounded-md hover:bg-[#fdc93b] w-full">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
