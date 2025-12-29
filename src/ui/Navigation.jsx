const nav = [
  {
    link: "#",
    label: "Home",
  },
  {
    link: "#",
    label: "Shop",
    hasChildren: true,
    dropdown: [
      {
        link: "#",
        label: "Dropdown 1",
      },
      {
        link: "#",
        label: "Dropdown 2",
      },
      {
        link: "#",
        label: "Dropdown 3",
      },
    ],
  },
  {
    link: "#",
    label: "Blog",
  },
  {
    link: "#",
    label: "Pages",
  },
];

function Navigation() {
  return (
    <ul className="flex gap-4">
      {nav.map((item, index) => {
        return (
          <li
            className={`relative block ${item?.hasChildren ? "group" : ""}`}
            key={index}
          >
            <a
              href={item.link}
              className="block hover:text-brand transition-all duration-300 px-3 py-2"
            >
              {item.label}
            </a>
            {item.hasChildren && (
              <ul className="hidden group-hover:flex flex-col gap-2 absolute z-10 top-10 left-0 bg-gray-50 p-4 py-3 rounded-lg w-[180px] shadow-[0px_0px_42px_0px_rgba(32,32,32,.15)] before:content-[''] before:absolute before:-top-1 before:left-5 before:w-5 before:h-5 before:bg-inherit before:rotate-45">
                {item.dropdown.map((dropdown, i) => (
                  <li
                    className="block border-b border-gray-300 last:border-b-0"
                    key={i}
                  >
                    <a
                      href={dropdown.link}
                      className="block text-sm transition-all duration-300 py-2 hover:text-brand hover:translate-x-2"
                    >
                      {dropdown.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default Navigation;
