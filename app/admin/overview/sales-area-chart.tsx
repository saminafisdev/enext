'use client'

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis,
} from 'recharts'


export default function SalesAreaChart() {
    const data = [
  { date: '2025-05-01', totalSales: 500 },
  { date: '2025-05-02', totalSales: 700 },
  { date: '2025-05-03', totalSales: 600 },
  { date: '2025-05-04', totalSales: 800 },
  { date: '2025-05-05', totalSales: 900 },
  { date: '2025-05-06', totalSales: 750 },
  { date: '2025-05-07', totalSales: 850 },
];

  return (
    <ResponsiveContainer width='100%' height={400}>
      <AreaChart data={data}>
        <CartesianGrid horizontal={true} vertical={false} stroke='#ccc' />
        <XAxis dataKey='totalSales' interval={3} />
        <YAxis fontSize={12} />
        <Tooltip formatter={(value: number) => `$${value}`} />
        <Area
          type='monotone'
          dataKey='totalSales'
          stroke="blue"
          strokeWidth={2}
          fill='lightblue'
          fillOpacity={0.8}
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}