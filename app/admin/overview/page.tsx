import React from "react";
import SalesAreaChart from "./sales-area-chart";
import TableChart from "./table-chart";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SalesCategoryPieChart from "./sales-category-pie-chart";
import ProductPerformance from "./product-performance";
import EarningsChart from "./earning";

const Overview = () => {
  return (
    <div className="container mx-auto">
      <h1>Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        <div className="border rounded-lg shadow-md p-4 bg-white flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-bold mb-2">Total Revenue</h2>
            <p className="text-gray-700">$490.21</p>
          </div>
          <div className="mt-4 text-sm text-gray-500">View revenue</div>
        </div>
        <div className="border rounded-lg shadow-md p-4 bg-white flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-bold mb-2">Sales</h2>
            <p className="text-gray-700">16</p>
          </div>
          <div className="mt-4 text-sm text-gray-500">View revenue</div>
        </div>
        <div className="border rounded-lg shadow-md p-4 bg-white flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-bold mb-2">Customers</h2>
            <p className="text-gray-700">15</p>
          </div>
          <div className="mt-4 text-sm text-gray-500">View revenue</div>
        </div>
        <div className="border rounded-lg shadow-md p-4 bg-white flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-bold mb-2">Products</h2>
            <p className="text-gray-700">24</p>
          </div>
          <div className="mt-4 text-sm text-gray-500">View revenue</div>
        </div>
      </div>
      {/* Sales overview chart */}
      <div className="border rounded-lg shadow-md p-4 bg-white flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-bold mb-2">Sales Overview</h2>
          <SalesAreaChart />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {/* Best-Selling Categories */}
        <Card className="mt-5">
          <CardHeader>
            <CardTitle>How much you’re earning</CardTitle>
            <CardDescription>Estimated · Last 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <EarningsChart />
          </CardContent>
        </Card>
        <Card className="mt-5">
          <CardHeader>
            <CardTitle>Product performance</CardTitle>
            <CardDescription>Apr 13, 2025 to May 13, 2025</CardDescription>
          </CardHeader>
          <CardContent>
            <ProductPerformance />
          </CardContent>
        </Card>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {/* Best-Selling Categories */}
        <Card className="mt-5">
          <CardHeader>
            <CardTitle>Best-Selling Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <SalesCategoryPieChart />
          </CardContent>
        </Card>
        {/* Recent Sales */}
        <TableChart />
      </div>
    </div>
  );
};

export default Overview;
