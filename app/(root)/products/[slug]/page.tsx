import AddToCartBtn from "@/components/shared/product/AddToCartBtn";
import { Separator } from "@/components/ui/separator";
import { getProductDetails } from "@/lib/api";
import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

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

interface PageProps {
  searchParams: Promise<{ slug: string }>;
}

const ProductDetails = async ({ searchParams }: PageProps) => {
  const params = await searchParams;
  const slug = params.slug;
  const { data: product }: { data: Product } = await getProductDetails(slug);

  console.log(product.images[0]);

  return (
    <div>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-5">
          <div className="col-span-2">
            <Image
              className="object-scale-down w-full h-auto"
              src={product.images[0] || "/product_placeholder.png"}
              alt="Product image"
              width={500}
              height={500}
            />
          </div>

          <div className="flex w-full flex-col gap-2 md:p-5 col-span-2">
            <div className="flex flex-col gap-3">
              <p className="text-md rounded-full bg-grey-500/10  text-grey-500">
                {product?.category[0] || "No category"}
              </p>
              <h1 className="font-bold text-lg lg:text-xl">{product?.title}</h1>

              <div className="flex items-center">
                <Star fill="green" strokeWidth={0} />
                <Star fill="green" strokeWidth={0} />
                <Star fill="green" strokeWidth={0} />
                <Star fill="green" strokeWidth={0} />
                <Star fill="green" strokeWidth={0} />
              </div>
              <Separator />
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex gap-3">
                  <p>${product.price}</p>
                </div>
              </div>
            </div>
            {/* <div>
              <SelectVariant
                product={product}
                size={size || product.sizes[0]}
                color={color || product.colors[0]}
              />
            </div> */}
            <Separator className="my-2" />
            <div className="flex flex-col gap-2">
              <p className="p-bold-20 text-grey-600">Product Description</p>
              <p className="p-medium-16 lg:p-regular-18">
                {product.description || "No description available"}
              </p>
              <AddToCartBtn stock={product.currentStock} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
