"use client";
import React from "react";
import { Button } from "../ui/button";
import { FaGoogle } from "react-icons/fa";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react"

const login = () => {
  function handleGoogleLogin() {
    // Add logic for Google login
  }

  function handleEmailPasswordLogin(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
    alert("Email and password login is not implemented yet");
    // Add logic for email and password login
  }
  return (
    <div className="w-full h-[92vh] flex justify-center items-center ">
      <div className="border p-6 shadow-md rounded-md space-y-4 flex flex-col items-center justify-center w-[30vw]">
        <Button className="w-[20vw] flex gap-4" onClick={() => signIn("google", { redirectTo: "/" })}>
          <FaGoogle className="w-[4px] h-[4px]" /> <p>Login with Google</p>
        </Button>
        <p className="text-center ">or</p>
        <p className="text-center text-lg ">Login with Email</p>
        <form className="space-y-4 w-[20vw]" onSubmit={handleEmailPasswordLogin}>
          <div className=" space-y-2">
            <Label className="text-lg font-normal" htmlFor="email">
              Email:
            </Label>
            <Input type="email" name="email" placeholder="Email" required />
          </div>
          <div className="space-y-2">
            <Label className="text-lg font-normal" htmlFor="password">
              Password:
            </Label>
            <Input type="password" name="password" placeholder="Password" required />
          </div>
          <div className="flex justify-center">
            <Button className="" type="submit">Login</Button>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default login;
