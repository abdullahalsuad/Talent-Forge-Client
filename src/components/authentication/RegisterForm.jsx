import { Link } from "react-router";
import { FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { LuEye } from "react-icons/lu";

const RegisterForm = ({
  showPassword,
  setShowPassword,
  handleRegistration,
  error,
  isLoading,
  handleGoogleSignIn,
}) => {
  return (
    <>
      <div className="flex items-center justify-center my-20  py-12 px-4   sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 border border-gray-300  bg-white p-10 rounded-xl shadow-md">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Create your account
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-indigo-600 hover:text-indigo-500 font-medium"
              >
                Sign in
              </Link>
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleRegistration}>
            {/* Full Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C68EFD]"
                placeholder="John Doe"
              />
            </div>

            {/* Email Address */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C68EFD]"
                placeholder="you@example.com"
              />
            </div>

            {/* Photo URL Input */}
            <div className="mb-5">
              <label
                htmlFor="photoURL"
                className="block text-gray-700 font-medium mb-2"
              >
                Photo URL
              </label>
              <input
                id="photoURL"
                type="url"
                name="photoURL"
                placeholder="https://example.com/photo.jpg "
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C68EFD]"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="relative mt-1">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C68EFD]"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 text-gray-600"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <LuEye size={25} />
                  ) : (
                    <FaRegEyeSlash size={25} />
                  )}
                </button>
              </div>
            </div>

            {/* Divider + Google Sign Up */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            {/* Google Button */}
            <button
              onClick={handleGoogleSignIn}
              type="button"
              className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer"
            >
              <FcGoogle size={25} />
              Sign up with Google
            </button>

            {/* Submit Button */}
            <div>
              {error && (
                <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
              )}
              <button
                type="submit"
                disabled={isLoading}
                className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 ${
                  isLoading
                    ? "cursor-not-allowed bg-gray-400"
                    : "cursor-pointer bg-gray-900 hover:bg-gray-800"
                } `}
              >
                {isLoading ? "Loading...." : " Create Account"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
