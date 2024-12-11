export const FetchAllProjects = async () => {
  const res = await fetch(
    "https://portfolio-of-backend.vercel.app/api/project/allProject"
  );

  return res.json();
};
// export const FetchAllBlogs = async () => {
//   const res = await fetch(
//     "https://portfolio-of-backend.vercel.app/api/blog/AllBlog"
//   );

//   return res.json();
// };

export const FetchAllBlogs = async () => {
  const res = await fetch(
    "https://portfolio-of-backend.vercel.app/api/blog/AllBlog"
  );
  const json = await res.json();

  // Adjust this based on API response structure
  if (json?.data) {
    return json;
  } else {
    return { data: [] }; // Fallback for no blogs
  }
};

// ("use server");

// import { TPost } from "@/types";
// import { delay } from "@/utils/delay";

// export const getAllPosts = async (type?: string, wait = false) => {
//   let fetchOptions = {};

//   if (type === "ssr") {
//     fetchOptions = {
//       cache: "no-store",
//     };
//   } else if (type === "isr") {
//     fetchOptions = {
//       next: {
//         tags: ["Posts"],
//       },
//     };
//   }

//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_BASE_API}/posts`,
//     fetchOptions
//   );

//   if (!res.ok) {
//     throw new Error("Failed to fetch posts data");
//   }

//   if (wait) {
//     delay(2000);
//   }

//   return res.json();
// };

// export const getPost = async (id: string, wait = false) => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/posts/${id}`);

//   if (!res.ok) {
//     throw new Error("Failed to fetch post data");
//   }

//   if (wait) {
//     delay(2000);
//   }

//   return res.json();
// };

// export const createPost = async (data: TPost) => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/posts`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//     cache: "no-store",
//   });

//   return res.json();
// };
