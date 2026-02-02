import { useEffect, useRef, useState } from "react";

function PriceRangeSlider() {
  const barRef = useRef(null);
  const draggingRef = useRef(null); // ← IMPORTANT

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);

  function handleMouseDown(type, e) {
    e.preventDefault(); // stop text selection
    draggingRef.current = type;
  }

  function handleMouseMove(e) {
    if (!draggingRef.current || !barRef.current) return;

    const rect = barRef.current.getBoundingClientRect();
    let x = e.clientX - rect.left;
    x = Math.max(0, Math.min(x, rect.width));

    const value = Math.round((x / rect.width) * 100);

    if (draggingRef.current === "min" && value < max) {
      setMin(value);
    }

    if (draggingRef.current === "max" && value > min) {
      setMax(value);
    }
  }

  function handleMouseUp() {
    draggingRef.current = null;
  }

  // Attach listeners ONCE
  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [min, max]); // min/max needed for logic

  return (
    <div className="rg-slider">
      <div className="mt-10">
        <div ref={barRef} className="relative h-2 bg-gray-300 rounded-xl">
          {/* Active range */}
          <div
            className="absolute h-2 bg-black rounded-xl"
            style={{
              left: `${min}%`,
              width: `${max - min}%`,
            }}
          />

          {/* Min thumb */}
          <div
            onMouseDown={(e) => handleMouseDown("min", e)}
            className="absolute top-1/2 w-4 h-4 bg-white border rounded-full cursor-pointer"
            style={{
              left: `${min}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <span className="absolute -top-7 -left-2 w-6 h-6 text-[8px] bg-black text-white flex items-center justify-center rounded-full">
              {min}
            </span>
          </div>

          {/* Max thumb */}
          <div
            onMouseDown={(e) => handleMouseDown("max", e)}
            className="absolute top-1/2 w-4 h-4 bg-white border rounded-full cursor-pointer"
            style={{
              left: `${max}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <span className="absolute -top-7 -left-2 w-6 h-6 text-[8px] bg-black text-white flex items-center justify-center rounded-full">
              {max}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PriceRangeSlider;
