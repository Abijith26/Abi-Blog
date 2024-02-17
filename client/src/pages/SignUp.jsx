import React from "react";
import { Link } from "react-router-dom";
import { Button, Label, TextInput } from "flowbite-react";

import pic from "../assets/Sign_up.png";

export default function SignUp() {
  return (
    <div className="min-h-screen mt-20 ml-10">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* Left Side Div */}
        <div className="flex-1">
          <Link to="/" className=" font-bold dark: text-black text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-blue-500 via-pink-400 to-yellow-200 rounded-lg">
              Blog
            </span>
          </Link>
          <p className="text-sm mt-5">
            Ready to make your keyboard dance? Sign in and let's blog!
          </p>
        </div>
        {/* <div className="mt-10 relative w-50 h-50 sm:w-screen sm:h-screen">
            <img src={pic} className="absolute inset-0  object-contain" />
          </div> */}

        {/* Right side Div */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div className="">
              <Label value="Your username" />
              <TextInput type="text" placeholder="username" id="username" />
            </div>
            <div className="">
              <Label value="Your email" />
              <TextInput type="text" placeholder="abc@mail.com" id="email" />
            </div>
            <div className="">
              <Label value="Your password" />
              <TextInput type="text" placeholder="password" id="password" />
            </div>
            <Button color="blue" type="submit">
              Sign Up
            </Button>
          </form>
          <div className="flex gap-3 mt-3 text-sm ">
            <span>Let's get writing, shall we?</span>
            <Link to="/signin" className="">
              Sign-In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
