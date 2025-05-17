import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductCardProps {
  product: {
    _id: string;
    title: string;
    slug: string;
    images: string[];
    price: number;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const ProductImage = () => (
    <Link href={`/products/slug/?slug=${product.slug}`}>
      <div className="relative h-52">
        <Image
          src={product.images[0] || "/product_placeholder.png"} // Ensure placeholder is consistent
          alt={product.title || "Product image"} // Fallback for alt text
          fill
          sizes="80vw"
          className="object-contain"
        />
      </div>
    </Link>
  );

  return (
    <div>
      <Card className="flex flex-col">
        <CardHeader className="p-3">
          <ProductImage />
        </CardHeader>
        <CardContent className="p-3 flex-1 text-center">
          <Link href={`/products/slug/?slug=${product.slug}`}>
            {product.title || "Untitled Product"}
          </Link>{" "}
          {/* Fallback for title */}
          <div className="flex items-center justify-center">
            <Star fill="green" strokeWidth={0} />
            <Star fill="green" strokeWidth={0} />
            <Star fill="green" strokeWidth={0} />
          </div>
          <p>
            <sup>$</sup>
            <span className="font-semibold text-3xl">
              {product.price || 0}
            </span>{" "}
            {/* Fallback for price */}
          </p>
        </CardContent>
        <CardFooter className="p-3">
          <Button className="rounded-full w-auto mx-auto hover:cursor-pointer">
            Add to cart
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductCard;
