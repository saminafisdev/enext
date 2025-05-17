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

const ProductCard = () => {
  const ProductImage = () => (
    <Link href={`/product/details`}>
      <div className="relative h-52">
        <Image
          src={"/shoe.jpg"}
          alt={"Product image"}
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
          <Link href={`/product/slug`}>Men Long sleeve shirt</Link>
          <div className="flex items-center justify-center">
            <Star fill="green" strokeWidth={0} />
            <Star fill="green" strokeWidth={0} />
            <Star fill="green" strokeWidth={0} />
          </div>
          <p>
            <sup>$</sup>
            <span className="font-semibold text-3xl">
              21<sup className="font-normal text-sm">12</sup>
            </span>
          </p>
        </CardContent>
        <CardFooter className="p-3">
          <Button className="rounded-full w-auto mx-auto">Add to cart</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductCard;
