import { BsHourglassSplit } from "react-icons/bs";
import { Job } from "../types";

interface JobCardProps {
  job: Job;
}

const JobCard = ({ job }: JobCardProps) => {
  return (
    <div
      key={job.jdUid}
      className="bg-white rounded-2xl  p-6 border shadow-lg hover:-translate-y-1 transition-transform duration-300 ease-in-out"
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
        <p className="">{job.jobDetailsFromCompany}</p>
        <div className="absolute w-full h-full bg-gradient-to-b from-transparent to-white to-95%% top-0 left-0"></div>
      </div>

      <div>
        {job.minJdSalary} - {job.maxJdSalary} {job.salaryCurrencyCode}
      </div>
      <a href={job.jdLink} target="_blank" rel="noreferrer">
        View Job
      </a>
    </div>
  );
};

export default JobCard;
