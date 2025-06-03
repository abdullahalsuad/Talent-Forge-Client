import { use, useState } from "react";
import JobDetailsCard from "./JobDetailsCard";
import ApplyJobForm from "../job-apply/ApplyJobForm";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthProvider";

const JobDetailsCardLayout = ({ jobDetails }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const axiosSecure = useAxiosSecure();
  const { user } = use(AuthContext);

  // handling apply a job
  const handleApplyJob = async (e) => {
    e.preventDefault();

    const applicantLoginEmail = user?.email;

    // Collect data from jobDetails
    const jobId = jobDetails?._id;
    const creatorEmail = jobDetails?.creatorEmail;

    // Collect user input values from the form elements
    const form = e.target;
    const formData = new FormData(form);
    const formValues = Object.fromEntries(formData.entries());

    const applicantData = {
      ...formValues,
      applicantLoginEmail,
      jobId,
      creatorEmail,
    };

    // applicant's data  SEND to backend
    try {
      const response = await axiosSecure.post("/applicant", applicantData);

      if (response.statusText === "Created") {
        e.target.reset();
        toast.success("Applied successfully");
        setIsModalOpen(false);
      }
    } catch (error) {
      console.log("Failed to apply", error);
    }
  };

  return (
    <>
      <JobDetailsCard jobDetails={jobDetails} setIsModalOpen={setIsModalOpen} />

      {isModalOpen && (
        <ApplyJobForm
          setIsModalOpen={setIsModalOpen}
          handleApplyJob={handleApplyJob}
        />
      )}
    </>
  );
};

export default JobDetailsCardLayout;
