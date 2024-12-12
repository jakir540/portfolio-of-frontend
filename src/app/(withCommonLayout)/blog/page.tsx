import { FetchAllBlogs } from "@/src/services/projectServices";
import { TBlogPost } from "@/src/types";
import Link from "next/link";

const Blogs = async () => {
  const blogs = await FetchAllBlogs();
  const blogList = blogs?.data || [];
  return (
    <div className="bg-gradient-to-b from-[#0d1224] via-gray-800 to-[#0d1224] text-white py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-5xl font-semibold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
        Explore My Blogs
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {blogList.length > 0 ? (
          blogList.map((blog: TBlogPost) => (
            <Link key={blog._id} href={`/blog/${blog._id}`}>
              <div className="bg-gray-900 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 cursor-pointer">
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-4 hover:text-teal-400">
                  {blog.title}
                </h2>
                <p className="text-gray-400 mb-4 text-lg">{blog.excerpt}</p>
                {blog.coverImageUrl && (
                  <img
                    src={blog.coverImageUrl}
                    alt={blog.title}
                    className="w-full h-64 object-cover rounded-lg mb-6 transition-transform duration-300 hover:scale-110"
                  />
                )}
                <div className="mt-6 text-gray-500 text-sm">
                  <p>
                    <strong>Tags:</strong>{" "}
                    {blog.tags.map((tag) => tag.name).join(", ")}
                  </p>
                  <p>
                    <strong>Read Time:</strong> {blog.readTime} mins
                  </p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-400">No blogs found.</p>
        )}
      </div>
    </div>
  );
};

export default Blogs;
