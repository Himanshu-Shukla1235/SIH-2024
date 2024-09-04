import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import './sinkGap.css'; // Import the CSS file for media queries

const uData = [40, 30, 20, 27, 18, 23, 34, 50, 26, 30, 20, 40]; // Data within 1-100 range
const xLabels = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

export default function SimpleLineChart() {
  return (
    <div className="proD_line-chart-container">
      <LineChart
        width={400} // Adjusted width
        height={250} // Adjusted height
        series={[
          {
            data: uData,
            label: 'uv',
            color: '#FF6347', // Set your desired color here (e.g., Tomato)
          },
        ]}
        xAxis={[{ scaleType: 'point', data: xLabels }]}
        yAxis={[
          {
            scaleType: 'linear',
            min: 1,
            max: 100,
            tickCount: 10, // 10 ticks from 1 to 100
          },
        ]}
      />
    </div>
  );
}
