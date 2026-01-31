import React from "react";
import { Link } from "react-router-dom";

function Breadcrumb({ bgColor, parentPage, childPage }) {
  return (
    <section className={`border-b border-gray-200 bg-${bgColor}`}>
      <div className="container flex py-4 gap-2 text-sm">
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
    </section>
  );
}

export default Breadcrumb;
