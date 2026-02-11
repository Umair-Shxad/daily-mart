import { AiOutlineTable } from "react-icons/ai";
import { BsBorderAll, BsFilterRight, BsListUl } from "react-icons/bs";

function Filters({ toggleOpenFilters, toggleGridLayout }) {
  return (
    <div className="flex gap-4 justify-end">
      <div
        className="flex gap-2 items-center cursor-pointer"
        onClick={toggleOpenFilters}
      >
        <BsFilterRight className="text-xl" />
        Filters
      </div>
      <div>
        <select className="">
          <option value="1">Default Sorting</option>
          <option value="2">Sort by price: Low price</option>
          <option value="3">Sort by price: Hight price</option>
          <option value="4">Sort by rating</option>
          <option value="5">Sort by trending</option>
        </select>
      </div>
      <div className="flex items-center gap-3 text-lg">
        <AiOutlineTable
          onClick={() => toggleGridLayout("fourCol")}
          className="cursor-pointer"
        />
        <BsBorderAll
          onClick={() => toggleGridLayout("threeCol")}
          className="text-sm cursor-pointer"
        />
        <BsListUl
          onClick={() => toggleGridLayout("twoCol")}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
}

export default Filters;
