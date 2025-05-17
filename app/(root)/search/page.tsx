import ProductCard from "@/components/shared/product/ProductCard";
import { getProducts, filteredProducts } from "@/lib/api";
import Link from "next/link";
import React, { Suspense } from "react";

interface Product {
  _id: string;
  title: string;
  slug: string;
  images: string[];
  description: string;
  category: string[];
  sub_category: string[];
  unit: string;
  currentStock: number;
  price: number;
  discount: number;
  publish: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const SearchPage = async (props: {
  searchParams?: Promise<{
    query?: string;
  }>;
}) => {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";

  try {
    // Fetch products
    const response = query
      ? await filteredProducts(query)
      : await getProducts();
    const products: Product[] = Array.isArray(response.data)
      ? response.data
      : [];

    return (
      <div>
        {/* Filter sidebar */}
        <div className="bg-card grid md:grid-cols-5 md:gap-4">
          <div className="space-y-4">
            <div>
              <div className="font-bold">Department</div>
              <ul>
                <li>
                  <Link href={""}>All</Link>
                </li>
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
            <Suspense fallback={<h1>Loading</h1>}>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
                {/* Display products */}
                {products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                  // <p key={product._id}>{product.title}</p>
                ))}
              </div>
            </Suspense>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return <div>Error loading products.</div>;
  }
};

export default SearchPage;
