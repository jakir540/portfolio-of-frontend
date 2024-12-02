// app/(withCommonLayout)/blog/[blogId]/page.tsx
import BlogDetails from "./BlogDetails";

export default async function BlogPage({
  params,
}: {
  params: { blogId: string };
}) {
  // Destructure the blogId from params
  const { blogId } = params;

  // Fetch the blog details
  const res = await fetch(
    `https://portfolio-of-backend.vercel.app/api/blog/${blogId}`,
    {
      cache: "no-store",
    }
  );

  // Check if the response is ok
  if (!res.ok) {
    throw new Error("Failed to fetch blog details");
  }

  const { data: blog } = await res.json();

  // Return the BlogDetails component with the fetched blog data
  return <BlogDetails blog={blog} />;
}
