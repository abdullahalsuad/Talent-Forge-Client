/* eslint-disable react-refresh/only-export-components */
import axios from "axios";
import { createContext, use, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";
import useAxiosSecure from "../hooks/useAxiosSecure";

// Creating a context
export const JobsDataContext = createContext(null);

const JobsDataProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [jobsData, setJobsData] = useState([]);
  const [userJobsData, setUserJobsData] = useState([]);

  const { user } = use(AuthContext);
  const axiosSecure = useAxiosSecure();

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

  // Get all jobs by email
  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        if (user?.email) {
          const response = await axiosSecure.get(`/user/${user?.email}`);
          const jobsData = await response.data;
          setUserJobsData(jobsData);
          setLoading(false);
        }
      } catch (error) {
        console.log("Failed to fetch all jobs", error);
      }
    };
    fetchAllJobs();
  }, [user, axiosSecure]);

  const data = { loading, jobsData, userJobsData };

  return <JobsDataContext value={data}>{children}</JobsDataContext>;
};

export default JobsDataProvider;
