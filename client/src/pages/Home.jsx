import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import PostCard from "../components/PostCard";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
    }
    fetchPosts();
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold lg:text-6xl">Welcome to the Blog</h1>
        <p className="text-gray-500 text-xs sm:text-sm">
          Here you'll find variety of articles about cars
        </p>
        <Link
          to={"/search"}
          className="text-xs sm:text-sm text-teal-500 font-bold hover:underline"
        >
          View all posts
        </Link>
      </div>
      <div className="p-3 bg-amber-100 dark:bg-slate-700">
        <CallToAction />
      </div>

      {/* Displaying Posts */}
      <div className="max-w-full mx-auto  flex flex-col gap-8 p-5">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center mb-5">
              Recent Posts
            </h2>

            <div className="flex flex-wrap gap-7 px-20">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={"/search"}
              className="text-lg text-teal-500 text-center hover:underline "
            >
              View all Posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
