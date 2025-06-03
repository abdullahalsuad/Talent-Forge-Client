import React from "react";

const MyApplicationTable = ({ myApplications }) => {
  console.log(myApplications);

  const formatDate = (isoDateString) => {
    const date = new Date(isoDateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      <div className="bg-white shadow-md rounded-md border border-gray-200 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-center text-[18px] font-bold text-white">
                Job Title
              </th>
              <th className="px-6 py-3 text-center text-[18px] font-bold text-white">
                Company
              </th>
              <th className="px-6 py-3 text-center text-[18px] font-bold text-white">
                Applied On
              </th>
              <th className="px-6 py-3 text-center text-[18px] font-bold text-white">
                Deadline
              </th>
              <th className="px-6 py-3 text-center text-[18px] font-bold text-white">
                Status
              </th>
              <th className="px-6 py-3 text-center text-[18px] font-bold text-white">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {/* Row Example - Repeated for demo */}

            {myApplications.map((application) => (
              <tr className=" transition" key={application._id}>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <div className="text-[16px] font-medium text-gray-800">
                    Frontend Developer
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <div className="text-[16px] font-medium text-gray-800">
                    TechNova Inc.
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <div className="text-[16px] font-medium text-gray-800">
                    {formatDate(application.createdAt)}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <div className="text-[16px] font-medium text-gray-800">
                    Jun 1, 2025
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <span className="inline-flex px-2 py-1 text-[16px] font-medium rounded bg-yellow-100 text-yellow-800">
                    Pending
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center text-[16px] font-medium space-x-2 flex justify-center gap-6">
                  <button
                    type="button"
                    className="text-red-700 hover:text-red-900 focus:outline-none cursor-pointer"
                  >
                    Withdraw
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyApplicationTable;
