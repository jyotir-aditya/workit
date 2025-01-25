import { auth } from "@/auth";
import Landing from "@/components/Home/Landing";
import Navbar from "@/components/Home/Navbar";
import Image from "next/image";

export default async function Home() {
  const session = await auth()
  return (
    <div>
      <Navbar session={session} />
      <Landing session={session} />
    </div>
  );
}
