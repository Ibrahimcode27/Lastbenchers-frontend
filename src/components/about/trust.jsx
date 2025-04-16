"use client";

import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TrustSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check window width on component mount
    const checkWindowSize = () => {
      setIsMobile(window.innerWidth <= 768); // Set true for mobile devices (<= 768px)
    };

    // Call the function on component mount
    checkWindowSize();

    // Add event listener to track window resize
    window.addEventListener("resize", checkWindowSize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", checkWindowSize);
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // For mobile devices
        settings: {
          slidesToShow: 1, // Show 1 image on mobile
          slidesToScroll: 1,
          arrows: false, // Optional: Hide arrows on mobile
          dots: true, // Show dots on mobile for navigation
        },
      },
      {
        breakpoint: 1024, // For tablets or small desktops
        settings: {
          slidesToShow: 3, // Show 3 images on tablets
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-gray-50 py-12">
      <h1 className="text-3xl text-[#334f6c] text-center mb-6">Trust Us</h1>

      {isMobile ? (
        <Slider {...settings}>
          <div>
            <img
              src="/images/trust (1).png"
              alt="Trust 1"
              className="w-full h-32 sm:h-40 md:h-48 lg:h-56 object-contain mx-auto"
            />
          </div>
          <div>
            <img
              src="/images/trust (2).png"
              alt="Trust 2"
              className="w-full h-32 sm:h-40 md:h-48 lg:h-56 object-contain mx-auto"
            />
          </div>
          <div>
            <img
              src="/images/trust (3).png"
              alt="Trust 3"
              className="w-full h-32 sm:h-40 md:h-48 lg:h-56 object-contain mx-auto"
            />
          </div>
          <div>
            <img
              src="/images/trust (4).png"
              alt="Trust 4"
              className="w-full h-32 sm:h-40 md:h-48 lg:h-56 object-contain mx-auto"
            />
          </div>
          <div>
            <img
              src="/images/trust (5).png"
              alt="Trust 5"
              className="w-full h-32 sm:h-40 md:h-48 lg:h-56 object-contain mx-auto"
            />
          </div>
          <div>
            <img
              src="/images/trust (6).png"
              alt="Trust 6"
              className="w-full h-32 sm:h-40 md:h-48 lg:h-56 object-contain mx-auto"
            />
          </div>
        </Slider>
      ) : (
        <div className="flex justify-center gap-8 flex-wrap">
          <img
            src="/images/trust (1).png"
            alt="Trust 1"
            className="w-16 h-16 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain"
          />
          <img
            src="/images/trust (2).png"
            alt="Trust 2"
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain"
          />
          <img
            src="/images/trust (3).png"
            alt="Trust 3"
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain"
          />
          <img
            src="/images/trust (4).png"
            alt="Trust 4"
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain"
          />
          <img
            src="/images/trust (5).png"
            alt="Trust 5"
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain"
          />
          <img
            src="/images/trust (6).png"
            alt="Trust 6"
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain"
          />
        </div>
      )}
    </section>
  );
}
