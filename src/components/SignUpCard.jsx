import React from "react";

const SignUpCard = () => {
  return (
    <div className="bg-[#633EA3] mb-5 rounded-lg p-8 flex flex-col md:flex-row items-center justify-between text-white">
      <div>
        <h2 className="text-2xl font-bold">Ready to Teach?</h2>
        <p className="mt-2 text-sm">
          Impact others with the knowledge you have, from wherever you are.
        </p>
      </div>
      <div className="mt-6 md:mt-0">
        <button className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition duration-300">
          Sign Up Now
        </button>
      </div>
    </div>
  );
};

export default SignUpCard;
