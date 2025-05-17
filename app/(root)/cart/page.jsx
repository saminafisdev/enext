"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ProtectRoute from "@/components/ProtectRoute";

const page = () => {
  const [cart, setCart] = React.useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/carts`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const { data } = await res.json();
      setCart(data);
    };

    fetchCart();
  }, []);

  return (
    <ProtectRoute>
      <div className="container mx-auto py-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">Shopping Cart</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead></TableHead>
                  <TableHead></TableHead>
                  <TableHead className="text-right">Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cart.map((item) => (
                  <TableRow key={item._id}>
                    <TableCell>
                      <Image
                        src={item?.productId?.images[0]}
                        alt="product image"
                        width={200}
                        height={200}
                      />
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col gap-3">
                        <div>
                          <p className="text-lg">{item?.productId?.title}</p>
                        </div>
                        <div className="flex gap-2">
                          <Select>
                            <SelectTrigger className="text-black data-[placeholder]:text-black">
                              <SelectValue placeholder="Size" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="light">Light</SelectItem>
                              <SelectItem value="dark">Dark</SelectItem>
                              <SelectItem value="system">System</SelectItem>
                            </SelectContent>
                          </Select>
                          <Button variant="outline">Delete</Button>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <p className="text-lg">
                        {item?.quantity}x${item?.productId?.price}
                      </p>
                      <p className="text-lg font-semibold">$528</p>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell className="text-right text-lg">
                    <span className="font-normal mr-2">
                      Subtotal (2 items):
                    </span>
                    $261.94
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </CardContent>
        </Card>
      </div>
    </ProtectRoute>
  );
};

export default page;
