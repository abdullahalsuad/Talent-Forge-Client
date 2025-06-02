import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home/Home";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import MyJobs from "../pages/my-jobs/MyJobs";
import MyApplications from "../pages/my-applications/MyApplications";
import { AllJobs } from "../pages/jobs/AllJobs";
import PostAJob from "../pages/post-jobs/PostAJob";
import PrivateRoute from "./PrivateRoute";
import JobDetails from "../pages/jobs/JobDetails";
import AuthLayout from "../components/authentication/AuthLayout";
import ApplyJob from "../components/job-apply/ApplyJob";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/jobs",
        element: <AllJobs />,
      },
      {
        path: "jobs/details/:id",
        element: <JobDetails />,
      },

      {
        path: "/add-job",
        element: (
          <PrivateRoute>
            <PostAJob />
          </PrivateRoute>
        ),
      },

      {
        path: "/apply/:id",
        element: (
          <PrivateRoute>
            <ApplyJob />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-applications",
        element: (
          <PrivateRoute>
            <MyApplications />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-jobs",
        element: (
          <PrivateRoute>
            <MyJobs />
          </PrivateRoute>
        ),
      },
      // Login and Register
      {
        path: "/register",
        element: (
          <AuthLayout>
            <Register />
          </AuthLayout>
        ),
      },
      {
        path: "/login",
        element: (
          <AuthLayout>
            <Login />
          </AuthLayout>
        ),
      },
    ],
  },
]);

export default router;
