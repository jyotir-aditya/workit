import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { signOut } from "@/auth.js";
import { signIn } from "@/auth";

const Landing = ({ session }) => {
  if (session) {
    return (
      <div className="w-full h-[92vh] flex justify-center items-center ">
        <div className="space-y-4">
          <Image
            src={session.user.image}
            alt={session.user.name}
            width={300}
            height={300}
          />
          <h1 className="text-4xl text-center">Welcome {session.user.name}</h1>
          <p className="text-lg text-center">You are logged in</p>
          <form
            className="flex justify-center"
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <Button type="submit">Sign Out</Button>
          </form>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full h-[92vh] flex justify-center items-center ">
      <div className="flex justify-between w-[90vw]">
        <div className="w-fit ">
          <Image
            src={"/KiitImage.jpg"}
            alt="kiitImage"
            width={650}
            height={650}
            className="w-[40vw] h-[50vh] rounded-md"
          />
        </div>
        <div className="w-fit ">
          <div className=" flex flex-col font-geist w-[40vw] h-[50vh]   p-4 rounded-md  ">
            <Image
              src={"/officeWork.jpg"}
              alt="officeWork"
              width={300}
              height={300}
              className="mx-auto rounded-md"
            />
            <div className="flex gap-20 mx-auto mt-2">
              <form
                action={async () => {
                  "use server";
                  await signIn("google");
                }}
              >
                <Button type="sumbit" size="lg" className="text-lg">
                Post Job
              </Button>
              </form>
              <form
                action={async () => {
                  "use server";
                  await signIn("google");
                }}
              >
                <Button type="sumbit" size="lg" variant="" className="text-lg">
                Find Job
              </Button>
              </form>
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
