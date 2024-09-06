import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import './sinkGap.css'; // Import the CSS file for media queries

// Data for multiple lines
const data1 = [40, 30, 20, 27, 18, 23, 34, 50, 26, 30, 20, 40];
const data2 = [35, 25, 30, 40, 22, 29, 45, 55, 30, 35, 25, 45];
const data3 = [30, 20, 25, 35, 28, 32, 40, 48, 28, 33, 22, 38];

// Labels for the x-axis
const xLabels = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

export default function SimpleLineChart() {
  return (
    <div className="proD_line-chart-container">
      <LineChart
        width={600} // Adjusted width for multiple lines
        height={300} // Adjusted height for multiple lines
        series={[
          {
            data: data1,
            label: 'Dataset 1',
            color: '#FF6347', // Tomato color
          },
          {
            data: data2,
            label: 'Dataset 2',
            color: '#4682B4', // SteelBlue color
          },
          {
            data: data3,
            label: 'Dataset 3',
            color: '#32CD32', // LimeGreen color
          },
        ]}
        xAxis={[{ scaleType: 'point', data: xLabels }]}
        yAxis={[
          {
            scaleType: 'linear',
            min: 0, // Adjusted min value to 0 for better visualization
            max: 60, // Adjusted max value to accommodate all data ranges
            tickCount: 7, // Adjusted ticks for the new range
          },
        ]}
      />
    </div>
  );
}
