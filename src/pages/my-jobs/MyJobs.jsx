import { use } from "react";
import { JobsDataContext } from "../../context/JobsDataProvider";
import { Link } from "react-router";
import { FaEdit } from "react-icons/fa";
import { LuTrash } from "react-icons/lu";
import { TbFileCv } from "react-icons/tb";

const MyJobs = () => {
  const { userJobsData } = use(JobsDataContext);

  // Format date helper
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 my-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">My Posted Jobs</h1>
            <Link
              to="/add-job"
              className="inline-flex items-center px-4 py-2 bg-gray-700 text-white text-[16px] font-medium rounded-md hover:bg-gray-900 transition"
            >
              + Post New Job
            </Link>
          </div>

          {/* Responsive Table Wrapper */}
          <div className="bg-white shadow-md rounded-lg border border-gray-200 overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-700 ">
                <tr>
                  <th className="px-6 py-3 text-center text-[18px] font-bold  text-white">
                    Job Title
                  </th>
                  <th className="px-6 py-3 text-center text-[18px] font-bold text-white">
                    Company
                  </th>
                  <th className="px-6 py-3 text-center text-[18px] font-bold text-white">
                    Location
                  </th>
                  <th className="px-6 py-3 text-center text-[18px] font-bold text-white">
                    Type
                  </th>
                  <th className="px-6 py-3 text-center text-[18px] font-bold text-white">
                    Deadline
                  </th>
                  <th className="px-6 py-3 text-center text-[18px] font-bold text-white">
                    Applicants
                  </th>
                  <th className="px-6 py-3 text-center text-[18px] font-bold text-white">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {userJobsData.map((job) => (
                  <tr key={job._id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <div className="text-[16px] font-medium text-gray-800">
                        {job.positionTitle}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <div className="text-[16px] text-gray-800 font-medium">
                        {job.companyName}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <div className="text-[16px] text-gray-800 font-medium">
                        {job.location}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <span className="inline-flex px-2 py-1 text-xs font-medium rounded bg-gray-100 text-gray-800">
                        {job.employmentType}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <div className="text-[16px] text-gray-800 font-medium">
                        {formatDate(job.applicationDeadline)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <div className="text-[16px] text-gray-800 font-medium">
                        {job.totalApplicants}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap  text-center text-[16px] font-medium space-x-2 flex ">
                      <Link
                        // to={`/jobs/update/${job._id}`}
                        className="text-gray-700 hover:text-gray-900"
                      >
                        <FaEdit size={30} />
                      </Link>
                      <button
                        type="button"
                        className="text-red-700 hover:text-red-900 focus:outline-none cursor-pointer"
                      >
                        <LuTrash size={30} />
                      </button>
                      <Link
                        to={`/my-jobs/${job._id}`}
                        className="text-teal-700 hover:text-teal-900"
                      >
                        <TbFileCv size={30} />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Empty State (Optional) */}
          {userJobsData.length === 0 && (
            <div className="text-center py-10">
              <p className="text-gray-500">You haven't posted any jobs yet.</p>
              <Link
                to="/add-jobs"
                className="mt-4 inline-block text-indigo-600 hover:text-indigo-800 underline"
              >
                Post Your First Job
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MyJobs;
