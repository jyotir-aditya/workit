import { auth } from "@/auth";
import Navbar from "@/components/Home/Navbar";
import JobPage from "@/components/Job/JobPage";
import { supabase } from "@/lib/supabaseClient";
import { notFound } from "next/navigation";
import React from "react";

const page = async ({ params }) => {
  const { slug } = await params;
  const {data, error} = await supabase.from("jobs").select("id,users(id,name,image),title,description,salary,slug,created_at").eq("slug", slug);
  if (error) {
    console.log(error);
    return <div>Error</div>;
  }
console.log("Data is",data);
if(data.length === 0) {
    notFound();
    }
  const session = await auth();
  return <div>
    <Navbar session={session}/>
    <JobPage job={data[0]}/>
    </div>;
};

export default page;
