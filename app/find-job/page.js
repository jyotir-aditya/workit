import { auth } from "@/auth";
import Jobs from "@/components/FindJobs/Jobs";
import Navbar from "@/components/Home/Navbar";
import { supabase } from "@/lib/supabaseClient";
import React from "react";

const page = async () => {
  const session = await auth();
  const { data, error } = await supabase
    .from("jobs")
    .select("id,users(id,name,image),title,description,salary,slug,created_at");
  // console.log("jobs", data);
  return (
    <div>
      <Navbar session={session} />
      <Jobs jobs={data} />
    </div>
  );
};

export default page;
