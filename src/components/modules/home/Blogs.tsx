// app/blogs/page.tsx
"use client";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Link from "next/link"; // Import Link to navigate to the blog details page

const Blogs = () => {
  const [blogs, setBlogs] = useState<any[]>([]); // State for storing blogs
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

  return (
    <div className="bg-gradient-to-b from-[#0d1224] via-gray-800 to-[#0d1224] text-white py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-5xl font-semibold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
        Explore My Blogs
      </h1>
      {loading ? (
        <p className="text-center text-gray-400 text-lg">Loading blogs...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              // Wrap the entire card in a Link to make the entire card clickable
              <Link key={blog._id} href={`/blog/${blog._id}`}>
                <div className="bg-gray-900 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 cursor-pointer">
                  <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-4 hover:text-teal-400">
                    {blog.title}
                  </h2>
                  <p className="text-gray-400 mb-4 text-lg">{blog.excerpt}</p>
                  {/* Display cover image */}
                  {blog.coverImageUrl && (
                    <img
                      src={blog.coverImageUrl}
                      alt={blog.title}
                      className="w-full h-64 object-cover rounded-lg mb-6 transition-transform duration-300 hover:scale-110"
                    />
                  )}
                  {/* SEO Meta */}
                  <div className="mt-6 text-gray-500 text-sm">
                    <p>
                      <strong>Tags:</strong>{" "}
                      {blog.tags.map((tag: any) => tag.name).join(", ")}
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
      )}
    </div>
  );
};

export default Blogs;
