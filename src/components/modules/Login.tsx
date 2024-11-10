/* eslint-disable react/jsx-sort-props */
/* eslint-disable linebreak-style */
const Login = () => (
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
    <button
      type="submit"
      className="w-full py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
    >
      Sign In
    </button>
    <div className="text-center mt-4">
      <a href="#forgot" className="text-sm text-blue-600 hover:underline">
        Forgot Password?
      </a>
    </div>
  </form>
);

export default Login;
