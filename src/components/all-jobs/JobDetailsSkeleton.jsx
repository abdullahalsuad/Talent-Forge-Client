const JobDetailsSkeleton = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Job Card Skeleton */}
        <div className="bg-white shadow-md rounded-lg border border-gray-200 overflow-hidden animate-pulse">
          {/* Header Section */}
          <div className="p-6 border-b border-gray-200">
            <div className="h-7 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="flex items-center space-x-2">
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1"></div>
              <div className="h-4 bg-gray-200 rounded w-1/5"></div>
            </div>
          </div>

          {/* Body Section */}
          <div className="p-6 space-y-6">
            {/* Info Badges */}
            <div className="flex flex-wrap gap-3">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-8 bg-gray-200 rounded-md w-32"></div>
              ))}
            </div>

            {/* Description */}
            <div className="space-y-3">
              <div className="h-6 bg-gray-200 rounded w-1/4"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>

            {/* Company Info */}
            <div className="space-y-3">
              <div className="h-6 bg-gray-200 rounded w-1/4"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>

            {/* Responsibilities */}
            <div className="space-y-3">
              <div className="h-6 bg-gray-200 rounded w-1/4"></div>
              <div className="flex flex-col space-y-2">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded w-4/5"></div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="pt-6 border-t border-gray-200 mt-8 flex justify-between items-center">
              <div className="h-5 bg-gray-200 rounded w-48"></div>
              <div className="h-10 bg-gray-200 rounded w-32"></div>
            </div>
          </div>
        </div>

        {/* Back to Jobs Button Skeleton */}
        <div className="mt-8 text-center">
          <div className="h-5 bg-gray-200 rounded w-48 mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsSkeleton;
