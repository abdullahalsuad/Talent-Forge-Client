import { Link } from "react-router";

const JobDetailsCard = ({ jobDetails }) => {
  // Format date helper
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 mt-10 mb-30">
        <div className="max-w-4xl mx-auto">
          {/* Back to Jobs link - using your existing routing */}
          <div className="mb-6">
            <Link
              to="/jobs"
              className="text-gray-600 hover:text-gray-800 font-medium"
            >
              ← Back to Jobs
            </Link>
          </div>

          {/* Job Card */}
          <div className="bg-white shadow-md rounded-lg border border-gray-200 overflow-hidden">
            {/* Header Section */}
            <div className="p-6 border-b border-gray-200">
              <h1 className="text-2xl font-bold text-gray-800">
                {jobDetails?.positionTitle}
              </h1>
              <div className="mt-1 flex items-center space-x-2">
                <span className="text-gray-600">{jobDetails?.companyName}</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-600">{jobDetails?.location}</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-600">
                  {jobDetails?.totalApplicants} applicants
                </span>
              </div>
            </div>

            {/* Body Section */}
            <div className="p-6 space-y-6">
              {/* Key Info - matches image layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="text-gray-600 mr-4">Job Type:</span>
                    <span className="font-medium">
                      {jobDetails?.employmentType}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600 mr-4">Deadline:</span>
                    <span className="font-medium">
                      {formatDate(jobDetails?.applicationDeadline)}
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="text-gray-600 mr-4">Salary:</span>
                    <span className="font-medium">
                      USD {jobDetails?.salaryMin} - {jobDetails?.salaryMax}
                    </span>
                  </div>
                </div>
              </div>

              {/* Job Description */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  Job Description
                </h2>
                <p className="text-gray-700">
                  We are looking for a Senior Frontend Developer to join our
                  dynamic team. You will be responsible for building the next
                  generation of web applications using modern technologies like
                  React, TypeScript, and Node.js.
                </p>
              </div>

              {/* Responsibilities */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  Responsibilities
                </h2>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Develop and maintain user-facing web applications</li>
                  <li>Collaborate with designers and product managers</li>
                  <li>Write clean, maintainable, and efficient code</li>
                  <li>Participate in code reviews and technical discussions</li>
                  <li>
                    Optimize applications for maximum speed and scalability
                  </li>
                  <li>Stay up-to-date with emerging technologies</li>
                </ul>
              </div>

              {/* Requirements */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  Requirements
                </h2>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>5+ years of experience in frontend development</li>
                  <li>Expert knowledge of React and TypeScript</li>
                  <li>Experience with modern build tools and workflows</li>
                  <li>Strong understanding of web performance optimization</li>
                  <li>Experience with testing frameworks (Jest, Cypress)</li>
                  <li>Excellent problem-solving and communication skills</li>
                  <li>
                    Bachelor's degree in Computer Science or related field
                  </li>
                </ul>
              </div>

              {/* About Company */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  About the Company
                </h2>
                <p className="text-gray-700">
                  Tech Corp is a leading technology company focused on building
                  innovative web solutions. We have a strong culture of
                  collaboration, continuous learning, and technical excellence.
                </p>
              </div>

              {/* Job Details */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h2 className="text-lg font-semibold text-gray-800 mb-3">
                  Job Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex">
                      <span className="text-gray-600 w-28">Category:</span>
                      <span className="font-medium">Technology</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-600 w-28">Posted:</span>
                      <span className="font-medium">1/10/2024</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex">
                      <span className="text-gray-600 w-28">Status:</span>
                      <span className="font-medium">Active</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-600 w-28">Posted by:</span>
                      <span className="font-medium">John Smith</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Application Status */}
              <div className="pt-4 border-t border-gray-200">
                {new Date(jobDetails?.applicationDeadline) < new Date() ? (
                  <div className="text-center py-3">
                    <p className="text-gray-600 font-medium">
                      Application Closed
                    </p>
                    <p className="text-gray-500 text-sm mt-1">
                      The application deadline has passed.
                    </p>
                  </div>
                ) : (
                  <div className="flex justify-center">
                    <Link
                      to={`/application/apply/${jobDetails?._id}`}
                      className="px-6 py-2 bg-gray-800 hover:bg-gray-900 text-white font-medium rounded-md"
                    >
                      Apply Now
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetailsCard;
