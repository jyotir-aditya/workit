"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const JobPage = ({ job }) => {
  const timeAgo = (date) => {
    const seconds = Math.floor((new Date() - new Date(date)) / 1000);
    let interval = Math.floor(seconds / 31536000);

    if (interval >= 1) return interval + " years ago";
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) return interval + " months ago";
    interval = Math.floor(seconds / 86400);
    if (interval >= 1) return interval + " days ago";
    interval = Math.floor(seconds / 3600);
    if (interval >= 1) return interval + " hours ago";
    interval = Math.floor(seconds / 60);
    if (interval >= 1) return interval + " minutes ago";
    return Math.floor(seconds) + " seconds ago";
  };
  const handleApplyNow = () => {
    alert("This feature is not available yet");
  };

  return (
    <div className="w-full h-[92vh] pt-4">
      <div className="w-[60vw] h-[80vh] space-y-2 mx-auto p-4 border rounded-lg shadow-md bg-white font-geist">
        <h1 className="text-4xl font-bold text-center line-clamp-1">
          {job.title}
        </h1>
        <p className="text-xl font-geist text-center">
          Salary: Rs {job.salary}
        </p>
        <p className="text-base text-center text-gray-500">Job Posted By:</p>
        <div className=" mx-auto">
          <div className="flex gap-4  items-center h-[8vh]">
            <Image
              src={job.users.image}
              alt={job.users.name}
              height={50}
              width={50}
              className="rounded-full h-[50px] w-[50px]"
            />
            <div className="flex justify-between items-center w-full">
              <p className="text-lg font-geist text-center">{job.users.name}</p>
              <p className="text-base text-gray-600 font-geist text-center">
                {timeAgo(job.created_at)}
              </p>
            </div>
          </div>
        </div>

        <p className="text-lg font-geist text-center line-clamp-[8]  h-[40vh]">
          {job.description}
        </p>
        <div className="w-full flex justify-center">
          <Button size="lg" className="" onClick={handleApplyNow}>
            Apply Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JobPage;
