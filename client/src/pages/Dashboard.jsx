import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../components/DashSidebar";
import DashProfile from "../components/DashProfile";
import DashPost from "../components/DashPost";
import DashUsers from "../components/DashUsers";
export default function Dashboard() {
  // To get the current location
  const location = useLocation();

  const [tab, setTab] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromURL = urlParams.get("tab");
    if (tabFromURL) {
      setTab(tabFromURL);
    }
  }, [location.search]);

  return (
    <div className="min-h-screen flex flex-col  md:flex-row px-2 py-2 gap-3">
      {/* Side Bar */}
      <div className="md:w-56">
        <DashSidebar />
      </div>

      {/* Profile */}

      {tab === "profile" && <DashProfile />}
      {tab === "posts" && <DashPost />}
      {tab === "users" && <DashUsers />}
    </div>
  );
}
