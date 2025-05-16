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

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const page = () => {
  return (
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
              <TableRow>
                <TableCell>
                  <Image
                    src={"/shoe.jpg"}
                    alt="product image"
                    width={200}
                    height={200}
                  />
                </TableCell>
                <TableCell>
                  <div className="flex flex-col gap-3">
                    <div>
                      <p className="text-lg">
                        Fossil Men&apos;s Grant Stainless Steel Quartz
                        Chronograph Watch
                      </p>
                    </div>
                    <div>
                      <p>
                        <span>Color: </span>
                        Blue
                      </p>
                      <p>
                        <span>Size: </span>
                      </p>
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
                  <p className="text-lg">3x$172.2</p>
                  <p className="text-lg font-semibold">$528</p>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Image
                    src={"/shoe.jpg"}
                    alt="product image"
                    width={200}
                    height={200}
                  />
                </TableCell>
                <TableCell>
                  <div className="flex flex-col gap-3">
                    <div>
                      <p className="text-lg">
                        Fossil Men&apos;s Grant Stainless Steel Quartz
                        Chronograph Watch
                      </p>
                    </div>
                    <div>
                      <p>
                        <span>Color: </span>
                        Blue
                      </p>
                      <p>
                        <span>Size: </span>
                      </p>
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
                  <p className="text-lg">3x$172.2</p>
                  <p className="text-lg font-semibold">$528</p>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Image
                    src={"/shoe.jpg"}
                    alt="product image"
                    width={200}
                    height={200}
                  />
                </TableCell>
                <TableCell>
                  <div className="flex flex-col gap-3">
                    <div>
                      <p className="text-lg">
                        Fossil Men&apos;s Grant Stainless Steel Quartz
                        Chronograph Watch
                      </p>
                    </div>
                    <div>
                      <p>
                        <span>Color: </span>
                        Blue
                      </p>
                      <p>
                        <span>Size: </span>
                      </p>
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
                  <p className="text-lg">3x$172.2</p>
                  <p className="text-lg font-semibold">$528</p>
                </TableCell>
              </TableRow>
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell className="text-right text-lg">
                  <span className="font-normal mr-2">Subtotal (2 items):</span>
                  $261.94
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
