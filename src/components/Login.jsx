import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/slices/authSlice"; // Use the async login action
import Button from "../ui/Button";
import InputField from "../ui/InputField";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (user) {
      if (user.role === "instructor") {
        navigate("/instructordashboard");
      } else {
        navigate("/dashboard");
      }
    }
  }, [user, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }
    setError("");
    try {
      const resultAction = await dispatch(login({ email, password })).unwrap(); // Unwrap to handle any rejected state

      if (resultAction.role === "instructor") {
        navigate("/instructordashboard");
      } else {
        navigate("/dashboard");
      }
    } catch (err) {
      setError(err || "An error occurred during login.");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full p-4 md:p-6 lg:p-8 min-h-[calc(100vh-80px)]">
      {/* Title */}
      <h2 className="text-xl lg:text-3xl font-bold mb-4 lg:mb-6 text-[#633EA3]">
        Welcome Back
      </h2>

      {/* Error Message */}
      {error && (
        <div className="text-red-500 mb-4 text-sm lg:text-base">{error}</div>
      )}

      {/* Form */}
      <form className="w-full max-w-md space-y-6" onSubmit={handleLogin}>
        <div className="w-full">
          <label className="block text-sm md:text-base lg:text-lg font-medium text-gray-700">
            Email
          </label>
          <InputField
            type="email"
            placeholder="johndoe@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            customStyles="w-full border-purple-500"
          />
        </div>

        <div className="w-full">
          <label className="block text-sm md:text-base lg:text-lg font-medium text-gray-700">
            Password
          </label>
          <InputField
            type="password"
            placeholder="**********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            customStyles="w-full border-purple-500"
          />
        </div>

        <Button
          label="LOGIN"
          type="submit"
          customStyles="bg-orange-500 hover:bg-orange-600 w-full md:w-full h-10 lg:h-12 hover:scale-105 hover:shadow-lg transform transition duration-300 ease-in-out"
        />
      </form>

      {/* Divider */}
      <div className="my-6 relative flex items-center">
        <div className="flex-grow border-t border-gray-500"></div>
        <span className="mx-4 text-gray-500">or</span>
        <div className="flex-grow border-t border-gray-500"></div>
      </div>

      {/* Social Login Buttons */}
      <div className="space-y-3 w-full max-w-md">
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

      {/* Already Have an Account */}
      <div className="mt-6 text-center">
        <p className="text-sm md:text-base text-gray-500">
          Don't have an account?{" "}
          <a href="#" className="text-orange-500 font-bold">
            Sign Up
          </a>
        </p>
      </div>

      {/* Help Center Link */}
      <div className="mt-4 text-center">
        <a href="#" className="text-sm md:text-base text-gray-500">
          Having trouble logging in?{" "}
          <span className="text-blue-600 font-bold">Learner help center</span>
        </a>
      </div>

      {/* Terms and Privacy Policy */}
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

export default Login;
