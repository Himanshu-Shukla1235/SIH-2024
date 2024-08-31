import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import './graph2.css'; // Import the CSS file

const colors = [
  '#FF6347', // Tomato
  '#4682B4', // SteelBlue
  '#32CD32', // LimeGreen
  '#FFD700', // Gold
  '#FF4500', // OrangeRed
  '#6A5ACD', // SlateBlue
  '#00FA9A', // MediumSpringGreen
  '#FF1493', // DeepPink
];

export default function BasicPie() {
  return (
    <div className="pie-chart-container">
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 10, label: 'Electricity', color: colors[0] },
              { id: 1, value: 15, label: 'Coal', color: colors[1] },
              { id: 2, value: 15, label: 'Petrol', color: colors[2] },
              { id: 3, value: 15, label: 'Diesel', color: colors[3] },
              { id: 4, value: 10, label: 'Natural Gas', color: colors[4] },
              { id: 5, value: 8, label: 'Biomass', color: colors[5] },
              { id: 6, value: 12, label: 'Nuclear', color: colors[6] },
              { id: 7, value: 5, label: 'Hydro', color: colors[7] },
            ],
          },
        ]}
        width={700}
        height={200}
        sx={{ zIndex: '1' }}
        label={{
          position: 'outside', // Place labels outside the pie slices
          style: {
            fontSize: '5px', // Set the font size smaller
            textOverflow: 'ellipsis', // Handle long labels
          },
        }}
      />
    </div>
  );
}
