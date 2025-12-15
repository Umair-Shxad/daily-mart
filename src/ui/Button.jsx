function Button({ icon, text, link, btnType, variation, children }) {
  let classes =
    "btn p-3 px-5 flex items-center gap-2 transition-all duration-300 cursor-pointer group";

  if (variation === "v1") {
    classes +=
      "px-5 py-3 border border-black inline-flex hover:bg-black hover:text-white";
  } else {
    classes += "bg-gray-200 rounded-full hover:bg-brand ";
  }

  return btnType !== "link" ? (
    <button className={classes}>
      {children ? (
        children
      ) : (
        <>
          <span className="group-hover:text-white transition-all duration-300">
            {text}
          </span>{" "}
          <span className="group-hover:text-white text-xl transition-all duration-300">
            {icon}
          </span>
        </>
      )}
    </button>
  ) : (
    <a href={link} className={classes}>
      {children ? (
        children
      ) : (
        <>
          <span className="group-hover:text-white transition-all duration-300">
            {text}
          </span>{" "}
          <span className="group-hover:text-white text-xl transition-all duration-300">
            {icon}
          </span>
        </>
      )}
    </a>
  );
}

export default Button;
