import { useState } from "react";

const btnSize = {
  sm: "p-1 px-2 text-sm",
  md: "p-2 px-3",
  default: "p-3 px-4",
};
function SizeList({ title, list, boxSize = "default", setSize }) {
  const [activeSize, setActiveSize] = useState(null);

  function handleClick(size) {
    if (setSize) setSize(size);
    setActiveSize(size);
  }

  return (
    <div>
      {title && <h3 className="font-medium text-sm mb-3">{title}</h3>}
      <div className="mb-8 flex gap-2 flex-wrap">
        {list &&
          list.map((size) => {
            return (
              <button
                className={`inline-flex items-center justify-center border  rounded-sm cursor-pointer ${size === activeSize ? "border-black" : "border-gray-300"} ${btnSize[boxSize]}`}
                key={size}
                onClick={() => handleClick(size)}
              >
                {size}
              </button>
            );
          })}
      </div>
    </div>
  );
}

export default SizeList;
