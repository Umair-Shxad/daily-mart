import { AiOutlineTable } from "react-icons/ai";
import { BsBorderAll, BsFilterRight, BsListUl } from "react-icons/bs";

function Filters() {
  return (
    <div className="flex gap-4 justify-end">
      <div className="flex gap-2 items-center">
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
        <AiOutlineTable />
        <BsBorderAll className="text-sm" />
        <BsListUl />
      </div>
    </div>
  );
}

export default Filters;
