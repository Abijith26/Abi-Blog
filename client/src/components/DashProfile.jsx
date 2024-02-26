import { Button, TextInput } from "flowbite-react";
import {} from "react";
import { useSelector } from "react-redux";

export default function Dashboard() {
  // accessing the data from the global store (redux)
  const { currentUser } = useSelector((store) => store.user);

  return (
    <div className="max-w-lg mx-auto p-3 w-full">
      <h1 className="my-7 text-center font-semibold text-3xl">Profile</h1>
      <form className="flex flex-col gap-4">
        <div className="w-32 h-32 self-center cursor-pointer overflow-hidden rounded-full">
          <img
            src={imageFileURL || currentUser.profilePicture}
            alt="user_profile_picture"
            className="rounded-full w-full h-full object-cover border-8 border-[lightgray]"
          />
        </div>
        <TextInput
          type="text"
          id="username"
          placeholder="Username"
          defaultValue={currentUser.username}
        />
        <TextInput
          type="text"
          id="email"
          placeholder="email"
          defaultValue={currentUser.email}
        />
        <TextInput type="password" id="password" placeholder="password" />

        <Button type="submit" outline>
          Submit
        </Button>
      </form>
      <div className="text-red-500 flex justify-between mt-5">
        <span className="cursor-pointer">Delete Account</span>
        <span className="cursor-pointer">Sign Out</span>
      </div>
    </div>
  );
}
