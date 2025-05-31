import { IoDocumentTextOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlineAttachMoney, MdOutlineDateRange } from "react-icons/md";
import { Link, useNavigate } from "react-router";

const SingleJobCard = ({ jobData }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(`/jobs/details/${jobData._id}`);
  };

  return (
    <>
      <div onClick={handleCardClick} className="block group cursor-pointer">
        <div className="bg-white shadow-md hover:shadow-lg transition rounded-lg overflow-hidden border border-gray-200 group-hover:border-teal-700 h-full">
          <div className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 group-hover:text-teal-700">
                  {jobData.positionTitle}
                </h2>
                <p className="text-gray-600">{jobData.companyName}</p>
              </div>
              <span className="bg-teal-100 text-gray-800 text-[14px] px-2 py-1 rounded">
                {jobData.employmentType}
              </span>
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex items-center text-sm ">
                <span className="w-5 h-5 mr-2 text-gray-9002">
                  <IoLocationOutline size={20} />
                </span>
                <span className="text-[17px]">{jobData.location}</span>
              </div>

              <div className="flex items-center text-sm ">
                <span className="w-5 h-5 mr-2 text-gray-900">
                  <MdOutlineDateRange size={20} />
                </span>

                <span className="text-[17px]">
                  Deadline:{jobData.applicationDeadline}
                </span>
              </div>

              <div className="flex items-center text-sm ">
                <span className="w-5 h-5 mr-2 text-gray-900">
                  <IoDocumentTextOutline size={20} />
                </span>
                <span className="text-[17px]">
                  {jobData.totalApplicants} applicants
                </span>
              </div>

              <div className="flex items-center text-sm ">
                <span className="w-5 h-5 mr-2 text-gray-900">
                  <MdOutlineAttachMoney size={20} />
                </span>
                <span className="text-[17px]">
                  {" "}
                  {jobData.salaryMin} - ${jobData.salaryMax}
                </span>
                $
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200">
              <button className="w-full bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded-md transition cursor-pointer">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleJobCard;
