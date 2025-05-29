import { use } from "react";
import SingleJobCard from "../../components/all-jobs/SingleJobCard";
import { JobsDataContext } from "../../context/JobsDataProvider";
import SingleJobCardSkeleton from "../../components/all-jobs/SingleJobCardSkeleton";

const AllJobsCardLayout = () => {
  const { loading, jobsData } = use(JobsDataContext);

  console.log(jobsData);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Job Card */}

        {loading ? (
          <>
            <SingleJobCardSkeleton />
            <SingleJobCardSkeleton />
            <SingleJobCardSkeleton />
            <SingleJobCardSkeleton />
            <SingleJobCardSkeleton />
            <SingleJobCardSkeleton />
          </>
        ) : (
          jobsData.map((jobData) => (
            <SingleJobCard key={jobData._id} jobData={jobData} />
          ))
        )}
      </div>
    </>
  );
};

export default AllJobsCardLayout;
