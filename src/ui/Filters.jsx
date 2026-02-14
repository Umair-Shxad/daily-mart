import { AiOutlineTable } from "react-icons/ai";
import { BsBorderAll, BsFilterRight, BsListUl } from "react-icons/bs";

function Filters({ toggleOpenFilters, toggleGridLayout, setSortBy }) {
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
        <select onChange={(e) => setSortBy(e.target.value)}>
          <option value="default">Default Sorting</option>
          <option value="lowPrice">Sort by price: Low price</option>
          <option value="highPrice">Sort by price: High price</option>
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
