import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import router from "./routes/router.jsx";
import { RouterProvider } from "react-router";
import AuthProvider from "./context/AuthProvider.jsx";
import JobsDataProvider from "./context/JobsDataProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <JobsDataProvider>
        <RouterProvider router={router} />
      </JobsDataProvider>
    </AuthProvider>
  </StrictMode>
);
