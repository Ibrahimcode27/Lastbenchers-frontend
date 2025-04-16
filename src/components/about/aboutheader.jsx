"use client";

export default function Section1() {
  return (
    <section className="px-6 py-12 flex flex-col-reverse sm:flex-row items-center sm:gap-12 pt-32">
      {/* Image Section */}
      <div className="sm:w-1/2 mb-8 sm:mb-0">
        <img
          src="/images/a.png"
          alt="About Image"
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="sm:w-1/2 text-center sm:text-left">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#334f6c] mb-4">
          Welcome To The LastBenchers, Enhance your Skills with the best online
          courses!!
        </h2>
        <p className="text-[#757373] mb-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
          veritatis saepe a, debitis omnis ullam esse.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
          <div className="flex items-center space-x-4 sm:space-x-6">
            <img
              src="/images/fe1.png"
              alt="Feature 1"
              className="w-12 sm:w-16 h-12 sm:h-16"
            />
            <div>
              <h5 className="font-semibold">400+ courses</h5>
              <p className="text-[#757373]">
                Lorem Nihil qui illum molestias nostrum voluptates.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4 sm:space-x-6">
            <img
              src="/images/fe2.png"
              alt="Feature 2"
              className="w-12 sm:w-16 h-12 sm:h-16"
            />
            <div>
              <h5 className="font-semibold">Lifetime Access</h5>
              <p className="text-[#757373]">
                Lorem Nihil qui illum molestias nostrum voluptates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
