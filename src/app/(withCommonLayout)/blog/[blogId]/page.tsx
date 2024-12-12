import { FetchSingleBlog } from "@/src/services/projectServices";
import BlogDetails from "./BlogDetails";

export default async function BlogPage({
  params,
}: {
  params: { blogId: string };
}) {
  // Destructure the blogId from params
  const { blogId } = await params;

  const blog = await FetchSingleBlog(blogId);

  // Return the BlogDetails component with the fetched blog data
  return <BlogDetails blog={blog} />;
}
