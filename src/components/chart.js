import React, { PureComponent } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

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
    name: "JavaScript",
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
  {
    name: "Piano",
    today: 8,
    goal: 1,
  },
  {
    name: "Floorball",
    today: 7,
    goal: 0,
  },
  {
    name: "Rubik´s Cube",
    today: 8,
    goal: 2,
  },
];

export default class Example extends PureComponent {
  render() {
    return (
      <BarChart
        width={1300}
        height={700}
        data={data}
        margin={{
          top: 100,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis type="number" domain={[0, "dataMax"]} />
        <Tooltip />
        <Legend />
        <Bar dataKey="today" stackId="a" fill="#17252A" />
        <Bar dataKey="goal" stackId="a" fill="#2B7A78" />
      </BarChart>
    );
  }
}
