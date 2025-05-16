import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div className="md:p-4 md:space-y-4 bg-border">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-4">
        {/* Explore categories */}
        <Card className="rounded-none flex flex-col">
          <CardHeader>
            <CardTitle>Categories to explore</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2">
            <Link href="">
              <Image
                src={"/shoe.jpg"}
                alt="product image"
                className="aspect-square object-scale-down max-w-full h-auto mx-auto"
                width={120}
                height={120}
              />
              <p className="text-center">Jeans</p>
            </Link>
            <Link href="">
              <Image
                src={"/shoe.jpg"}
                alt="product image"
                className="aspect-square object-scale-down max-w-full h-auto mx-auto"
                width={120}
                height={120}
              />
              <p className="text-center">Jeans</p>
            </Link>
            <Link href="">
              <Image
                src={"/shoe.jpg"}
                alt="product image"
                className="aspect-square object-scale-down max-w-full h-auto mx-auto"
                width={120}
                height={120}
              />
              <p className="text-center whitespace-nowrap overflow-hidden text-ellipsis">
                Jeans
              </p>
            </Link>
          </CardContent>
          <CardFooter>
            <Link href={"/categories"} className="mt-4 block">
              See More
            </Link>
          </CardFooter>
        </Card>

        {/* New arrivals */}
        <Card className="rounded-none flex flex-col">
          <CardHeader>
            <CardTitle>Explore New Arrivals</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2">
            <Link href="">
              <Image
                src={"/shoe.jpg"}
                alt="product image"
                className="aspect-square object-scale-down max-w-full h-auto mx-auto"
                width={120}
                height={120}
              />
              <p className="text-center">Jeans</p>
            </Link>
            <Link href="">
              <Image
                src={"/shoe.jpg"}
                alt="product image"
                className="aspect-square object-scale-down max-w-full h-auto mx-auto"
                width={120}
                height={120}
              />
              <p className="text-center">Jeans</p>
            </Link>
            <Link href="">
              <Image
                src={"/shoe.jpg"}
                alt="product image"
                className="aspect-square object-scale-down max-w-full h-auto mx-auto"
                width={120}
                height={120}
              />
              <p className="text-center whitespace-nowrap overflow-hidden text-ellipsis">
                Jeans
              </p>
            </Link>
          </CardContent>
          <CardFooter>
            <Link href={"/categories"} className="mt-4 block">
              See More
            </Link>
          </CardFooter>
        </Card>

        {/* Best sellers */}
        <Card className="rounded-none flex flex-col">
          <CardHeader>
            <CardTitle>Discover Best Sellers</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2">
            <Link href="">
              <Image
                src={"/shoe.jpg"}
                alt="product image"
                className="aspect-square object-scale-down max-w-full h-auto mx-auto"
                width={120}
                height={120}
              />
              <p className="text-center">Jeans</p>
            </Link>
            <Link href="">
              <Image
                src={"/shoe.jpg"}
                alt="product image"
                className="aspect-square object-scale-down max-w-full h-auto mx-auto"
                width={120}
                height={120}
              />
              <p className="text-center">Jeans</p>
            </Link>
            <Link href="">
              <Image
                src={"/shoe.jpg"}
                alt="product image"
                className="aspect-square object-scale-down max-w-full h-auto mx-auto"
                width={120}
                height={120}
              />
              <p className="text-center whitespace-nowrap overflow-hidden text-ellipsis">
                Jeans
              </p>
            </Link>
          </CardContent>
          <CardFooter>
            <Link href={"/categories"} className="mt-4 block">
              See More
            </Link>
          </CardFooter>
        </Card>

        {/* Featured Products */}
        <Card className="rounded-none flex flex-col">
          <CardHeader>
            <CardTitle>Featured Products</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2">
            <Link href="">
              <Image
                src={"/shoe.jpg"}
                alt="product image"
                className="aspect-square object-scale-down max-w-full h-auto mx-auto"
                width={120}
                height={120}
              />
              <p className="text-center">Jeans</p>
            </Link>
            <Link href="">
              <Image
                src={"/shoe.jpg"}
                alt="product image"
                className="aspect-square object-scale-down max-w-full h-auto mx-auto"
                width={120}
                height={120}
              />
              <p className="text-center">Jeans</p>
            </Link>
            <Link href="">
              <Image
                src={"/shoe.jpg"}
                alt="product image"
                className="aspect-square object-scale-down max-w-full h-auto mx-auto"
                width={120}
                height={120}
              />
              <p className="text-center whitespace-nowrap overflow-hidden text-ellipsis">
                Jeans
              </p>
            </Link>
          </CardContent>
          <CardFooter>
            <Link href={"/categories"} className="mt-4 block">
              See More
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
