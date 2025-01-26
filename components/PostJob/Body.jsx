"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const Body = () => {
  const [Loading, setLoading] = useState(false);
  const router = useRouter();
  const handlePostJob = async (event) => {
    event.preventDefault();
    setLoading(true);
    const title = event.target.title.value;
    const description = event.target.description.value;
    const salary = event.target.salary.value;
    console.log(title, description, salary);
    const formData = { title: title, description: description, salary: salary };
    const response = await fetch("/api/supabase/add-job", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      console.log("Job posted successfully");
      router.push(`/job/${data.slug}`);
    } else {
      console.log("Job posting failed");
      setLoading(false);
    }
  };

  return (
    <div className="h-[92vh] w-[100vw] flex justify-center items-center">
      <div className="border bg-gray-50 shadow-md w-[50vw] h-[60vh] rounded-md p-4 font-geist">
        <h1 className="text-3xl font-bold text-center mb-4">
          Enter Job Details
        </h1>
        <form onSubmit={handlePostJob}>
          <div className="flex flex-col gap-4">
            <Label className="text-lg font-normal" htmlFor="jobTitle">
              Job Title:
            </Label>
            <Input
              type="text"
              name="title"
              placeholder="Job Title"
              className=""
            />
            <Label className="text-lg font-normal" htmlFor="description">
              Job Description:
            </Label>
            <Textarea
              type="text"
              autoCorrect="off"
              name="description"
              placeholder="Job Description"
              className=""
            />
            <Label className="text-lg font-normal" htmlFor="jobSalary">
              Job Salary:
            </Label>
            <Input
              type="number"
              name="salary"
              placeholder="Job Salary"
              className=""
            />
            <Button
              size="lg"
              className="border p-2 w-fit mx-auto mt-4"
              type="submit"
              disabled={Loading}
            >
              {Loading ? "Posting Job..." : "Post Job"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Body;
