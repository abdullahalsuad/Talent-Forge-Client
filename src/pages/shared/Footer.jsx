import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Company Info */}
        <div className="col-span-1 lg:col-span-2">
          <h2 className="text-2xl font-bold text-white mb-4">Talent Forge</h2>
          <p className="text-gray-400 mb-4 text-sm md:text-base">
            Helping job seekers find their dream jobs and employers find top
            talent.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <Link
              to="#"
              aria-label="Facebook"
              className="hover:text-white transition"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
              </svg>
            </Link>
            <Link
              to="#"
              aria-label="Twitter"
              className="hover:text-white transition"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.087-.208-7.716-2.157-10.142-5.136-.424.726-.666 1.565-.666 2.476 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14-7.503 14-14 0-.21-.005-.418-.014-.626.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
              </svg>
            </Link>
            <Link
              to="#"
              aria-label="LinkedIn"
              className="hover:text-white transition"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Jobs Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Jobs</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/jobs"
                className="text-gray-400 hover:text-white transition duration-200"
              >
                Browse Jobs
              </Link>
            </li>
            <li>
              <Link
                to="/add-jobs"
                className="text-gray-400 hover:text-white transition duration-200"
              >
                Post a Job
              </Link>
            </li>
            <li>
              <Link
                to="/my-applications"
                className="text-gray-400 hover:text-white transition duration-200"
              >
                My Applications
              </Link>
            </li>
            <li>
              <Link
                to="/my-jobs"
                className="text-gray-400 hover:text-white transition duration-200"
              >
                My Posted Jobs
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/faq"
                className="text-gray-400 hover:text-white transition duration-200"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="text-gray-400 hover:text-white transition duration-200"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/help-center"
                className="text-gray-400 hover:text-white transition duration-200"
              >
                Help Center
              </Link>
            </li>
            <li>
              <Link
                to="/terms"
                className="text-gray-400 hover:text-white transition duration-200"
              >
                Terms & Conditions
              </Link>
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
          <form className="flex flex-col sm:flex-row gap-2 ">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2  text-white focus:outline-none w-full border border-gray-400 rounded"
              required
            />
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Talent Forge. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
