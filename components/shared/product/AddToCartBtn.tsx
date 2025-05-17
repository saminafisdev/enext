import { Button } from "@/components/ui/button";
import React from "react";

const AddToCartBtn = ({ stock }: { stock: number }) => {
  return (
    <Button className="mt-4 rounded-full hover:cursor-pointer">
      {stock > 0 ? "Add to Cart" : "Out of Stock"}
    </Button>
  );
};

export default AddToCartBtn;
