/* eslint-disable react/jsx-sort-props */
const SignUp = () => (
  <form className="space-y-6">
    <div className="space-y-2">
      <input
        type="text"
        placeholder="Username"
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
      />
    </div>
    <div className="space-y-2">
      <input
        type="password"
        placeholder="Password"
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
      />
    </div>
    <div className="space-y-2">
      <input
        type="password"
        placeholder="Confirm Password"
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
      />
    </div>
    <div className="space-y-2">
      <input
        type="email"
        placeholder="Email Address"
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
      />
    </div>
    <button
      type="submit"
      className="w-full py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
    >
      Sign Up
    </button>
  </form>
);

export default SignUp;
