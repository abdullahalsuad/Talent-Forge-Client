import { FaQuoteLeft } from "react-icons/fa";
import { Link } from "react-router";

const Home = () => {
  return (
    <div className=" text-gray-700">
      {/* Hero Section */}
      <section className="relative bg-white py-20 px-6 md:py-32 overflow-hidden  rounded-md">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-white z-0"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block px-4 py-2 bg-gray-800 rounded-full mb-6 border border-gray-500 animate-pulse ">
            <p className="text-sm font-medium text-white ">
              🚀 New feature: AI Job Matching
            </p>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Find Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-900 to-teal-500">
              Dream Job
            </span>{" "}
            in Seconds
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Explore thousands of job opportunities across industries. Fast,
            free, and tailored to your skills.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/jobs"
              className="px-8 py-4 text-base font-medium text-gray-700 border border-gray-900 rounded-lg hover:bg-gray-100  hover:shadow-md transition-all duration-300 hover:scale-110"
            >
              Browse Jobs
            </Link>
            <Link
              to="/register"
              className="px-8 py-4 text-base font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 hover:shadow-md transition-all duration-300 hover:scale-110"
            >
              Get Started - It's Free
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Talent Forge
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We've built the most intuitive platform to connect talent with
              opportunity
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "💼",
                title: "Wide Range of Jobs",
                description:
                  "From entry-level to senior roles across tech, marketing, design, and more.",
              },
              {
                icon: "🔍",
                title: "Smart Search & Filters",
                description:
                  "Easily find jobs by location, salary, experience level, and job type.",
              },
              {
                icon: "🚀",
                title: "Easy Application Process",
                description:
                  "Apply to any job in seconds with one-click applications and resume upload support.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group bg-gray-50 p-8 rounded-xl bg-gradient-to-r from-gray-100 to-white hover:bg-white transition-all duration-300   hover:border-gray-200 shadow-sm hover:shadow-md border border-gray-200"
              >
                <div className="w-16 h-16 bg-white text-gray-700 rounded-2xl flex items-center justify-center mb-6 text-3xl shadow-sm group-hover:shadow-md transition">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Job Categories */}
      <section className="py-40 bg-gray-100 rounded-md border border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Job Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore opportunities in the most in-demand fields
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              "Software Engineering",
              "Web Development",
              "App Development",
              "Marketing",
              "Sales",
              "Design",
              "Finance",
              "Customer Support",
              "HR & Recruitment",
              "Healthcare",
              "Education",
              "Data Science",
              "Remote Jobs",
              "Internships",

              "UI/UX",
            ].map((cat, i) => (
              <div
                key={i}
                className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-gray-200 text-center cursor-pointer"
              >
                <p className="text-gray-700 font-medium hover:text-gray-900 transition">
                  {cat}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-100 border border-gray-200 my-40 rounded-xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "Talent Forge helped me land my dream job within 2 weeks. The UI is clean and intuitive.",
                author: "Sarah M.",
                role: "Software Engineer",
              },
              {
                quote:
                  "I've applied to over 10 jobs here. The filters are super accurate and time-saving.",
                author: "David L.",
                role: "Marketing Specialist",
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <div className="text-5xl text-gray-200 mb-4">
                  <FaQuoteLeft />
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  {testimonial.quote}
                </p>
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.author}
                  </p>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white rounded-xl mb-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Boost Your Career?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Join thousands of job seekers who landed their dream roles through
            Talent Forge.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/jobs"
              className="px-8 py-4 text-base font-medium text-gray-900 bg-white rounded-lg hover:bg-gray-100 transition-all duration-300 shadow hover:shadow-md"
            >
              Browse Jobs
            </Link>
            <Link
              to="/register"
              className="px-8 py-4 text-base font-medium text-white bg-gray-700 rounded-lg hover:bg-gray-600 transition-all duration-300 shadow hover:shadow-md"
            >
              Create Account
            </Link>
          </div>
        </div>
      </section>

      {/* Companies Hiring */}
      <section className="py-20 my-40">
        <div className="mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Top Companies
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands of companies who found their perfect match
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {["Google", "Meta", "Netflix", "Airbnb", "Spotify"].map(
              (company, i) => (
                <div key={i}>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
                    alt={`${company} Logo`}
                    className="h-10 hover:opacity-100 transition duration-300"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
