'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  LabelList
} from "recharts";

const data = [
  { name: "May Ongoing", value: 85.08 },
  { name: "April", value: 15351.21 },
  { name: "March", value: 45110.06 },
  { name: "February", value: 5274.44 },
  { name: "January", value: 9274.16 },
  { name: "December", value: 19385.99 },
];

export default function ProductPerformance() {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 20, right: 60, left: 80, bottom: 0 }}
          barSize={15}
        >
          <XAxis type="number" hide />
          <YAxis
            type="category"
            dataKey="name"
            tick={{ fontSize: 14 }}
            axisLine={false}
            tickLine={false}
          />
          <Bar
            dataKey="value"
            fill="#FFD700"
            radius={[10, 10, 10, 10]}
          >
            <LabelList
              dataKey="value"
              position="right"
              formatter={(val: number) =>
                `$${val.toLocaleString(undefined, { minimumFractionDigits: 2 })}`
              }
              style={{ fill: "#000", fontSize: 14 }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
