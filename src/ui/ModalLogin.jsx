const ModalLogin = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null; // Don't render if the modal is closed

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
      {/* Modal Container */}
      <div className="flex flex-col lg:flex-row w-full max-w-4xl bg-white rounded-lg shadow-lg max-h-screen overflow-auto">
        {/* Left Side (Static Branding) */}
        <div className="bg-purple-700 flex-col justify-center items-center w-full lg:w-1/3 p-8 hidden md:flex">
          <div>
            <h1 className="text-white text-4xl font-bold mb-4">AudLearn</h1>
            <p className="text-white text-xl">Learning Without Boundaries</p>
          </div>
        </div>

        {/* Right Side (Dynamic Content) */}
        <div className="flex flex-col justify-center items-center w-full md:w-2/3 p-8 bg-white overflow-y-auto">
          {content} {/* Dynamic content passed as a prop */}
        </div>
      </div>
    </div>
  );
};

export default ModalLogin;
