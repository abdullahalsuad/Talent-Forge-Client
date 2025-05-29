const SingleJobCardSkeleton = () => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 h-full animate-pulse">
      <div className="p-6 space-y-4">
        {/* Title */}
        <div className="h-6 bg-gray-200 rounded w-3/4"></div>

        {/* Company Name */}
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>

        {/* Location & Job Type */}
        <div className="flex items-center justify-between">
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        </div>

        {/* Salary */}
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>

        {/* Deadline & Applicants */}
        <div className="flex flex-col space-y-2">
          <div className="h-4 bg-gray-200 rounded w-1/3"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        </div>

        {/* Posted By */}
        <div className="pt-4 border-t border-gray-200 mt-4">
          <div className="h-4 bg-gray-200 rounded w-1/3"></div>
        </div>
      </div>
    </div>
  );
};

export default SingleJobCardSkeleton;
