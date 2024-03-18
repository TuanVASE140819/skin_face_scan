import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
const data = [
  { name: "Tháng 1", users: 400 },
  { name: "Tháng 2", users: 300 },
  { name: "Tháng 3", users: 200 },
  { name: "Tháng 4", users: 278 },
  { name: "Tháng 5", users: 189 },
  { name: "Tháng 6", users: 239 },
  { name: "Tháng 7", users: 349 },
  { name: "Tháng 8", users: 200 },
  { name: "Tháng 9", users: 278 },
  { name: "Tháng 10", users: 189 },
  { name: "Tháng 11", users: 239 },
  { name: "Tháng 12", users: 600 },
];
const Chart = () => {
  return (
    <section className="container mx-auto flex">
      <div className="w-1/2">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="users"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </div>
      <div className="w-1/2">{/* Insert your text list here */}</div>
    </section>
  );
};

export default Chart;
