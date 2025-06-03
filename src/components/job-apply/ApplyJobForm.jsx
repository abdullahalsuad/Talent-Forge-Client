import { IoMdClose } from "react-icons/io";

const ApplyJobForm = ({ setIsModalOpen, handleApplyJob }) => {
  return (
    <>
      <div className="fixed inset-0  flex items-center justify-center px-4 py-6 backdrop-blur-xs cursor-pointer">
        {/* Modal Card */}
        <div className="bg-white rounded-lg shadow-lg max-w-lg w-full max-h-[80vh] overflow-y-auto p-6 relative border border-gray-100">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Apply for Job
            </h2>
            <button
              onClick={() => setIsModalOpen(false)}
              className=" text-red-400 mb-6 cursor-pointer  hover:-translate-y-1  transition-all duration-300 transform ease-in-out"
            >
              <IoMdClose size={30} />
            </button>
          </div>

          <form className="space-y-6 " onSubmit={handleApplyJob}>
            {/* Full Name */}
            <div>
              <label
                htmlFor="applicantName"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                id="applicantName"
                type="text"
                name="applicantName"
                required
                placeholder="John Doe"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
            </div>

            {/* Email Address */}
            <div>
              <label
                htmlFor="applicantEmail"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                id="applicantEmail"
                type="email"
                name="applicantEmail"
                required
                placeholder="you@example.com"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="applicantPhone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                id="applicantPhone"
                type="number"
                name="applicantNumber"
                required
                placeholder="+1 (555) 123-4567"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
            </div>

            {/* GitHub Link */}
            <div>
              <label
                htmlFor="applicantGithub"
                className="block text-sm font-medium text-gray-700"
              >
                GitHub Profile (optional)
              </label>
              <input
                id="applicantGithub"
                type="url"
                name="applicantGithub"
                placeholder="https://github.com/yourusername"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
            </div>

            {/* LinkedIn Link */}
            <div>
              <label
                htmlFor="applicantLinkedin"
                className="block text-sm font-medium text-gray-700"
              >
                LinkedIn Profile (optional)
              </label>
              <input
                id="applicantLinkedin"
                type="url"
                name="applicantLinkedin"
                placeholder="https://linkedin.com/in/yourprofile"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
            </div>

            {/* CV / Resume Link */}
            <div>
              <label
                htmlFor="applicantCV"
                className="block text-sm font-medium text-gray-700"
              >
                CV / Resume Link
              </label>
              <input
                id="applicantCV"
                type="url"
                name="applicantCV"
                required
                placeholder="https://drive.google.com/resume.pdf"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="px-6 py-2 bg-gray-800 hover:bg-gray-900 text-white font-medium rounded-md  hover:-translate-y-1  transition-all duration-300 transform ease-in-out cursor-pointer"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ApplyJobForm;
