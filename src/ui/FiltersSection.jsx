import { BiChevronDown } from "react-icons/bi";
import SizeList from "./SizeList";
import ColorsList from "./ColorsList";
import { PRODUCTS } from "../constants";
import PriceRangeSlider from "./PriceRangeSlider";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const sizes = [...new Set([...PRODUCTS.map((prod) => prod.sizes)].flat())];
const colors = [...new Set([...PRODUCTS.map((prod) => prod.colors)].flat())];
const subCat = [...new Set(PRODUCTS.map((prod) => prod.subcategory))];

function FiltersSection({
  mainCat,
  size,
  setSize,
  color,
  setColor,
  category,
  setCategory,
}) {
  const [show, setShow] = useState({
    Men: false,
    Women: false,
    Children: false,
  });
  const [activeSubCat, setActiveSubCat] = useState(null);

  const navigate = useNavigate();

  function toggleCollapse(key) {
    setShow((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  }

  function handleSubCat(mainCat, cat) {
    setCategory((prev) => ({
      ...prev,
      mainCat,
      subCat: cat,
    }));
    setActiveSubCat(mainCat + cat);
  }

  function numProducts(mainCat, subCat) {
    return PRODUCTS.filter(
      (prod) => prod.main_category === mainCat && prod.subcategory === subCat,
    ).length;
  }

  function handleSubmit(e) {
    e.preventDefault();

    navigate(
      `/shop?size=${size}&color=${color}&mainCat=${category.mainCat}&subCat=${category.subCat}`,
    );
  }

  return (
    <>
      {/* collapse show */}
      <div className=" w-full" id="filterBox">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-4 gap-8 py-3 b-0"
        >
          <div className="">
            <div className="single_filter_title mb-2">
              <h6 className="font-normal text-sm text-gray-500">
                Choose Categories
              </h6>
            </div>
            <div className="grid gap-3">
              {mainCat &&
                mainCat.map((mainCat) => (
                  <div className="text-sm" key={mainCat}>
                    <div className="flex items-center justify-between">
                      <button
                        type="button"
                        className={`text-lg ${show[mainCat] ? "text-brand" : ""}`}
                      >
                        {mainCat}'s
                      </button>
                      <span
                        className="bg-gray-200 rounded-full p-0.5 text-lg text-brand cursor-pointer"
                        onClick={() => toggleCollapse(mainCat)}
                      >
                        <BiChevronDown />
                      </span>
                    </div>

                    <div className={`mt-2 ${!show[mainCat] ? "hidden" : ""}`}>
                      <ul className="space-y-2">
                        {subCat.map(
                          (cat) =>
                            numProducts(mainCat, cat) > 0 && (
                              <li key={cat}>
                                <button
                                  className={`flex items-center justify-between w-full cursor-pointer ${activeSubCat === mainCat + cat ? "text-brand" : ""}`}
                                  onClick={() => handleSubCat(mainCat, cat)}
                                >
                                  {cat}
                                  <span>
                                    {numProducts(mainCat, cat) < 9
                                      ? "0" + numProducts(mainCat, cat)
                                      : numProducts(mainCat, cat)}
                                  </span>
                                </button>
                              </li>
                            ),
                        )}
                      </ul>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="">
            <div className="single_filter_title mb-2">
              <h6 className="font-normal text-sm text-gray-500">Choose Size</h6>
            </div>
            <div className="pt-2">
              <SizeList boxSize="sm" list={sizes} setSize={setSize} />
            </div>
          </div>
          <div className="">
            <div className="single_filter_title mb-2">
              <h6 className="font-normal text-sm text-gray-500">
                Choose Colors
              </h6>
            </div>
            <div className="text-left">
              <ColorsList list={colors} setColor={setColor} />
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
        </form>
      </div>
    </>
  );
}

export default FiltersSection;
