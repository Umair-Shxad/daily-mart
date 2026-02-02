import { BsArrowRight } from "react-icons/bs";
import Card from "../ui/Card";
import { PRODUCTS } from "../constants";
import Button from "../ui/Button";
import Breadcrumb from "../ui/Breadcrumb";
import { useState } from "react";
import Filters from "../ui/Filters";

const mainCat = [...new Set(PRODUCTS.map((prod) => prod.main_category))];
const maxProd = PRODUCTS.length;
const NUM_OF_ITEM = 8;

function Shop() {
  const [visibleCount, setVisibleCount] = useState(NUM_OF_ITEM);
  const products = PRODUCTS.slice(0, visibleCount);

  function LoadMore() {
    setVisibleCount((count) => count + NUM_OF_ITEM);
  }

  return (
    <>
      <section className="bg-[url('/images/shop-banner.png')] bg-cover bg-center">
        <div className="container">
          <div className="flex justify-center items-center min-h-[350px] flex-wrap">
            <div className="text-center">
              <h1 className="mb-1 text-5xl font-Sans font-semibold">Shop</h1>
              <ul className="flex justify-center py-4 gap-4">
                {mainCat.map((mainCat) => (
                  <li key={mainCat}>{mainCat}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Breadcrumb parentPage={{ url: "/shop", name: "Shop", active: true }}>
        <div>
          <Filters />
        </div>
      </Breadcrumb>

      <div className="container py-15">
        <div className="grid grid-cols-4 gap-3">
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          {visibleCount < maxProd && (
            <Button variant="v1" onClick={LoadMore}>
              Load More
              {visibleCount}
              <BsArrowRight className="ms-3 transition-all duration-300 hover:text-white" />
            </Button>
          )}
        </div>
      </div>
    </>
  );
}

export default Shop;
