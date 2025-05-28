import React from "react";
import { Link } from "react-router";
import AllJobsCard from "../../components/all-jobs/AllJobsCard";
import JobsFilters from "../../components/all-jobs/JobsFilters";

export const AllJobs = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Browse All Jobs
          </h1>
          <p className="mt-2 text-gray-600">Find your next opportunity today</p>
        </div>

        {/* Filters & Search */}
        <JobsFilters />
        {/* No Jobs Found Message (Optional) */}
        {/* <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No jobs found. Try adjusting your filters.</p>
        </div> */}

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Job Card */}
          <AllJobsCard />
        </div>
      </div>
    </div>
  );
};
