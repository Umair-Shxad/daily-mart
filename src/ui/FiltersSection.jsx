import SizeList from "./SizeList";
import ColorsList from "./ColorsList";
import { PRODUCTS } from "../constants";
import PriceRangeSlider from "./PriceRangeSlider";
import CategoryFilter from "./CategoryFilter";
const sizes = [...new Set([...PRODUCTS.map((prod) => prod.sizes)].flat())];
const colors = [...new Set([...PRODUCTS.map((prod) => prod.colors)].flat())];

function FiltersSection({ mainCat, setSize, setColor, setCategory }) {
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
            <CategoryFilter mainCat={mainCat} setCategory={setCategory} />
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
        </div>
      </div>
    </>
  );
}

export default FiltersSection;
