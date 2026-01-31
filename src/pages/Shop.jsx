import { BsArrowRight } from "react-icons/bs";
import Card from "../ui/Card";
import { PRODUCTS } from "../constants";
import Button from "../ui/Button";
import Breadcrumb from "../ui/Breadcrumb";

const mainCat = [...new Set(PRODUCTS.map((prod) => prod.main_category))];
const prod = PRODUCTS.slice(0, 8);

function Shop() {
  return (
    <>
      <section className="bg-[url('/images/shop-banner.png')] bg-cover bg-center">
        <div className="container">
          <div className="flex justify-center items-center min-h-[350px] flex-wrap">
            <div className="text-center">
              <h1 className="mb-1 text-5xl font-Sans font-semibold">Shop</h1>
              <ul className="flex justify-center py-4 gap-4">
                {mainCat.map((mainCat) => (
                  <li>{mainCat}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Breadcrumb parentPage={{ url: "/shop", name: "Shop", active: true }} />

      <div className="container py-15">
        <div className="grid grid-cols-4 gap-3">
          {prod.map((product) => (
            <Card product={product} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button as="a" href="#" variant="v1">
            Load More
            <BsArrowRight className="ms-3 transition-all duration-300 hover:text-white" />
          </Button>
        </div>
      </div>
    </>
  );
}

export default Shop;
