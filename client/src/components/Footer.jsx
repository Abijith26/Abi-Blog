import { Link } from "react-router-dom";
export default function FooterComp() {
  return (
    <div className="border border-t-8 border-gray-900 rounded-lg bg-neutral-300 m-0">
      <div className="flex justify-center items-center gap-5 py-5">
        <Link
          to="/"
          className=" self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark: text-black"
        >
          <span className="px-2 py-1 bg-gradient-to-r from-blue-500 via-pink-400 to-yellow-200 rounded-lg">
            Blog
          </span>
        </Link>
        <p className="text-sm font-bold text-black">
          &copy;{new Date().getFullYear()} Abi's Blog
        </p>
      </div>
    </div>
  );
}
