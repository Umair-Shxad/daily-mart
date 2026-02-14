import { BsArrowRight } from "react-icons/bs";
import Card from "../ui/Card";
import { PRODUCTS } from "../constants";
import Button from "../ui/Button";
import Breadcrumb from "../ui/Breadcrumb";
import { useEffect, useState } from "react";
import Filters from "../ui/Filters";
import { useSearchParams } from "react-router-dom";

const mainCat = [...new Set(PRODUCTS.map((prod) => prod.main_category))];
const NUM_OF_ITEM = 8;

function Shop() {
  const [visibleCount, setVisibleCount] = useState(NUM_OF_ITEM);
  const [openFilters, setOpenFilters] = useState(false);
  const [gridLayoutChange, setGridLayoutChange] = useState({
    fourCol: true,
    threeCol: false,
    twoCol: false,
  });
  const [searchParams] = useSearchParams();
  const [size, setSize] = useState(searchParams.get("size"));
  const [color, setColor] = useState(searchParams.get("color"));
  const [category, setCategory] = useState({
    mainCat: searchParams.get("mainCat"),
    subCat: searchParams.get("subCat"),
  });
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);
  const products = filteredProducts.slice(0, visibleCount);
  const maxProd = filteredProducts.length;

  useEffect(() => {
    setFilteredProducts(
      PRODUCTS.filter((p) => {
        const matchCategory =
          category.mainCat && category.subCat
            ? p.main_category === category.mainCat &&
              p.subcategory === category.subCat
            : true;
        const matchSize = size
          ? p.sizes.includes(size.replace("%20", " "))
          : true;
        const matchColor = color
          ? p.colors.includes(color.replace("%20", " "))
          : true;

        return matchCategory && matchSize && matchColor;
      }),
    );

    setVisibleCount(NUM_OF_ITEM);
  }, [size, color, category]);

  function toggleGridLayout(key) {
    setGridLayoutChange((prev) => ({
      fourCol: false,
      threeCol: false,
      twoCol: false,
      [key]: !prev[key],
    }));
  }

  function toggleOpenFilters() {
    setOpenFilters((open) => !open);
  }

  function loadMore() {
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

      <Breadcrumb
        openFilters={openFilters}
        parentPage={{ url: "/shop", name: "Shop", active: true }}
        mainCat={mainCat}
        size={size}
        setSize={setSize}
        color={color}
        setColor={setColor}
        category={category}
        setCategory={setCategory}
      >
        <div>
          <Filters
            toggleOpenFilters={toggleOpenFilters}
            toggleGridLayout={toggleGridLayout}
          />
        </div>
      </Breadcrumb>

      <div className="container py-15">
        <div
          className={`grid gap-3 ${gridLayoutChange.fourCol && "grid-cols-4"} ${gridLayoutChange.threeCol && "grid-cols-3"} ${gridLayoutChange.twoCol && "grid-cols-2 gap-10"} `}
        >
          {products.map((product) => (
            <Card
              key={product.id}
              product={product}
              gridLayoutChange={gridLayoutChange}
            />
          ))}
        </div>

        {products.length === 0 && (
          <h2 className="text-center text-lg font-medium">No Product Found</h2>
        )}
        <div className="mt-10 flex justify-center">
          {visibleCount < maxProd && (
            <Button variant="v1" onClick={loadMore}>
              Load More
              <BsArrowRight className="ms-3 transition-all duration-300 hover:text-white" />
            </Button>
          )}
        </div>
      </div>
    </>
  );
}

export default Shop;
