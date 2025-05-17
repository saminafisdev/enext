import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const ProductDetails = () => {
  return (
    <div>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-5">
          <div className="col-span-2">
            <Image
              className="object-scale-down w-full h-auto"
              src={"/shoe.jpg"}
              alt="Product image"
              width={500}
              height={500}
            />
          </div>

          <div className="flex w-full flex-col gap-2 md:p-5 col-span-2">
            <div className="flex flex-col gap-3">
              <p className="text-md rounded-full bg-grey-500/10  text-grey-500">
                Brand Nike T-shirts
              </p>
              <h1 className="font-bold text-lg lg:text-xl">Tshirt for men</h1>

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
                  <p>$21.33</p>
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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
                voluptas sit necessitatibus libero aut beatae consequatur
                deleniti ratione, magnam excepturi!
              </p>
              <Button className="mt-4 rounded-full hover:cursor-pointer">
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
