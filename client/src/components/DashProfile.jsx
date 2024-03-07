import { Button, TextInput } from "flowbite-react";

import { useSelector, useDispatch } from "react-redux";
import { signoutSuccess } from "../redux/user/userSlice.js";
export default function Dashboard() {
  // accessing the data from the global store (redux)
  const dispatch = useDispatch();
  const { currentUser } = useSelector((store) => store.user);

  const handleSignOut = async () => {
    try {
      const res = await fetch("/api/user/signout", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-3 w-full">
      <h1 className="my-7 text-center font-semibold text-3xl">Profile</h1>
      <form className="flex flex-col gap-4">
        <div className="w-32 h-32 self-center cursor-pointer overflow-hidden rounded-full">
          <img
            src={currentUser.profilePicture}
            alt="user_profile_picture"
            className="rounded-full w-full h-full object-cover border-8 border-[lightgray]"
          />
          /*src=imageFileURL || currentUser.profilePicture*/
        </div>
        <TextInput
          type="text"
          id="username"
          placeholder="Username"
          defaultValue={currentUser.username}
          disabled
          readOnly
        />
        <TextInput
          type="text"
          id="email"
          placeholder="email"
          defaultValue={currentUser.email}
          disabled
          readOnly
        />
      </form>
      <div className="text-red-500 flex justify-center mt-5">
        <span className="cursor-pointer" onClick={handleSignOut}>
          Sign Out
        </span>
      </div>
    </div>
  );
}
