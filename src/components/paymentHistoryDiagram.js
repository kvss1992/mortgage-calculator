import React from "react";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
const data = [
  {
    name: "0",
    uv: 100000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "50",
    uv: 80000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "100",
    uv: 60000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "150",
    uv: 40000,
    pv: 3908,
    amt: 2000
  },
  {
    name: "200",
    uv: 20000,
    pv: 4800,
    amt: 2181
  },
  {
    name: "250",
    uv: 10000,
    pv: 3800,
    amt: 2500
  },
  {
    name: "300",
    uv: 0,
    pv: 4300,
    amt: 2100
  }
];


export default function PaymentHistoryDiagram() {
  return(
    <AreaChart
      width={500}
      height={400}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>  
  );
}