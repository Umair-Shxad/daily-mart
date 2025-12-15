import { BsEye } from "react-icons/bs";
import { MdOutlineFavoriteBorder } from "react-icons/md";

function Card() {
  return (
    <div className="relative group">
      <span class="absolute top-3 left-3 z-10 inline-flex items-center rounded-xs bg-green-500 px-3 py-1 text-xs uppercase font-medium text-white inset-ring inset-ring-gray-500/10">
        Sale
      </span>
      <span class="absolute top-3 right-3 z-10 inline-flex items-center rounded-4xl bg-white p-2 text-xl uppercase font-medium text-white">
        <MdOutlineFavoriteBorder className="text-black" />
      </span>
      <div className="w-full h-[300px] bg-amber-300 relative">
        <img
          className="w-full h-full object-cover"
          src="/images/banner-classic.png"
          alt=""
        />

        <button className="flex gap-2 items-center justify-center absolute left-0 right-0 -bottom-8 w-full p-3 bg-black text-white opacity-0 transition-all duration-300 group-hover:bottom-0 group-hover:opacity-100">
          <BsEye /> Quick View
        </button>
      </div>
      <div className="text-center p-3">
        <div className="text-lg font-light">Wooden Rocking Chair</div>
        <div className="font-semibold">$119.00</div>
      </div>
    </div>
  );
}

export default Card;
