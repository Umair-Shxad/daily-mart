function Button({
  as = "button", // button | a
  href,
  icon,
  text,
  variant = "default",
  children,
  className = "",
  ...props
}) {
  const baseClasses =
    "btn p-3 px-5 flex items-center gap-2 transition-all duration-300 cursor-pointer group ";

  const variants = {
    v1: "px-5 py-3 border border-black inline-flex hover:bg-black hover:text-white",
    v2: "bg-white text-black hover:bg-brand hover:text-white uppercase",
    v3: "px-5 py-3 border border-black bg-black text-white inline-flex hover:bg-white hover:text-black",
    default: "bg-gray-200 rounded-full hover:bg-brand",
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  const content = children ?? (
    <>
      <span className="group-hover:text-white transition-all duration-300">
        {text}
      </span>{" "}
      <span className="group-hover:text-white text-xl transition-all duration-300">
        {icon}
      </span>
    </>
  );

  if (as === "a" && href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {content}
    </button>
  );
}

export default Button;
