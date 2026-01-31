import { CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Topbar from "./Topbar";
import Search from "./Search";
import { RxHamburgerMenu } from "react-icons/rx";
import { useMenuToggle } from "../context/useMenuToggle";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

function Header() {
  const { isOpenSidebar, toggleSidebar } = useMenuToggle();
  return (
    <>
      <div className="wrapper">
        <Topbar />
        <div className="container py-4">
          <div className="grid md:grid-cols-[70%_30%] grid-cols-3 gap-4 gap-y-8 items-center justify-between">
            <div className="md:hidden">
              <button
                className="cursor-pointer text-xl"
                onClick={toggleSidebar}
              >
                <RxHamburgerMenu />
              </button>
            </div>
            <div className="flex">
              <Link to="/" className="">
                <Logo />
              </Link>

              <div className="ms-15 hidden md:block">
                <Navigation />
              </div>
            </div>
            <div className="flex gap-4 md:ms-auto">
              <Search />
              <CiUser className="cursor-pointer text-2xl hover:text-brand" />
              <div className="relative">
                <CiHeart className="cursor-pointer text-2xl hover:text-brand" />
                <div className="absolute inline-flex items-center justify-center w-5 h-5 text-[10px] font-bold text-white bg-brand border-2 border-buffer rounded-full -top-1.5 -end-1.5">
                  20
                </div>
              </div>
              <div className="relative">
                <CiShoppingCart className="cursor-pointer text-2xl hover:text-brand" />
                <div className="absolute inline-flex items-center justify-center w-5 h-5 text-[10px] font-bold text-white bg-gray-500 border-2 border-buffer rounded-full -top-1.5 -end-1.5">
                  20
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Sidebar />
      {/* {isOpenSidebar && <Sidebar />} */}
    </>
  );
}

export default Header;
