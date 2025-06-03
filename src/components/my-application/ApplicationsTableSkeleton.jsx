import React from "react";

const ApplicationsTableSkeleton = () => {
  return (
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
          {Array.from({ length: 8 }).map((_, rowIdx) => (
            <tr key={rowIdx}>
              {[...Array(6)].map((_, cellIdx) => (
                <td
                  key={cellIdx}
                  className="px-6 py-4 whitespace-nowrap text-center "
                >
                  <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto shimmer"></div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicationsTableSkeleton;
