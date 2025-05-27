import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home/Home";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import MyJobs from "../pages/my-jobs/MyJobs";
import MyApplications from "../pages/my-applications/MyApplications";
import { AllJobs } from "../pages/jobs/AllJobs";
import PostAJob from "../pages/post-jobs/PostAJob";

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
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/add-job",
        element: <PostAJob />,
      },

      {
        path: "/my-jobs",
        element: <MyJobs />,
      },
      {
        path: "/my-applications",
        element: <MyApplications />,
      },
    ],
  },
]);

export default router;
