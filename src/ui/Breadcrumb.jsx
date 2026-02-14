import { Link } from "react-router-dom";
import FiltersSection from "./FiltersSection";

function Breadcrumb({
  bgColor,
  parentPage,
  childPage,
  openFilters,
  mainCat,
  size,
  setSize,
  color,
  setColor,
  category,
  setCategory,
  children,
}) {
  return (
    <section className={`border-b border-gray-200 bg-${bgColor}`}>
      <div className="container flex flex-wrap items-center py-4 gap-2">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full">
          <div className="flex gap-2 text-sm">
            <Link to="/">Home</Link>
            {parentPage && (
              <>
                <span>/</span>
                <Link
                  to={parentPage.url}
                  className={`${parentPage.active ? "text-gray-500" : ""}`}
                >
                  {parentPage.name}
                </Link>
              </>
            )}
            {childPage && (
              <>
                <span>/</span>
                <Link
                  to={childPage.url}
                  className={`${childPage.active ? "text-gray-500" : ""}`}
                >
                  {childPage.name}
                </Link>
              </>
            )}
          </div>
          <div className="">{children}</div>
        </div>
        {openFilters && (
          <FiltersSection
            mainCat={mainCat}
            size={size}
            setSize={setSize}
            color={color}
            setColor={setColor}
            category={category}
            setCategory={setCategory}
          />
        )}
      </div>
    </section>
  );
}

export default Breadcrumb;
