import { useParams } from "react-router-dom";
import Breadcrumb from "../ui/Breadcrumb";
import { PRODUCTS } from "../constants";
import SizeList from "../ui/SizeList";
import ColorsList from "../ui/ColorsList";
import { BiCartAdd, BiHeart } from "react-icons/bi";
import Button from "../ui/Button";
import ProductSlider from "../ui/ProductSlider";
import Tabs from "../ui/Tabs";
import RelatedProducts from "../ui/RelatedProducts";

function ShopDetails() {
  const { id } = useParams();
  const product = PRODUCTS.find((prod) => prod.id === +id);
  const relatedProducts = PRODUCTS.filter(
    (prod) =>
      prod.id !== +id &&
      prod.main_category === product.main_category &&
      prod.subcategory === product.subcategory,
  );
  return (
    <div>
      <Breadcrumb
        breadcrumbItems={[
          { url: "/shop", name: "Shop" },
          //   ...(currentCat ? [{ name: currentCat }] : []),
        ]}
      />

      <div className="container">
        <div className="flex items-center py-12">
          <div className="p-3">
            <div className="grid grid-cols-2 gap-16 items-center">
              <div className="">
                <ProductSlider galleryImages={product.gallery_images} />
              </div>
              <div className="">
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
                <p className="text-gray-700 mt-3 mb-8 leading-6 text-sm">
                  {product.description}
                </p>
                <ColorsList title="Color:" list={product.colors} />
                <SizeList title="Size:" list={product.sizes} />
                <div className="flex gap-2">
                  <input
                    type="number"
                    name="number"
                    id=""
                    className="border border-gray-300 p-3 w-25 flex-1"
                  />

                  <Button variant="v3" className="flex-1">
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

        <Tabs />

        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-center text-2xl font-medium font-Poppins mb-10">
              Matching Product
            </h2>
            <div className="mb-10">
              <RelatedProducts
                relatedProducts={relatedProducts}
                slidesPerView={3}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ShopDetails;
