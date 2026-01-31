import { useState } from "react";
import { BsEye } from "react-icons/bs";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import BookingModal from "./BookingModal";

function Card({ product }) {
  const [openModal, setOpenModal] = useState(false);

  const open = () => setOpenModal(true);
  const close = () => setOpenModal(false);
  return (
    <>
      <div className="relative group">
        {product.sale_price && (
          <span className="absolute top-3 left-3 z-10 inline-flex items-center rounded-xs bg-green-500 px-3 py-1 text-xs uppercase font-medium text-white inset-ring inset-ring-gray-500/10">
            Sale
          </span>
        )}

        <span className="absolute top-3 right-3 z-10 inline-flex items-center rounded-4xl bg-white p-2 text-xl uppercase font-medium text-white">
          <MdOutlineFavoriteBorder className="text-black" />
        </span>
        <div className="w-full h-[300px] bg-amber-300 relative">
          <img
            className="w-full h-full object-cover"
            src={product.main_image_url}
            alt=""
          />

          <button
            className="flex gap-2 items-center justify-center absolute left-0 right-0 -bottom-8 w-full p-3 bg-black text-white opacity-0 transition-all duration-300 group-hover:bottom-0 group-hover:opacity-100 cursor-pointer"
            onClick={open}
          >
            <BsEye /> Quick View
          </button>
        </div>
        <div className="text-center p-3">
          <div className="text-lg font-light">{product.name}</div>
          <div className="flex justify-center items-center gap-2">
            {product.sale_price && (
              <span className="font-medium text-sm line-through text-gray-500">
                ${product.price}
              </span>
            )}
            <div className="font-semibold">
              {" "}
              ${product.sale_price || product.price}
            </div>
          </div>
        </div>
      </div>

      {openModal && <BookingModal close={close} product={product} />}
    </>
  );
}

export default Card;
