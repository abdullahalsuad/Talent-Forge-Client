import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import JobDetailsCard from "../../components/all-jobs/JobDetailsCard";
import JobDetailsSkeleton from "../../components/all-jobs/JobDetailsSkeleton";

const JobDetails = () => {
  const [jobDetails, setJobDetails] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  // Get single job details
  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/jobs/${id}`
        );
        const jobsData = response.data;
        setJobDetails(jobsData);
        setIsLoading(false);
      } catch (error) {
        console.log("Failed to fetch all jobs", error);
      }
    };
    fetchSingleJob();
  }, [id]);

  return (
    <>
      {isLoading ? (
        <JobDetailsSkeleton />
      ) : (
        <JobDetailsCard jobDetails={jobDetails} />
      )}
    </>
  );
};

export default JobDetails;
