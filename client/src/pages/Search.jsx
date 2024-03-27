import { TextInput, Select, Button } from "flowbite-react";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PostCard from "../components/PostCard";

export default function Search() {
  const [sidebarData, setSidebarData] = useState({
    searchTerm: "",
    sort: "desc",
    category: "uncategorized",
  });

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    const sortFromUrl = urlParams.get("sort");
    const categoryFromUrl = urlParams.get("category");

    if (searchTermFromUrl || sortFromUrl || categoryFromUrl) {
      setSidebarData({
        ...sidebarData,
        searchTerm: searchTermFromUrl,
        sort: sortFromUrl,
        category: categoryFromUrl,
      });
      fetchPosts();
    }

    async function fetchPosts() {
      setLoading(true);
      const searchQuery = urlParams.toString();
      const res = await fetch(`/api/post/getposts?${searchQuery}`);
      if (!res.ok) {
        setLoading(false);
        return;
      }
      if (res.ok) {
        const data = await res.json();
        setPosts(data.posts);
        setLoading(false);
        if (data.posts.length === 9) {
          setShowMore(true);
        } else {
          setShowMore(false);
        }
      }
    }
  }, [location.search]);

  // Handling the submit of TextInput
  function handleChange(e) {
    if (e.target.id === "searchTerm") {
      setSidebarData({ ...sidebarData, searchTerm: e.target.value });
    }

    if (e.target.id === "sort") {
      const order = e.target.value || "desc";
      setSidebarData({ ...sidebarData, sort: order });
    }

    if (e.target.id === "category") {
      const category = e.target.value || "uncategorized";
      setSidebarData({ ...sidebarData, category });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("searchTerm", sidebarData.searchTerm);
    urlParams.set("sort", sidebarData.sort);
    urlParams.set("category", sidebarData.category);
    const searchQuery = urlParams.toString();
    navigate(`/search/?${searchQuery}`);
  }
  // handling show more functionality
  async function handleShowMore() {
    const numberOfPosts = posts.length;
    const startIndex = numberOfPosts;
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("startIndex", startIndex);
    const searchQuery = urlParams.toString();
    const res = await fetch(`/api/post/getposts?${searchQuery}`);
    if (!res.ok) {
      return;
    }
    if (res.ok) {
      const data = await res.json();
      setPosts([...posts, ...data.posts]);
      if (data.posts.length === 9) {
        setShowMore(false);
      } else {
        setShowMore(true);
      }
    }
  }

  return (
    <div className="flex flex-col md:flex-row">
      <div className="p-7 border-b md:border-r md:min-h-screen border-gray-500">
        <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
          <div className="flex items-center gap-2">
            <label className="whitespace-nowrap font-semibold">
              Search Term:
            </label>
            <TextInput
              placeholder="Search..."
              id="searchTerm"
              type="text"
              value={sidebarData.searchTerm}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center gap-2">
            <label className=" font-semibold">Sort:</label>
            <Select
              onChange={handleChange}
              defaultValue={sidebarData.sort}
              id="sort"
            >
              <option value="desc">Latest</option>
              <option value="asc">Oldest</option>
            </Select>
          </div>
          <div className="flex items-center gap-2">
            <label className=" font-semibold">Category:</label>
            <Select
              onChange={handleChange}
              value={sidebarData.category}
              id="category"
            >
              <option value="uncategorized">Uncategorized</option>
              <option value="car">Car</option>
              <option value="bike">Bike</option>
              <option value="technical">Technical</option>
            </Select>
          </div>
          <Button type="submit" gradientDuoTone={"purpleToPink"} outline>
            Apply Filters
          </Button>
        </form>
      </div>
      {/* Showing Posts */}
      <div className="w-full">
        <h1 className="text-3xl font-semibold sm:border-b border-gray-500 p-3 mt-5 text-center">
          Posts Results
        </h1>
        <div className="p-7 flex flex-wrap gap-4">
          {!loading && posts.length === 0 && (
            <p className="text-xl text-gray-500">No Posts Found</p>
          )}
          {loading && <p className="text-xl text-gray-500">Loading...</p>}
          {!loading &&
            posts &&
            posts.map((post) => (
              <div
                key={post._id}
                className="border border-black m-5 p-5 w-[350px] h-[380px] rounded-md"
              >
                <img src={post.image} className="w-full object-cover" />
                <p className="m-2 font-semibold">{post.slug}</p>
                <p className="m-2">{post.category}</p>
                <div className="mt-5 ml-2">
                  <Link
                    to={`/post/${post.slug}`}
                    className="border border-purple-500 text-red-500 mt-5 hover:bg-red-700 hover:text-white  text-center p-3 rounded-md "
                  >
                    Read article
                  </Link>
                </div>
              </div>
            ))}
          {showMore && (
            <button
              className="text-teal-500 text-lg hover:underline p-7 w-full"
              onClick={handleShowMore}
            >
              Show More
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
