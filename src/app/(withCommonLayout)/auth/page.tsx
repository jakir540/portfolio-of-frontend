// /* eslint-disable react/jsx-sort-props */
// /* eslint-disable padding-line-between-statements */
// /* eslint-disable import/order */
// "use client";
// import React, { useState } from "react";
// import Lottie from "lottie-react";
// import animationData from "../../../../public/Animation - 1730085440527.json";
// import SignUp from "@/src/components/modules/SignUp";
// import Login from "@/src/components/modules/Login";

// const Auth = () => {
//   const [isSignIn, setIsSignIn] = useState(true);

//   return (
//     <div className="flex items-center justify-center min-h-screen p-6">
//       <div className="relative w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
//         <div className="flex justify-center mb-6">
//           <button
//             onClick={() => setIsSignIn(true)}
//             className={`px-4 py-2 font-semibold text-lg ${
//               isSignIn
//                 ? "text-blue-600 border-b-2 border-blue-600"
//                 : "text-gray-600"
//             }`}
//           >
//             Sign In
//           </button>
//           <button
//             onClick={() => setIsSignIn(false)}
//             className={`px-4 py-2 font-semibold text-lg ${
//               !isSignIn
//                 ? "text-blue-600 border-b-2 border-blue-600"
//                 : "text-gray-600"
//             }`}
//           >
//             Sign Up
//           </button>
//         </div>
//         <Lottie animationData={animationData} className="h-40 mb-4" />
//         <div className="transition duration-500">
//           {isSignIn ? <Login /> : <SignUp />}
//         </div>
//       </div>
//     </div>
//   );
// };
// <>
//   <Login />
//   <SignUp />
// </>;

// export default Auth;

import React from "react";

export default function Auth() {
  return <div>login</div>;
}
