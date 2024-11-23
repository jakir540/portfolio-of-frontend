// app/blog/[blogId]/page.tsx
"use client";
import { useEffect, useState } from "react";

const BlogDetails = ({ params }: { params: { blogId: string } }) => {
  const [blog, setBlog] = useState<any>(null); // State for storing the blog data
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState<string | null>(null); // Error state

  const { blogId } = params;

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const res = await fetch(
          `https://portfolio-of-backend.vercel.app/api/blog/${blogId}`
        );
        if (!res.ok) throw new Error("Failed to fetch blog details");
        const { data } = await res.json();
        setBlog(data); // Set the blog data
      } catch (error) {
        console.error("Error fetching blog details:", error);
        setError("Failed to load blog details");
      } finally {
        setLoading(false);
      }
    };

    if (blogId) {
      fetchBlogDetails(); // Fetch the blog data when the component is mounted
    }
  }, [blogId]);

  if (loading) {
    return <p>Loading blog details...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className="bg-gradient-to-b from-[#0d1224] via-gray-800 to-[#0d1224] text-white py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-semibold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
        {blog.title}
      </h1>

      {/* Blog Image */}
      {blog.coverImageUrl && (
        <img
          src={blog.coverImageUrl}
          alt={blog.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
      )}

      {/* Blog Content */}
      <p className="text-gray-400 mb-6">{blog.content}</p>

      {/* Blog Meta */}
      <div className="mt-6 text-gray-500 text-sm">
        <p>
          <strong>Tags:</strong>{" "}
          {blog.tags.map((tag: any) => tag.name).join(", ")}
        </p>
        <p>
          <strong>Read Time:</strong> {blog.readTime} mins
        </p>
      </div>
    </section>
  );
};

export default BlogDetails;
