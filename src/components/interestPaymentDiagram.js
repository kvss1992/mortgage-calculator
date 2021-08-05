import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "Regular Payments",
    InterestPayment: 9800,
    PrincipalPayments: 2290
  }
];


export default function InterestPaymentDiagram() {
  return(
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="InterestPayment" stackId="a" fill="#8884d8" />
      <Bar dataKey="PrincipalPayments" stackId="a" fill="#82ca9d" />
    </BarChart>
  );
}