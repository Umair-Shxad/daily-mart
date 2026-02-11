import { BiChevronDown } from "react-icons/bi";
import SizeList from "./SizeList";
import ColorsList from "./ColorsList";
import { PRODUCTS } from "../constants";
import PriceRangeSlider from "./PriceRangeSlider";
import { useState } from "react";
const sizes = [...new Set([...PRODUCTS.map((prod) => prod.sizes)].flat())];
const colors = [...new Set([...PRODUCTS.map((prod) => prod.colors)].flat())];

function FiltersSection() {
  const [show, setShow] = useState({
    mens: false,
    womens: false,
  });

  function toggleCollapse(key) {
    setShow((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  }
  return (
    <>
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
              <div className="flex items-center justify-between mb-3">
                <a href="/shop-style-4#mens" className="text-lg">
                  Men's
                </a>
                <span
                  className="bg-gray-200 rounded-full p-0.5 text-lg text-brand cursor-pointer"
                  onClick={() => toggleCollapse("mens")}
                >
                  <BiChevronDown />
                </span>
              </div>

              <div className={`${!show.mens ? "hidden" : ""}`}>
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
              <div className="flex items-center justify-between mb-3">
                <a href="/shop-style-4#womens" className="text-lg">
                  Women's
                </a>
                <span
                  className="bg-gray-200 rounded-full p-0.5 text-lg text-brand cursor-pointer"
                  onClick={() => toggleCollapse("womens")}
                >
                  <BiChevronDown />
                </span>
              </div>
              <div className={`${!show.womens ? "hidden" : ""}`}>
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
              <h6 className="font-normal text-sm text-gray-500">Choose Size</h6>
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
    </>
  );
}

export default FiltersSection;
