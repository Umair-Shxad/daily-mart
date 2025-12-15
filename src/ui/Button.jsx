function Button({ icon, text }) {
  return (
    <button className="rounded-full bg-gray-200 p-3 px-5 flex items-center gap-2 hover:bg-brand transition-all duration-300 cursor-pointer group">
      <span className="group-hover:text-white transition-all duration-300">
        {text}
      </span>{" "}
      <span className="group-hover:text-white text-xl transition-all duration-300">
        {icon}
      </span>
    </button>
  );
}

export default Button;
