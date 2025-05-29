import React, { use } from "react";
import PostAJobForm from "../../components/post-a-job/PostAJobForm";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-toastify";
import axios from "axios";

const PostAJob = () => {
  const { user } = use(AuthContext);

  // Fetching username and email from Firebase
  const displayName = user?.displayName;
  const email = user?.email;

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Collect user input values from the form elements
    const form = e.target;
    const formData = new FormData(form);
    const formValues = Object.fromEntries(formData.entries());

    const jobData = {
      ...formValues,
      displayName,
      email,
      salaryMin: Number(formValues.salaryMin),
      salaryMax: Number(formValues.salaryMax),
    };

    // api call
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/jobs",
        jobData
      );

      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }

      const result = await response.json();
      if (result._id) {
        toast.success("job  added successfully!");
        // UI update
        e.target.reset();
      }
    } catch (error) {
      console.log("error from sending data to the server", error);
    }
  };
  return (
    <>
      <PostAJobForm handleSubmit={handleSubmit} />
    </>
  );
};

export default PostAJob;
