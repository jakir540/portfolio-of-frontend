/* eslint-disable prettier/prettier */
/* eslint-disable linebreak-style */
"use client";
import { BlogPost } from "@/src/types";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Blogs = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]); // State for storing blogs
  const [loading, setLoading] = useState(true); // State for loading

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/blog/AllBlog");
        if (!res.ok) throw new Error("Failed to fetch blogs");
        const { data } = await res.json();
        setBlogs(data); // Update blogs state with fetched data
      } catch (error) {
        console.error("Error fetching blogs:", error);
        toast.error("Failed to load blogs");
      } finally {
        setLoading(false); // Set loading to false after fetch attempt
      }
    };

    fetchBlogs();
  }, []);

  // // Handle blog click and redirect
  // const handleBlogClick = (blogId: string) => {
  //   router.push(`/blog/${blogId}`); // Redirect to the dynamic blog details page
  // };

  return (
    <div className="bg-gradient-to-b from-[#0d1224] via-gray-800 to-[#0d1224] text-white py-20 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-semibold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-500">
        All Blogs
      </h1>
      {loading ? (
        <p className="text-center text-gray-400">Loading blogs...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <div
                key={blog._id}
                className="bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <h2 className="text-2xl font-bold mb-4 hover:text-teal-400">
                  {blog.title}
                </h2>
                <p className="text-gray-400 mb-4">{blog.excerpt}</p>
                {/* Display cover image */}
                {blog.coverImageUrl && (
                  <img
                    src={blog.coverImageUrl}
                    alt={blog.title}
                    className="w-full h-60 object-cover rounded-lg mb-6"
                  />
                )}
                {/* SEO Meta */}
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
            ))
          ) : (
            <p className="text-center text-gray-400">No blogs found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Blogs;
