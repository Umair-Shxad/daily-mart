const btnSize = {
  sm: "p-1 px-2 text-sm",
  md: "p-2 px-3",
  default: "p-3 px-4",
};
function SizeList({ title, list, boxSize = "default" }) {
  return (
    <div>
      {title && <h3 className="font-medium text-sm mb-3">{title}</h3>}
      <div className="mb-8 flex gap-2 flex-wrap">
        {list &&
          list.map((size) => {
            return (
              <button
                className={`inline-flex items-center justify-center border border-gray-300 rounded-sm cursor-pointer ${btnSize[boxSize]}`}
                key={size}
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
