import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import React from "react";

const page = () => {
  return (
    <div className="container">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Shopping Cart</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead></TableHead>
                <TableHead></TableHead>
                <TableHead>Price</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell> Image </TableCell>
                <TableCell>
                  <div className="flex flex-col gap-3">
                    <div>
                      <p className="text-lg">
                        Fossil Men's Grant Stainless Steel Quartz Chronograph
                        Watch
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
                    <div>
                      <button>Quantity: 3</button>
                      <button>Delete</button>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <p className="text-lg">3x$172.2</p>
                  <p className="text-lg font-semibold">$528</p>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell>
                  <div className="flex flex-col gap-3">
                    <div>
                      <p className="text-lg">
                        Fossil Men's Grant Stainless Steel Quartz Chronograph
                        Watch
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
                    <div>
                      <button>Quantity: 3</button>
                      <button>Delete</button>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <p className="text-lg">3x$172.2</p>
                  <p className="text-lg font-semibold">$528</p>
                </TableCell>
              </TableRow>
            </TableBody>
            <TableFooter>
              <p>
                Subtotal (4 items):{" "}
                <span className="font-semibold">$912.2</span>
              </p>
            </TableFooter>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
