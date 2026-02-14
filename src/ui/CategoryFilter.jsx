import { useState } from "react";
import { PRODUCTS } from "../constants";
import { BiChevronDown } from "react-icons/bi";
const subCat = [...new Set(PRODUCTS.map((prod) => prod.subcategory))];

function CategoryFilter({ mainCat, setCategory }) {
  const [show, setShow] = useState({
    Men: false,
    Women: false,
    Children: false,
  });
  const [activeSubCat, setActiveSubCat] = useState(null);

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

  return (
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
  );
}

export default CategoryFilter;
