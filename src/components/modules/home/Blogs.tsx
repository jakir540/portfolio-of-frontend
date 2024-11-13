/* eslint-disable prettier/prettier */
/* eslint-disable linebreak-style */
"use client";
import { BlogPost } from "@/src/types";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

/* eslint-disable linebreak-style */
const Blogs = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]); // State for storing blogs
  const [loading, setLoading] = useState(true); // State for loading

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/blog/AllBlog");
        if (!res.ok) throw new Error("Failed to fetch blogs");
        const { data } = await res.json();
        console.log(data);
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

  return (
    <div className="bg-gradient-to-b from-[#0d1224] via-gray-800 to-[#0d1224] text-white py-20 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold mb-8">All Blogs</h1>
      {loading ? (
        <p>Loading blogs...</p>
      ) : (
        <div className="space-y-8">
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <div
                key={blog.slug}
                className="bg-gray-900 p-6 rounded-lg shadow-lg"
              >
                <h2 className="text-2xl font-bold mb-4">{blog.title}</h2>
                <p className="text-gray-400 mb-4">{blog.excerpt}</p>

                {/* Display cover image */}
                {blog.coverImageUrl && (
                  <img
                    src={blog.coverImageUrl}
                    alt={blog.title}
                    className="w-full h-60 object-cover rounded-lg mb-6"
                  />
                )}

                {/* Display sections */}
                {/* <div className="space-y-4">
                  {blog.sections.map((section, index) => (
                    <div key={index} className="space-y-2">
                      <h3 className="text-xl font-semibold">{section.title}</h3>
                      <p>{section.content}</p>
                    </div>
                  ))}
                </div> */}

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
            <p>No blogs found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Blogs;
