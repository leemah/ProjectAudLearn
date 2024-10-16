import React from "react";

const ForgotPassword = () => {
  return (
    <div>
      {/* Forgot Password Container */}
      <div>
        {/* Title */}
        <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-purple-700 text-center">
          Forgot Password
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Enter the email address you used on AudLearn. We’ll send you a link to
          reset your password.
        </p>

        {/* Form */}
        <form className="space-y-6">
          {/* Email Field */}
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="johndoe@example.com"
              className="mt-2 w-full px-4 py-2 border border-purple-500 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          {/* Reset Password Button */}
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full w-full transition duration-300 ease-in-out"
          >
            Reset Password
          </button>
        </form>

        {/* Back to Login Link */}
        <div className="mt-6 text-center">
          <a href="#" className="text-sm text-gray-500">
            Back to <span className="text-orange-500">Log In</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
