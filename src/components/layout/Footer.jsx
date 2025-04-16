"use client";

export default function Footer({ theme }) {
  return (
    <footer
      className={`p-12 flex flex-col sm:flex-row justify-between gap-8 ${
        theme === "dark" ? "bg-[#101c32]" : "bg-[#f9f9ff]"
      } text-[#b1bbc6]`}
    >
      <div className="footer-col w-full sm:w-1/4 mb-6 sm:mb-0">
        <h3 className="text-xl font-semibold text-amber-300">Top Products</h3>
        <ul>
          <li>Manage Reputation</li>
          <li>Power tools</li>
          <li>Managed Website</li>
          <li>Marketing service</li>
        </ul>
      </div>
      <div className="footer-col w-full sm:w-1/4 mb-6 sm:mb-0">
        <h3 className="text-xl font-semibold text-amber-300">Quick Link</h3>
        <ul>
          <li>Job</li>
          <li>Brand Assets</li>
          <li>Investor Relations</li>
          <li>Terms of Services</li>
        </ul>
      </div>
      <div className="footer-col w-full sm:w-1/4 mb-6 sm:mb-0">
        <h3 className="text-xl font-semibold text-amber-300">Resources</h3>
        <ul>
          <li>Guides</li>
          <li>Research</li>
          <li>Experts</li>
        </ul>
      </div>

      {/* Newsletter Section */}
      <div className="w-full sm:w-1/4 flex flex-col items-start bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-black mb-4">Newsletter</h3>
        <p className="text-base text-[#757373] mb-4">
          You can trust us. We only send promo offers
        </p>
        <div className="mt-4 flex flex-col gap-4 w-full">
          <input
            type="email"
            className="p-3 rounded-md bg-[#334f6c] text-white w-full"
            placeholder="Your Email Address"
          />
          <button className="px-6 py-3 bg-[#fdc938] text-white rounded-md hover:bg-[#fdc93b] w-full">
            Subscribe
          </button>
        </div>
      </div>
    </footer>
  );
}
