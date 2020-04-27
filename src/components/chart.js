import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "HTML",
    today: 9,
    goal: 1,
  },
  {
    name: "CSS",
    today: 8,
    goal: 2,
  },
  {
    name: "JS",
    today: 8,
    goal: 2,
  },
  {
    name: "TypeScript",
    today: 6,
    goal: 3,
  },
  {
    name: "JQuery",
    today: 7,
    goal: 0,
  },
  {
    name: "React",
    today: 7,
    goal: 3,
  },
  {
    name: "Express",
    today: 4,
    goal: 6,
  },
  {
    name: "Flutter",
    today: 6,
    goal: 2,
  },
  {
    name: "MongoDB",
    today: 2,
    goal: 8,
  },
];

export default class Example extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width={"100%"} height={"75%"}>
        <BarChart
          width={1100}
          height={550}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" style={{ fontSize: "0.9rem" }} />
          <YAxis type="number" domain={[0, "dataMax"]} />
          <Tooltip />
          <Legend />
          <Bar dataKey="today" stackId="a" fill="#17252A" />
          <Bar dataKey="goal" stackId="a" fill="#2B7A78" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
