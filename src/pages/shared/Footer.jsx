// src/components/layout/Footer.jsx

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Company Info */}
        <div className="col-span-1 lg:col-span-2">
          <h2 className="text-2xl font-bold text-white mb-4">CareerCode</h2>
          <p className="text-gray-400 mb-4 text-sm md:text-base">
            Helping job seekers find their dream jobs and employers find top
            talent — fast, easy, and free.
          </p>
          <div className="flex space-x-4 mt-4">
            {/* Replace with your actual social icons or use react-icons */}
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-white transition"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-white transition"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-white transition"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links - Jobs */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Jobs</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/jobs"
                className="text-gray-400 hover:text-white transition"
              >
                Browse Jobs
              </a>
            </li>
            <li>
              <a
                href="/add-jobs"
                className="text-gray-400 hover:text-white transition"
              >
                Post a Job
              </a>
            </li>
            <li>
              <a
                href="/my-applications"
                className="text-gray-400 hover:text-white transition"
              >
                My Applications
              </a>
            </li>
            <li>
              <a
                href="/my-jobs"
                className="text-gray-400 hover:text-white transition"
              >
                My Posted Jobs
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/faq"
                className="text-gray-400 hover:text-white transition"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className="text-gray-400 hover:text-white transition"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="/help-center"
                className="text-gray-400 hover:text-white transition"
              >
                Help Center
              </a>
            </li>
            <li>
              <a
                href="/terms"
                className="text-gray-400 hover:text-white transition"
              >
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter / Contact */}
        <div className="col-span-1 lg:col-span-2">
          <h3 className="text-lg font-semibold text-white mb-4">
            Stay in the Loop
          </h3>
          <p className="text-gray-400 mb-4 text-sm md:text-base">
            Subscribe to our newsletter for job alerts, tips, and updates.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md text-gray-800 focus:outline-none w-full"
              required
            />
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} CareerCode. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
