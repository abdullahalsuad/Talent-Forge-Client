import { Link } from "react-router";

const PostAJobForm = ({ handleSubmit }) => {
  return (
    <>
      <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 my-10">
        <div className="max-w-4xl mx-auto bg-white shadow-md border border-gray-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Job Details</h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Job Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Job Title <span className="text-red-500">*</span>
              </label>
              <input
                required
                type="text"
                name="positionTitle"
                placeholder="e.g. Senior Frontend Developer"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C68EFD]"
              />
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Location <span className="text-red-500">*</span>
              </label>
              <input
                required
                type="text"
                name="location"
                placeholder="e.g. San Francisco, CA"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C68EFD]"
              />
            </div>

            {/* Job Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Job Type <span className="text-red-500">*</span>
              </label>
              <select
                required
                name="employmentType"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C68EFD]"
              >
                <option value="">Select job type</option>
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Category <span className="text-red-500">*</span>
              </label>
              <select
                required
                name="category"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C68EFD]"
              >
                <option value="">Select category</option>
                <option value="Technology">Technology</option>
                <option value="Marketing">Marketing</option>
                <option value="Design">Design</option>
                <option value="Business">Business</option>
              </select>
            </div>

            {/* Experience Level */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Experience Level <span className="text-red-500">*</span>
              </label>
              <select
                required
                name="experienceLevel"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C68EFD]"
              >
                <option value="">Select level</option>
                <option value="Entry Level">Entry Level</option>
                <option value="Mid Level">Mid Level</option>
                <option value="Senior Level">Senior Level</option>
              </select>
            </div>

            {/* Application Deadline */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Application Deadline <span className="text-red-500">*</span>
              </label>
              <input
                required
                type="date"
                name="applicationDeadline"
                placeholder="mm/dd/yyyy"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C68EFD]"
              />
            </div>

            {/* Currency and Salary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Currency <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  name="currency"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C68EFD]"
                >
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Minimum Salary <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="number"
                  name="salaryMin"
                  placeholder="50000"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C68EFD]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Maximum Salary <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="number"
                  name="salaryMax"
                  placeholder="80000"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C68EFD]"
                />
              </div>
            </div>

            {/* Job Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Job Description <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                name="description"
                rows={6}
                placeholder="Describe the role, what the candidate will be doing..."
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C68EFD]"
              ></textarea>
            </div>

            {/* Company Information */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Company Information <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                name="aboutCompany"
                rows={6}
                placeholder="Tell candidates about your company, culture, values..."
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C68EFD]"
              ></textarea>
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
