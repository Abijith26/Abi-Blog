import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <div className="w-full border border-teal-500 h-[400px]  sm:w-[430px]">
      <Link to={`/post/${post.slug}`}>
        <img
          src={post.image}
          alt="post-cover"
          className="h-[260px] w-full object-cover "
        />
      </Link>
      <div className="p-3 flex flex-col gap-2">
        <p className="text-lg font-semibold line-clamp-3">{post.title}</p>
        <span className="italic text-sm">{post.category}</span>
        <Link
          to={`/post/${post.slug}`}
          className="   border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white  text-center py-2 rounded-md !rounded-tl-none"
        >
          Read article
        </Link>
      </div>
    </div>
  );
}
