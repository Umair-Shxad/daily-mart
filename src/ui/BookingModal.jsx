import { CgClose } from "react-icons/cg";
import ColorsList from "./ColorsList";
import SizeList from "./SizeList";
import Button from "./Button";
import { BiCartAdd, BiHeart } from "react-icons/bi";
import BookingModalSlider from "./BookingModalSlider";

function BookingModal({ close, product }) {
  // if (openModal !== true) return null;
  return (
    <div className="fixed inset-0 z-9999 flex items-center before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-60">
      <div className="p-3 rounded-xl bg-white shadow-lg max-w-4xl mx-auto relative z-10">
        <div className="relative">
          <button
            className="absolute right-0 rounded-2xl p-2 bg-gray-100 cursor-pointer transition-all duration-300 hover:text-gray-500 hover:bg-gray-50"
            onClick={close}
          >
            <CgClose />
          </button>
        </div>
        <div className="flex gap-4">
          <div className="w-1/2">
            <BookingModalSlider galleryImages={product.gallery_images} />
          </div>
          <div className="w-1/2">
            {product.sale_price && (
              <span className="inline-flex items-center rounded-md bg-green-500 px-2 py-1 text-xs font-medium text-white inset-ring inset-ring-gray-500/10">
                Sale
              </span>
            )}

            <h2 className="mb-1 text-3xl font-Sans font-semibold my-2">
              {product.name}
            </h2>
            <div className="flex items-center gap-2">
              {product.sale_price && (
                <span className="font-medium text-md line-through text-gray-500">
                  ${product.price}
                </span>
              )}

              <span className="font-semibold text-xl text-brand">
                ${product.sale_price || product.price}
              </span>
            </div>
            <p className="text-gray-700 mt-3 mb-8 text-sm">
              {product.description}
            </p>
            <ColorsList list={product.colors} />
            <SizeList
              list={product.sizes}
            />
            <div className="flex gap-2">
              <input
                type="number"
                name="number"
                id=""
                className="border border-gray-300 p-3 w-25"
              />

              <Button variant="v3">
                <BiCartAdd className="text-xl" /> Add to Cart
              </Button>
              <Button
                variant="default"
                className="rounded-none hover:text-white"
              >
                <BiHeart className="text-xl" /> Wishlist
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingModal;
