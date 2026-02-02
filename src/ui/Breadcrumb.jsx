import { BiChevronDown } from "react-icons/bi";
import { Link } from "react-router-dom";
import SizeList from "./SizeList";
import ColorsList from "./ColorsList";
import { PRODUCTS } from "../constants";
import PriceRangeSlider from "./PriceRangeSlider";
const sizes = [...new Set([...PRODUCTS.map((prod) => prod.sizes)].flat())];
const colors = [...new Set([...PRODUCTS.map((prod) => prod.colors)].flat())];

function Breadcrumb({ bgColor, parentPage, childPage, children }) {
  return (
    <section className={`border-b border-gray-200 bg-${bgColor}`}>
      <div className="container flex flex-wrap items-center py-4 gap-2">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full">
          <div className="flex gap-2 text-sm">
            <Link to="/">Home</Link>
            {parentPage && (
              <>
                <span>/</span>
                <Link
                  to={parentPage.url}
                  className={`${parentPage.active ? "text-gray-500" : ""}`}
                >
                  {parentPage.name}
                </Link>
              </>
            )}
            {childPage && (
              <>
                <span>/</span>
                <Link
                  to={childPage.url}
                  className={`${childPage.active ? "text-gray-500" : ""}`}
                >
                  {childPage.name}
                </Link>
              </>
            )}
          </div>
          <div className="">{children}</div>
        </div>
        {/* collapse show */}
        <div className=" w-full" id="filterBox">
          <div className="grid grid-cols-4 gap-8 py-3 b-0">
            <div className="">
              <div className="single_filter_title mb-2">
                <h6 className="font-normal text-sm text-gray-500">
                  Choose Categories
                </h6>
              </div>
              <div className="text-sm mb-4">
                <a
                  href="/shop-style-4#mens"
                  className="text-lg flex items-center justify-between mb-3"
                >
                  Men's
                  <span className="bg-gray-200 rounded-full p-0.5 text-lg text-brand">
                    <BiChevronDown />
                  </span>
                </a>
                <div id="mens">
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="/shop-style-4"
                        className="flex items-center justify-between"
                      >
                        Pumps &amp; high Heals<span>112</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/shop-style-4"
                        className="flex items-center justify-between"
                      >
                        Sandels<span>82</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/shop-style-4"
                        className="flex items-center justify-between"
                      >
                        Sneakers<span>56</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/shop-style-4"
                        className="flex items-center justify-between"
                      >
                        Boots<span>101</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/shop-style-4"
                        className="flex items-center justify-between"
                      >
                        Casual Shoes<span>212</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/shop-style-4"
                        className="flex items-center justify-between"
                      >
                        Flats Sandel<span>92</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-sm">
                <a
                  href="/shop-style-4#womens"
                  className="text-lg flex items-center justify-between mb-3"
                >
                  Women's
                  <span className="bg-gray-200 rounded-full p-0.5 text-lg text-brand">
                    <BiChevronDown />
                  </span>
                </a>
                <div id="womens">
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="/shop-style-4"
                        className="flex items-center justify-between"
                      >
                        Pumps &amp; high Heals<span>112</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/shop-style-4"
                        className="flex items-center justify-between"
                      >
                        Sandels<span>82</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/shop-style-4"
                        className="flex items-center justify-between"
                      >
                        Sneakers<span>56</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/shop-style-4"
                        className="flex items-center justify-between"
                      >
                        Boots<span>101</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/shop-style-4"
                        className="flex items-center justify-between"
                      >
                        Casual Shoes<span>212</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/shop-style-4"
                        className="flex items-center justify-between"
                      >
                        Flats Sandel<span>92</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="">
              <div className="single_filter_title mb-2">
                <h6 className="font-normal text-sm text-gray-500">
                  Choose Size
                </h6>
              </div>
              <div className="pt-2">
                <SizeList boxSize="sm" list={sizes} />
              </div>
            </div>
            <div className="">
              <div className="single_filter_title mb-2">
                <h6 className="font-normal text-sm text-gray-500">
                  Choose Colors
                </h6>
              </div>
              <div className="text-left">
                <ColorsList list={colors} />
              </div>
            </div>
            <div className="">
              <div className="single_filter_title mb-2">
                <h6 className="font-normal text-sm text-gray-500">
                  Filter By Price
                </h6>
              </div>
              <div className="side-list mb-2">
                <PriceRangeSlider />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Breadcrumb;
