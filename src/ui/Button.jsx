const Button = ({ onClick, customStyles = "", label }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-orange-500 text-white font-bold py-4 px-8 flex items-center justify-center rounded-[8px] w-full sm:w-auto transition duration-300 ease-in-out ${customStyles}`}
    >
      {label}
    </button>
  );
};

export default Button;
