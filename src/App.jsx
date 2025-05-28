import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./pages/shared/Navbar";
import Footer from "./pages/shared/Footer";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar */}
      <header>
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="flex-grow py-8 px-4 sm:px-6 lg:px-8">
        <div className="w-10/12 mx-auto">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
