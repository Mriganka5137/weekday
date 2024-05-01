import { BsHourglassSplit } from "react-icons/bs";
import { Job } from "../types";
import Description from "./Description";

interface JobCardProps {
  job: Job;
}

const JobCard = ({ job }: JobCardProps) => {
  return (
    <div
      key={job.jdUid}
      className="bg-white rounded-3xl  p-6 border shadow-lg  hover:scale-[1.02] transition-all duration-300 ease-in-out max-w-[480px] max-sm:p-3"
    >
      <div className="flex w-fit rounded-2xl border p-2 gap-1 shadow-sm items-center">
        <BsHourglassSplit className="text-amber-700 size-3.5" />
        <p className=" text-xs">Posted 10 days ago</p>
      </div>

      <div className=" flex mt-5">
        <img
          src={`https://source.unsplash.com/random/?company,logo,${job.jdUid}`}
          alt={job.jobRole}
          className="w-8 h-14  object-cover"
        />
        <div className="ml-3">
          <div className=" text-gray-500 font-medium">XYZ technologies </div>
          <div className="text-lg capitalize">{job.jobRole}</div>
          <div className="capitalize text-sm font-sans">
            {job.location || "India"}
          </div>
        </div>
      </div>
      <div className="mt-3">
        <p className="  text-gray-600 tracking-wider text-base font-light">
          Estimated Salary: {job.salaryCurrencyCode || "₹"}
          {job.minJdSalary || "20"} - {job.maxJdSalary || "30"} LPA ✅
        </p>
      </div>
      <p className=" text-xl mt-2">About Company:</p>
      <div className=" h-[250px] overflow-hidden relative w-full">
        <p className="line-clamp-[10] text-slate-500">
          {job.jobDetailsFromCompany}
        </p>

        <div className="absolute w-full h-full bg-gradient-to-b from-transparent z-1 to-white to-95% top-0 left-0 "></div>
      </div>
      <Description jobDetailsFromCompany={job.jobDetailsFromCompany} />

      <p className="mt-4 text-gray-500 font-medium tracking-wide">
        Minimum Experience
      </p>
      <p className=" font-light">{job.minExp || "1"} years</p>

      <button className=" w-full text-xl  bg-[#55EFC4] py-3 rounded-lg hover:bg-teal-500 transition-colors duration-300 ease-in-out mt-5">
        ⚡️ Easy Apply
      </button>
      {/* <button className=" w-full text-xl bg-[#4943DA] py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 ease-in-out mt-3 text-white bg-blue flex justify-center items-center gap-2">
        <IoPersonCircle className="size-7 text-gray-100" />
        Ask for referral
      </button> */}
    </div>
  );
};

export default JobCard;
