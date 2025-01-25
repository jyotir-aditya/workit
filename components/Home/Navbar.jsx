import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = ({ session }) => {
  if (session) {
    return (
      <nav className="border-b h-[8vh] p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className=" font-geist text-xl font-bold">WorkIt</div>
          <div className="space-x-4 font-geist flex items-center">
            <a href="#" className="">
              Home
            </a>
            <a href="#" className="">
              About
            </a>
            <a href="#" className="">
              Services
            </a>
            <a href="#" className="">
              Contact
            </a>
            <Image
              src={session.user.image}
              alt={session.user.name}
              width={50}
              height={50}
              className="rounded-full w-[35px] h-[35px]"
            />
          </div>
        </div>
      </nav>
    );
  }
  return (
    <nav className="border-b h-[8vh] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className=" font-geist text-xl font-bold">WorkIt</div>
        <div className="space-x-4 font-geist flex items-center">
          <a href="#" className="">
            Home
          </a>
          <a href="#" className="">
            About
          </a>
          <Link href={"/login"} className="">
            Login
          </Link>
          <Link href={"/login"} className="">
            Signup
          </Link>
          {/* <Image
            src={"/KiitImage.jpg"}
            alt={"nothing"}
            width={50}
            height={50}
            className="rounded-full w-[35px] h-[35px]"
          /> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
