// app/blogs/page.tsx
"use client"
import { useEffect, useState } from "react";
import Link from "next/link";

interface Blog {
  _id: string;
  title: string;
  excerpt: string;
  coverImageUrl: string;
  tags: { name: string }[];
  readTime: number;
}

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(
          "https://portfolio-of-backend.vercel.app/api/blog/AllBlog",
          {
            cache: "no-store",
          }
        );

        if (!res.ok) {
          throw new Error("Failed to fetch blogs");
        }

        const { data } = await res.json();
        setBlogs(data);
      } catch (error) {
        setError("Failed to load blogs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <div className="bg-gradient-to-b from-[#0d1224] via-gray-800 to-[#0d1224] text-white py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-semibold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
          Explore My Blogs
        </h1>
        <p className="text-center text-gray-400 text-lg">{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-[#0d1224] via-gray-800 to-[#0d1224] text-white py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-5xl font-semibold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
        Explore My Blogs
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
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
