import { Link } from "react-router";

const SingleJobCard = ({ jobData }) => {
  console.log(jobData);

  return (
    <>
      <Link to={`/jobs/details/${jobData._id}`} className="block group">
        <div className="bg-white shadow-md hover:shadow-lg transition rounded-lg overflow-hidden border border-gray-200 group-hover:border-teal-700 h-full">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 group-hover:text-teal-700">
              {jobData.positionTitle}
            </h2>
            <p className="text-gray-600">{jobData.companyName}</p>
            <div className="mt-2 flex items-center justify-between text-sm">
              <span className="text-gray-500">{jobData.location}</span>
              <span className="text-gray-500">{jobData.employmentType}</span>
            </div>
            <div className="mt-2 text-gray-600">
              <span>
                Salary: ${jobData.salaryMax} - ${jobData.salaryMin}
              </span>
            </div>
            <div className="mt-2 text-sm text-gray-500">
              Deadline: <strong>{jobData.applicationDeadline}</strong>
            </div>
            <div className="mt-2 text-sm text-gray-500">
              Applicants: <strong>{jobData.totalApplicants}</strong>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200 text-sm text-gray-600">
              Posted by{" "}
              <span className="font-medium">{jobData.displayName}</span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default SingleJobCard;
