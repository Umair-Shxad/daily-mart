import { useState } from "react";

function ColorsList({ title, list, setColor }) {
  const [activeColor, setActiveColor] = useState(null);
  function handleClick(color) {
    if (setColor) setColor(color);

    setActiveColor(color);
  }
  return (
    <div>
      {title && <h3 className="font-medium text-sm mb-3">{title}</h3>}
      <div className="mb-8 flex gap-1 flex-wrap">
        {list &&
          list.map((color) => {
            return (
              <button
                className={`rounded-full p-1 flex items-center justify-center border  w-8 h-8 cursor-pointer ${color === activeColor ? "border-black" : "border-gray-300"}`}
                key={color}
                onClick={() => handleClick(color)}
              >
                <span
                  style={{ backgroundColor: color }}
                  className={`rounded-full p-3 inline-block`}
                ></span>
              </button>
            );
          })}
      </div>
    </div>
  );
}

export default ColorsList;
