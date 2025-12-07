import { CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Topbar from "./Topbar";
import Search from "./Search";

function Header() {
  return (
    <>
      <div className="wrapper">
        <Topbar />
        <div className="container mx-auto py-4">
          <div className="row items-center">
            <div className="">
              <Logo />
            </div>
            <div className="ms-15">
              <Navigation />
            </div>
            <div className="flex gap-4 ms-auto">
              <Search />
              <CiUser className="cursor-pointer text-2xl hover:text-brand" />
              <div className="relative">
                <CiHeart className="cursor-pointer text-2xl hover:text-brand" />
                <div class="absolute inline-flex items-center justify-center w-5 h-5 text-[10px] font-bold text-white bg-brand border-2 border-buffer rounded-full -top-1.5 -end-1.5">
                  20
                </div>
              </div>
              <div className="relative">
                <CiShoppingCart className="cursor-pointer text-2xl hover:text-brand" />
                <div class="absolute inline-flex items-center justify-center w-5 h-5 text-[10px] font-bold text-white bg-gray-500 border-2 border-buffer rounded-full -top-1.5 -end-1.5">
                  20
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
