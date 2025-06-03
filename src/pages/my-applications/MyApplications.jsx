import React, { use, useEffect, useState } from "react";
import { Link } from "react-router";
import MyApplicationTable from "../../components/my-application/MyApplicationTable";
import axios from "axios";
import { AuthContext } from "../../context/AuthProvider";
import ApplicationsTableSkeleton from "../../components/my-application/ApplicationsTableSkeleton";

const MyApplications = () => {
  const { user } = use(AuthContext);
  const [myApplications, setMyApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const fetchMyApplicationsData = async () => {
      try {
        if (user?.email) {
          const response = await axios.get(
            `http://localhost:3000/api/v1/applied-jobs/${user?.email}`
          );
          const myApplicationData = response.data;
          setMyApplications(myApplicationData);
          setLoading(false);
        }
      } catch (error) {
        console.log("Failed to load my application", error);
      }
    };
    fetchMyApplicationsData();
  }, [user?.email]);

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 my-10">
        <div className="min-w-full mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">
              My Job Applications
            </h1>
            <Link
              to="/jobs"
              className="inline-flex items-center px-4 py-2 bg-gray-700 text-white text-[16px] font-medium rounded-md hover:bg-gray-900 transition"
            >
              Browse Jobs
            </Link>
          </div>

          {/* Responsive Table Wrapper */}
          {loading ? (
            <ApplicationsTableSkeleton />
          ) : (
            <MyApplicationTable myApplications={myApplications} />
          )}
        </div>
      </div>
    </>
  );
};

export default MyApplications;
