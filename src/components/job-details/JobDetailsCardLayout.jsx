import { useState } from "react";
import JobDetailsCard from "./JobDetailsCard";
import ApplyJobForm from "../job-apply/ApplyJobForm";

const JobDetailsCardLayout = ({ jobDetails }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <JobDetailsCard jobDetails={jobDetails} setIsModalOpen={setIsModalOpen} />

      {isModalOpen && <ApplyJobForm setIsModalOpen={setIsModalOpen} />}
    </>
  );
};

export default JobDetailsCardLayout;
