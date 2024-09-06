import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import "./Activity_1_graph2.css"; // Import the CSS file

export default function MultiLineChart() {
  return (
    <div className="chart-container">
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
            label: "Series 1",
            color: "blue",
          },
          {
            data: [3, 4, 6, 7, 2, 9],
            label: "Series 2",
            color: "green",
          },
          {
            data: [1, 3, 4.5, 5, 3.5, 4],
            label: "Series 3",
            color: "red",
          },
        ]}
        width={500}
        height={300}
      />
    </div>
  );
}
