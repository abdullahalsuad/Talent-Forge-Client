import React from "react";
import { Link } from "react-router";

const PostAJobForm = ({ handleSubmit }) => {
  return (
    <>
      <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 my-10">
        <div className="max-w-4xl mx-auto bg-white shadow-md border border-gray-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Post a New Job
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Photo URL Input */}
            <div className="mb-5">
              <label
                htmlFor="photoURL"
                className="block text-gray-700 font-medium mb-2"
              >
                Photo URL
              </label>
              <input
                required
                id="photoURL"
                type="url"
                name="photoURL"
                placeholder="https://example.com/photo.jpg "
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C68EFD]"
              />
            </div>
            {/* Position Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Position Title
              </label>
              <input
                required
                type="text"
                name="positionTitle"
                placeholder="e.g., Frontend Developer"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C68EFD]"
              />
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Company Name
              </label>
              <input
                required
                type="text"
                name="companyName"
                placeholder="e.g., TechNova Inc."
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C68EFD]"
              />
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <input
                required
                type="text"
                name="location"
                placeholder="e.g., Remote / New York, NY"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C68EFD]"
              />
            </div>

            {/* Employment Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Employment Type
              </label>
              <select
                required
                name="employmentType"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C68EFD]"
              >
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Internship">Internship</option>
                <option value="Project-Based">Project-Based</option>
              </select>
            </div>

            {/* Work Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Work Type
              </label>
              <select
                required
                name="workType"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C68EFD]"
              >
                <option value="On-Site">On-Site</option>
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>

            {/* Experience Level */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Experience Level
              </label>
              <select
                required
                name="experienceLevel"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C68EFD]"
              >
                <option value="Entry Level">Entry Level</option>
                <option value="Mid Level">Mid Level</option>
                <option value="Senior Level">Senior Level</option>
              </select>
            </div>

            {/* Salary Range */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Minimum Salary ($)
                </label>
                <input
                  required
                  type="number"
                  name="salaryMin"
                  placeholder="e.g. 50000"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C68EFD]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Maximum Salary ($)
                </label>
                <input
                  required
                  type="number"
                  name="salaryMax"
                  placeholder="e.g. 80000"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C68EFD]"
                />
              </div>
            </div>

            {/* Application Deadline */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Application Deadline
              </label>
              <input
                required
                type="date"
                name="applicationDeadline"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C68EFD]"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Job Description
              </label>
              <textarea
                required
                name="description"
                rows={6}
                placeholder="Responsibilities, requirements, etc."
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C68EFD]"
              ></textarea>
            </div>

            {/* Apply Button Text */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Apply Method
              </label>
              <input
                required
                type="text"
                name="applyMethod"
                placeholder="test@gramil.com"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C68EFD]"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-4 pt-4">
              <button
                type="button"
                className="px-10 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 transition cursor-pointer"
              >
                <Link to={"/jobs"}>Cancel</Link>
              </button>
              <button
                type="submit"
                className="px-10 py-2.5 text-sm font-medium text-white bg-gray-800 rounded-md hover:bg-gray-900 transition cursor-pointer"
              >
                Post Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PostAJobForm;
