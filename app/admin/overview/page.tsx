// import React from "react";

// const Overview = () => {
//   return (
//     <div className="container mx-auto">
//       <h1>Dashboard</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
//         <div className="border rounded-lg shadow-md p-4 bg-white flex flex-col justify-between">
//           <div>
//             <h2 className="text-lg font-bold mb-2">Total Revenue</h2>
//             <p className="text-gray-700">$490.21</p>
//           </div>
//           <div className="mt-4 text-sm text-gray-500">View revenue</div>
//         </div>
//         <div className="border rounded-lg shadow-md p-4 bg-white flex flex-col justify-between">
//           <div>
//             <h2 className="text-lg font-bold mb-2">Sales</h2>
//             <p className="text-gray-700">16</p>
//           </div>
//           <div className="mt-4 text-sm text-gray-500">View revenue</div>
//         </div>
//         <div className="border rounded-lg shadow-md p-4 bg-white flex flex-col justify-between">
//           <div>
//             <h2 className="text-lg font-bold mb-2">Customers</h2>
//             <p className="text-gray-700">15</p>
//           </div>
//           <div className="mt-4 text-sm text-gray-500">View revenue</div>
//         </div>
//         <div className="border rounded-lg shadow-md p-4 bg-white flex flex-col justify-between">
//           <div>
//             <h2 className="text-lg font-bold mb-2">Products</h2>
//             <p className="text-gray-700">24</p>
//           </div>
//           <div className="mt-4 text-sm text-gray-500">View revenue</div>
//         </div>
//       </div>
//       {/* Sales overview chart */}
//       <div className="border rounded-lg shadow-md p-4 bg-white flex flex-col justify-between">
//         <div>
//           <h2 className="text-lg font-bold mb-2">Sales Overview</h2>
//           <p className="text-gray-700">$490.21</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Overview;

import { Metadata } from "next";

import OverviewReport from "./overview-report";
export const metadata: Metadata = {
  title: "Admin Dashboard",
};
const DashboardPage = async () => {
  return <OverviewReport />;
};

export default DashboardPage;
