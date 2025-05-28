import { Link } from "react-router";

const AllJobsCard = () => {
  return (
    <>
      <Link className="block group">
        <div className="bg-white shadow-md hover:shadow-lg transition rounded-lg overflow-hidden border border-gray-200 group-hover:border-teal-700 h-full">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 group-hover:text-teal-700">
              Frontend Developer
            </h2>
            <p className="text-gray-600">TechNova Inc.</p>
            <div className="mt-2 flex items-center justify-between text-sm">
              <span className="text-gray-500">New York, NY</span>
              <span className="text-gray-500">Full Time</span>
            </div>
            <div className="mt-2 text-gray-600">
              <span>Salary: $60k - $80k</span>
            </div>
            <div className="mt-2 text-sm text-gray-500">
              Deadline: <strong>Dec 31, 2024</strong>
            </div>
            <div className="mt-2 text-sm text-gray-500">
              Applicants: <strong>45</strong>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200 text-sm text-gray-600">
              Posted by <span className="font-medium">TechNova Inc.</span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default AllJobsCard;
