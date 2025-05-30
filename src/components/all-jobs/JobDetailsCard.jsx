import { Link } from "react-router";

const JobDetailsCard = ({ jobDetails }) => {
  // Format date helper
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
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
            </div>
          </div>

          {/* Body Section */}
          <div className="p-6 space-y-6">
            {/* Info Badges */}
            <div className="flex flex-wrap gap-3">
              {jobDetails?.employmentType && (
                <div className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md text-sm">
                  {jobDetails.employmentType}
                </div>
              )}
              {jobDetails?.workType && (
                <div className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md text-sm">
                  {jobDetails.workType}
                </div>
              )}
              {jobDetails?.experienceLevel && (
                <div className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md text-sm">
                  {jobDetails.experienceLevel}
                </div>
              )}
              {jobDetails?.salaryMin !== undefined &&
                jobDetails?.salaryMax !== undefined && (
                  <div className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md text-sm">
                    Salary: ${jobDetails.salaryMin.toLocaleString()} - $
                    {jobDetails.salaryMax.toLocaleString()}
                  </div>
                )}
              {jobDetails?.applicationDeadline && (
                <div className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md text-sm">
                  Deadline: {formatDate(jobDetails.applicationDeadline)}
                </div>
              )}
            </div>

            {/* Description */}
            {jobDetails?.description && (
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  About the Role
                </h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {jobDetails.description}
                </p>
              </div>
            )}

            {/* Footer Actions */}
            <div className="pt-6 border-t border-gray-200 mt-8 flex justify-between items-center">
              <div>
                <span className="text-gray-600">Posted by:</span>
                <span className="ml-2 font-medium text-gray-800">
                  {jobDetails?.displayName}
                </span>
              </div>
              <Link
                to={`/application/apply/${jobDetails?._id}`}
                className="px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white font-medium rounded-md transition"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>

        {/* Back to Jobs Button */}
        <div className="mt-8 text-center">
          <Link
            to="/jobs"
            className="text-gray-600 hover:text-gray-800 font-medium underline"
          >
            ← Back to All Jobs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsCard;
