import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import "./pieChaart.css"; // Import the CSS file

const colors = [
  "#FF6347", // Tomato
  "#4682B4", // SteelBlue
  "#32CD32", // LimeGreen
  "#FFD700", // Gold
  "#FF4500", // OrangeRed
  "#6A5ACD", // SlateBlue
  "#00FA9A", // MediumSpringGreen
  "#FF1493", // DeepPink
];

export default function BasicPie() {
  return (
    <div className="proD_pie-chart-container">
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 10, label: "Activity 1", color: colors[0] },
              { id: 1, value: 15, label: "Activity 2", color: colors[1] },
              { id: 2, value: 15, label: "Activity 2", color: colors[2] },
              { id: 3, value: 15, label: "Activity 3", color: colors[3] },
            ],
          },
        ]}
        width={500}
        height={200}
        sx={{ zIndex: "1" }}
        label={{
          position: "outside", // Place labels outside the pie slices
          style: {
            fontSize: "5px", // Set the font size smaller
            textOverflow: "ellipsis", // Handle long labels
          },
        }}
      />
    </div>
  );
}
