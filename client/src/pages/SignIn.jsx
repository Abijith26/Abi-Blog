import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
import pic from "../assets/Sign_up.png";
import OAuth from "../components/OAuth";

export default function SignIn() {
  const [formData, setFormData] = useState({});

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error: errorMessage } = useSelector((state) => state.user);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure("Please fill all the fields"));
    }
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }

      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  }

  return (
    <div className="min-h-screen mt-20 ml-10">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* Left Side Div */}
        <div className="flex-1">
          <Link to="/" className=" font-bold dark: text-black text-4xl">
            <span className="px-2 py-1 bg-blue-500 bg-opacity-75 rounded-lg">
              Blog
            </span>
          </Link>
          <p className="text-sm mt-5">
            Sign in for a ticket to the wildest blog ride of your life!
          </p>
        </div>
        {/* <div className="mt-10 relative w-50 h-50 sm:w-screen sm:h-screen">
            <img src={pic} className="absolute inset-0  object-contain" />
          </div> */}

        {/* Right side Div */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="">
              <Label value="Your email" />
              <TextInput
                type="email"
                placeholder="abc@mail.com"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div className="">
              <Label value="Your password" />
              <TextInput
                type="password"
                placeholder="password"
                id="password"
                onChange={handleChange}
              />
            </div>
            <Button color="blue" type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">Loading....</span>
                </>
              ) : (
                "Sign In"
              )}
            </Button>

            <OAuth />
          </form>
          <div className="flex gap-3 mt-3 text-sm ">
            <span>Ready to join?</span>
            <Link to="/signup" className="">
              Sign-Up
            </Link>
          </div>

          {errorMessage && (
            <Alert className="mt-5" color="failure">
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
