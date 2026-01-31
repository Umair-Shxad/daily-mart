function ColorsList({ title = "Color:", list }) {
  return (
    <div>
      <h3 className="font-medium text-sm mb-3">{title}</h3>
      <div className="mb-8 flex gap-1">
        {list &&
          list.map((color) => {
            return (
              <span
                className="rounded-full p-1 flex items-center justify-center border border-gray-300 w-8 h-8 cursor-pointer"
                key={color}
              >
                <span
                  className={`rounded-full bg-${color} p-3 inline-block`}
                ></span>
              </span>
            );
          })}
      </div>
    </div>
  );
}

export default ColorsList;
