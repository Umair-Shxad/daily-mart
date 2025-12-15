import { IoIosArrowDown } from "react-icons/io";
import Logo from "./Logo";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import Button from "./Button";
import { AiOutlineUser } from "react-icons/ai";
import { useMenuToggle } from "../context/useMenuToggle";

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
];

function Sidebar() {
  const [openIndex, setOpenIndex] = useState(false);
  const { isOpenSidebar, toggleSidebar } = useMenuToggle();

  function toggleDropdown(index) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }
  return (
    <div
      className={`fixed left-0 top-0 bottom-0 z-10 w-xs h-screen bg-white shadow-[0px_0px_42px_0px_rgba(32,32,32,.15)] p-10 px-6 transition-all duration-500 ${
        isOpenSidebar ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <IoCloseOutline
        className="absolute top-3 right-4 text-xl cursor-pointer"
        onClick={toggleSidebar}
      />

      <div className="pb-4 flex justify-between items-center">
        <Logo />
        <Button text="Login" icon={<AiOutlineUser />} />
      </div>
      <div className="py-4 border-t border-b border-gray-300 h-[calc(100vh-170px)]">
        <ul className="flex flex-col gap-1">
          {nav.map((item, index) => {
            return (
              <li className={`relative block`} key={index}>
                <a
                  href={item.link}
                  className="flex items-center justify-between hover:text-brand transition-all duration-300 py-1 font-medium"
                >
                  {item.label}
                  {item.hasChildren && (
                    <IoIosArrowDown
                      className={`${
                        openIndex === index ? "rotate-180" : ""
                      } transition-all duration-300`}
                      onClick={() => toggleDropdown(index)}
                    />
                  )}
                </a>

                {item.hasChildren && (
                  <ul
                    className={`${
                      openIndex === index ? "flex" : "hidden"
                    } flex-col top-10 left-0 p-4 py-0 my-3 ms-3 before:content-[''] before:position before:top-0 before:bottom-0 before:left-0 border-l border-gray-300`}
                  >
                    {item.dropdown.map((dropdown, i) => (
                      <li className="block" key={i}>
                        <a
                          href={dropdown.link}
                          className="block font-medium text-sm transition-all duration-300 py-2 hover:text-brand hover:translate-x-2"
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
      </div>
      <div className="py-4">
        <ul className="flex justify-between">
          <li>
            <a href="#">Curr</a>
          </li>
          <li>
            <a href="#">English</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
