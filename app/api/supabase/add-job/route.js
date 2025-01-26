import { auth } from "@/auth";
import { supabase } from "@/lib/supabaseClient";

export async function POST(req) {
  const session = await auth();
  if (!session) {
    return new Response("Unauthorized", { status: 401 });
  }
  const admin_id = session.user.id;
  const { title, description, salary } = await req.json();
  console.log(title, description, salary);
  const generateSlug = (text) => {
    const randomString = Math.random().toString(36).substring(2, 8);
    return (
      text
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "") +
      "-" +
      randomString
    );
  };
  const slug = generateSlug(title);
  const { jobData, jobError } = await supabase
    .from("jobs")
    .insert([{ title, description, salary, admin_id, slug }])
    .select("slug");
  if (jobError) {
    return new Response("Error", { status: 500 });
  }
  return new Response(JSON.stringify({ message: "Success", slug: slug }), { status: 200, headers: { "Content-Type": "application/json" } });
}
