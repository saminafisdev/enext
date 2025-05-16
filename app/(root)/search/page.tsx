import ProductCard from "@/components/shared/product/ProductCard";
import Link from "next/link";
import React from "react";

const SearchPage = () => {
  return (
    <div>
      {/* Filter sidebar */}
      <div className="bg-card grid md:grid-cols-5 md:gap-4">
        <div className="space-y-4">
          <div>
            <div className="font-bold">Department</div>
            <ul>
              <li>
                <Link
                  // className={`${
                  //   ("all" === category || "" === category) && "text-primary"
                  // }`}
                  // href={getFilterUrl({ category: "all", params })}
                  href={""}
                >
                  All
                </Link>
              </li>
              {/* {categories.map((c: string) => (
                <li key={c}>
                  <Link
                    className={`${c === category && "text-primary"}`}
                    href={getFilterUrl({ category: c, params })}
                  >
                    {c}
                  </Link>
                </li>
              ))} */}
              <li>
                <Link href={"#"}>Jeans</Link>
              </li>
              <li>
                <Link href={"#"}>Shoes</Link>
              </li>
              <li>
                <Link href={"#"}>Watches</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Filter sidebar end */}
        <div className="md:col-span-4 space-y-4">
          <div>
            <div className="font-bold text-xl">Results</div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
            {Array.from({ length: 10 }).map((_, index) => (
              <ProductCard key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
