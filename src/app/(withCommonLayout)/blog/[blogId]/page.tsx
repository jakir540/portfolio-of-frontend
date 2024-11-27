"use client";
/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const BlogDetails = ({ params }: { params: { blogId: string } }) => {
  const [blog, setBlog] = useState<any>(null); // State for storing the blog data
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState<string | null>(null); // Error state

  const router = useRouter(); // Next.js router for navigation
  const { blogId } = params; // Destructure blogId from params

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const res = await fetch(
          `https://portfolio-of-backend.vercel.app/api/blog/${blogId}`,
          {
            cache: "no-store",
          }
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

    fetchBlogDetails(); // Fetch the blog data when the component is mounted
  }, [blogId]);

  // Function to handle "Share This Blog"
  const handleShareBlog = async () => {
    const blogUrl = `${window.location.origin}/blog/${blogId}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: blog?.title,
          text: "Check out this amazing blog!",
          url: blogUrl,
        });
        console.log("Blog shared successfully!");
      } catch (error) {
        console.error("Error sharing blog:", error);
      }
    } else {
      // Fallback: Copy to clipboard
      try {
        await navigator.clipboard.writeText(blogUrl);
        alert("Blog link copied to clipboard!");
      } catch (error) {
        console.error("Error copying to clipboard:", error);
        alert("Unable to copy the blog link.");
      }
    }
  };

  // Function to handle "Explore More Blogs"
  const handleExploreBlogs = () => {
    router.push("/"); // Navigate to the explore/blogs page
  };

  if (loading) {
    return (
      <section className="flex items-center justify-center h-screen bg-gradient-to-b from-[#0e121f] via-[#1c2230] to-[#0e121f] text-white">
        <p className="text-lg font-medium animate-pulse">
          Loading blog details...
        </p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="flex items-center justify-center h-screen bg-gradient-to-b from-[#0e121f] via-[#1c2230] to-[#0e121f] text-white">
        <p className="text-lg font-medium text-red-500">{error}</p>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0e121f] via-[#1c2230] to-[#0e121f] py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto bg-opacity-50 bg-gradient-to-r from-gray-800 to-gray-900 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden">
        {/* Blog Header */}
        <div className="relative">
          {/* Blog Image */}
          {blog.coverImageUrl && (
            <img
              alt={blog.title}
              className="w-full h-[400px] object-cover"
              src={blog.coverImageUrl}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70" />
          <div className="absolute bottom-8 left-8">
            <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
              {blog.title}
            </h1>
          </div>
        </div>

        {/* Blog Content */}
        <div className="p-8 md:p-12">
          <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
            <p>
              <span className="font-semibold text-teal-400">Tags:</span>{" "}
              {blog.tags.map((tag: any) => (
                <span
                  key={tag.name}
                  className="inline-block text-sm text-white bg-teal-500 bg-opacity-20 px-3 py-1 rounded-full mr-2"
                >
                  #{tag.name}
                </span>
              ))}
            </p>
            <p>
              <span className="font-semibold">Read Time:</span> {blog.readTime}{" "}
              mins
            </p>
          </div>
          <div className="prose prose-lg prose-invert text-gray-300 leading-relaxed max-w-none">
            {blog.content}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gray-900 bg-opacity-60 px-8 py-6 rounded-b-3xl">
          <div className="flex items-center justify-center space-x-4">
            <button
              className="bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-xl transition transform hover:scale-105"
              onClick={handleShareBlog}
            >
              Share This Blog
            </button>
            <button
              className="border border-gray-500 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-gray-700 hover:border-gray-600 transition transform hover:scale-105"
              onClick={handleExploreBlogs}
            >
              Explore More Blogs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
