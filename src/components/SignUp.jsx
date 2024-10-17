import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { signUpUser } from "../redux/slices/authSlice"; // Import the signUp action
import { signUp } from "../redux/slices/authSlice";

const SignUp = ({ userType }) => {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure all fields are filled out
    if (!fullname || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      setError(""); // Clear any previous errors
      // Dispatch the signUp action
      const resultAction = await dispatch(
        signUp({ fullname, email, password, role: userType })
      ).unwrap();
      console.log(resultAction);

      // Depending on userType, navigate to the appropriate dashboard
      if (resultAction.role === "instructor") {
        navigate("/instructordashboard/intended-learners");
      } else {
        navigate("/login");
      }
    } catch (err) {
      setError(err || "An error occurred during sign-up.");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full p-4 lg:p-8  overflow-y-auto h-auto">
      <h2 className="text-xl lg:text-3xl font-bold mb-4 lg:mb-6 text-[#633EA3]">
        Sign Up
      </h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-lg">
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700">
            Fullname
          </label>
          <input
            type="text"
            placeholder="Enter your Fullname"
            value={fullname}
            onChange={(e) => setFullName(e.target.value)}
            className="mt-2 w-full px-4 py-2 border border-purple-500 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 w-full px-4 py-2 border border-purple-500 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-2 w-full px-4 py-2 border border-purple-500 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>
        <button
          onClick={handleSubmit}
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full w-full transition duration-300 ease-in-out"
        >
          Sign Up
        </button>
      </form>
      <div className="my-6 relative flex items-center">
        <div className="flex-grow border-t border-gray-500"></div>
        <span className="mx-4 text-gray-500">or</span>
        <div className="flex-grow border-t border-gray-500"></div>
      </div>

      <div className="space-y-3">
        <button className="border-2 border-orange-500 w-full text-orange-500 bg-white hover:bg-orange-100 py-3 rounded-full font-bold">
          Continue with Google
        </button>
        <button className="border-2 border-orange-500 w-full text-orange-500 bg-white hover:bg-orange-100 py-3 rounded-full font-bold">
          Continue with Facebook
        </button>
        <button className="border-2 border-orange-500 w-full text-orange-500 bg-white hover:bg-orange-100 py-3 rounded-full font-bold">
          Continue with Apple
        </button>
      </div>
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">
          Already have an account?{" "}
          <a href="#" className="text-orange-500 font-bold">
            Log In
          </a>
        </p>
      </div>

      <div className="mt-4 text-center">
        <a href="#" className="text-sm text-gray-500">
          Having trouble logging in?{" "}
          <span className="text-blue-600 font-bold">Learner help center</span>
        </a>
      </div>
      <div className="mt-6 text-xs text-center text-gray-500">
        This site is protected by reCAPTCHA Enterprise and the Google{" "}
        <a href="#" className="text-blue-600">
          Privacy Policy
        </a>{" "}
        and{" "}
        <a href="#" className="text-blue-600">
          Terms of Service
        </a>{" "}
        apply.
      </div>
    </div>
  );
};

export default SignUp;
