import Image from "next/image";
import Link from "next/link";
import React from "react";

const Jobs = ({ jobs }) => {
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
  if (jobs.length === 0) {
    return (
      <div className="w-[100vw] h-[92vh] flex justify-center items-center">
        <div className="text-3xl">No Jobs</div>
      </div>
    );
  }
  return (
    <div className="w-[100vw] h-[92vh] px-[5vw] py-[4vh] grid grid-cols-3 gap-4">
      {jobs &&
        jobs.map((job) => (
          <Link
            href={`/job/${job.slug}`}
            key={job.id}
            className="w-[25vw] h-[30vh] rounded overflow-hidden shadow-lg p-2 bg-white border"
          >
            {/* <Image
              className="w-10 h-10 rounded-full mr-4"
              src={job.users.image}
              alt={job.users.name}
              height={40}
              width={40}
            /> */}
            <div className="px-6 py-4 ">
              <div className="font-bold text-2xl h-[8vh] flex items-center">
                <h2 className="line-clamp-2 font-geist">{job.title}</h2>
              </div>
              <p className="text-gray-700 font-geist text-base h-[10vh] line-clamp-3">
                {job.description}
              </p>
              <p className="text-gray-900 font-geist font-semibold">
                Salary: Rs {job.salary}
              </p>
              <div className="flex justify-between font-geistMono mt-1 ">
                <p className="text-gray-600 text-sm">
                  Posted {timeAgo(job.created_at)}
                </p>
                <p className="text-gray-600 text-sm">By {job.users.name}</p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default Jobs;
