/* eslint-disable react-refresh/only-export-components */
import axios from "axios";
import { createContext, useEffect, useState } from "react";

// Creating a context
export const JobsDataContext = createContext(null);

const JobsDataProvider = ({ children }) => {
  let [loading, setLoading] = useState(true);
  let [jobsData, setJobsData] = useState([]);

  // Get all jobs
  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/v1/jobs");
        const jobsData = response.data;
        setJobsData(jobsData);
        setLoading(false);
      } catch (error) {
        console.log("Failed to fetch all jobs", error);
      }
    };
    fetchAllJobs();
  }, []);

  const data = { loading, jobsData };

  return <JobsDataContext value={data}>{children}</JobsDataContext>;
};

export default JobsDataProvider;
