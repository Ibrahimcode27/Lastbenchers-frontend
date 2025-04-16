export default function FeaturesSection({ theme }) {
  return (
    <section
      id="features"
      className={`py-12 px-8 text-center ${
        theme === "dark" ? "bg-[#1b3856]" : "bg-gray-100"
      }`}
    >
      <h1
        className={`${
          theme === "dark" ? "text-white" : "text-[#334f6c]"
        } text-3xl font-bold mb-4`}
      >
        Awesome Features
      </h1>
      <p
        className={`${
          theme === "dark" ? "text-[#b0b0b0]" : "text-[#757373]"
        } text-lg mb-8`}
      >
        Replinsh man have things gathering lights yielding shall you
      </p>
      <div className="fea-base grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          className={`fea-box ${
            theme === "dark" ? "bg-[#333333]" : "bg-white"
          } p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105`}
        >
          <i className="fas fa-graduation-cap text-4xl text-[#fdc93b] mb-4"></i>
          <h3
            className={`text-xl font-semibold ${
              theme === "dark" ? "text-white" : "text-[#334f6c]"
            } mb-4`}
          >
            Scholarship Facility
          </h3>
          <p
            className={`text-base ${
              theme === "dark" ? "text-[#b0b0b0]" : "text-[#757373]"
            }`}
          >
            One make creepth, man bearing their firmament won't great heaven
          </p>
        </div>
        <div
          className={`fea-box ${
            theme === "dark" ? "bg-[#333333]" : "bg-white"
          } p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105`}
        >
          <i className="fas fa-file-certificate text-4xl text-[#fdc93b] mb-4"></i>
          <h3
            className={`text-xl font-semibold ${
              theme === "dark" ? "text-white" : "text-[#334f6c]"
            } mb-4`}
          >
            Dell Online Courses
          </h3>
          <p
            className={`text-base ${
              theme === "dark" ? "text-[#b0b0b0]" : "text-[#757373]"
            }`}
          >
            One make creepth, man bearing their firmament won't great heaven
          </p>
        </div>
        <div
          className={`fea-box ${
            theme === "dark" ? "bg-[#333333]" : "bg-white"
          } p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105`}
        >
          <i className="fas fa-award text-4xl text-[#fdc93b] mb-4"></i>
          <h3
            className={`text-xl font-semibold ${
              theme === "dark" ? "text-white" : "text-[#334f6c]"
            } mb-4`}
          >
            Global Certification
          </h3>
          <p
            className={`text-base ${
              theme === "dark" ? "text-[#b0b0b0]" : "text-[#757373]"
            }`}
          >
            One make creepth, man bearing their firmament won't great heaven
          </p>
        </div>
      </div>
    </section>
  );
}
