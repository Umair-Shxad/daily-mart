import { BsArrowRight } from "react-icons/bs";
import Card from "../ui/Card";
import { PRODUCTS } from "../constants";
import Button from "../ui/Button";
import Breadcrumb from "../ui/Breadcrumb";
import { useEffect, useState } from "react";
import Filters from "../ui/Filters";
import {
  NavLink,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

const mainCat = [...new Set(PRODUCTS.map((prod) => prod.main_category))];
const prices = PRODUCTS.map((prod) => prod.price || prod?.sale_price);
const minPrice = Math.min(...prices);
const maxPrice = Math.max(...prices);

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
  const [sortBy, setSortBy] = useState(searchParams.get("sortBy") || "default");
  const [min, setMin] = useState(searchParams.get("min") || minPrice);
  const [max, setMax] = useState(searchParams.get("max") || maxPrice);
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);
  const products = filteredProducts.slice(0, visibleCount);
  const maxProd = filteredProducts.length;

  const navigate = useNavigate();
  const currentCat = searchParams.get("mainCat");

  useEffect(() => {
    setSize(searchParams.get("size"));
    setColor(searchParams.get("color"));
    setCategory({
      mainCat: searchParams.get("mainCat"),
      subCat: searchParams.get("subCat"),
    });
    setSortBy(searchParams.get("sortBy") || "default");
    setMin(Number(searchParams.get("min")) || minPrice);
    setMax(Number(searchParams.get("max")) || maxPrice);
  }, [searchParams]);

  useEffect(() => {
    let result = PRODUCTS;

    result = result.filter((p) => {
      const matchCategory =
        category.mainCat && category.subCat
          ? p.main_category === category.mainCat &&
            p.subcategory === category.subCat
          : category.mainCat
            ? p.main_category === category.mainCat
            : true;
      const matchSize = size
        ? p.sizes.includes(size.replace("%20", " "))
        : true;
      const matchColor = color
        ? p.colors.includes(color.replace("%20", " "))
        : true;
      const matchPrice =
        min || max
          ? (p?.sale_price || p.price) >= min &&
            (p?.sale_price || p.price) <= max
          : true;

      return matchCategory && matchSize && matchColor && matchPrice;
    });

    if (sortBy === "lowPrice") result.sort((a, b) => a.price - b.price);
    if (sortBy === "highPrice") result.sort((a, b) => b.price - a.price);

    setFilteredProducts(result);

    setVisibleCount(NUM_OF_ITEM);
  }, [size, color, category, sortBy, min, max]);

  useEffect(() => {
    const params = new URLSearchParams();

    if (sortBy !== "default") params.set("sortBy", sortBy);
    if (size) params.set("size", size);
    if (color) params.set("color", color);
    if (category.mainCat) params.set("mainCat", category.mainCat);
    if (category.subCat) params.set("subCat", category.subCat);
    if (min !== minPrice) params.set("min", min);
    if (max !== maxPrice) params.set("max", max);

    navigate(params.toString() ? `/shop?${params.toString()}` : "/shop", {
      replace: true,
    });
  }, [size, color, category, sortBy, min, max]);

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
                  <li key={mainCat}>
                    <NavLink
                      to={`/shop?mainCat=${mainCat}`}
                      className={() =>
                        currentCat === mainCat ? "text-brand" : ""
                      }
                    >
                      {mainCat}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Breadcrumb
        openFilters={openFilters}
        breadcrumbItems={[
          { url: "/shop", name: "Shop" },
          ...(currentCat ? [{ name: currentCat }] : []),
        ]}
        mainCat={mainCat}
        setSize={setSize}
        setColor={setColor}
        setCategory={setCategory}
        min={min}
        max={max}
        setMin={setMin}
        setMax={setMax}
        minPrice={minPrice}
        maxPrice={maxPrice}
      >
        <div>
          <Filters
            toggleOpenFilters={toggleOpenFilters}
            toggleGridLayout={toggleGridLayout}
            sortBy={sortBy}
            setSortBy={setSortBy}
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
