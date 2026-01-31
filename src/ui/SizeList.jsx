function SizeList({ title = "Size:", list }) {
  return (
    <div>
      <h3 className="font-medium text-sm mb-3">{title}</h3>
      <div className="mb-8 flex gap-1">
        {list &&
          list.map((size) => {
            return (
              <button
                className="inline-flex items-center justify-center p-3 px-4 border border-gray-300 rounded-sm cursor-pointer"
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
