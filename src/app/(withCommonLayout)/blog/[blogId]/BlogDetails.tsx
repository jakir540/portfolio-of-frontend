// app/(withCommonLayout)/blog/[blogId]/BlogDetails.tsx

import { TBlogPost } from "@/src/types";

interface IBlogProps {
  blog: {
    data: TBlogPost;
  };
}

const BlogDetails: React.FC<IBlogProps> = ({ blog }) => {
  const blogList = blog?.data || [];
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0e121f] via-[#1c2230] to-[#0e121f] py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto bg-opacity-50 bg-gradient-to-r from-gray-800 to-gray-900 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden">
        <div className="relative">
          {blogList.coverImageUrl && (
            <img
              alt={blogList.title}
              className="w-full h-[400px] object-cover"
              src={blogList.coverImageUrl}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70" />
          <div className="absolute bottom-8 left-8">
            <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
              {blogList.title}
            </h1>
          </div>
        </div>
        <div className="p-8 md:p-12">
          <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
            <p>
              <span className="font-semibold text-teal-400">Tags:</span>{" "}
              {blogList?.tags?.map((tag) => (
                <span
                  key={tag.name}
                  className="inline-block text-sm text-white bg-teal-500 bg-opacity-20 px-3 py-1 rounded-full mr-2"
                >
                  #{tag.name}
                </span>
              ))}
            </p>
            <p>
              <span className="font-semibold">Read Time:</span>{" "}
              {blogList.readTime} mins
            </p>
          </div>
          <div className="prose prose-lg prose-invert text-gray-300 leading-relaxed max-w-none">
            {blogList.content}
          </div>
        </div>
        <div className="bg-gray-900 bg-opacity-60 px-8 py-6 rounded-b-3xl">
          <div className="flex items-center justify-center space-x-4">
            <a
              href={`/blog/${blogList.id}`}
              className="bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-xl transition transform hover:scale-105"
            >
              Share This Blog
            </a>
            <a
              href="/blog"
              className="border border-gray-500 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-gray-700 hover:border-gray-600 transition transform hover:scale-105"
            >
              Explore More Blogs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
