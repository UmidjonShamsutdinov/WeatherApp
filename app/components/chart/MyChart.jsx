// Import necessary modules and styles
import React from 'react';
import ReactApexChart from 'react-apexcharts';
import 'apexcharts';

// Define the functional component
const MyChart = ({time, degree, degree1}) => {
  // Chart options and series data

  var options = {
    chart: {
      type: 'area'
    },
    series: [{
      name: 'degree',
      data: degree
    }],
    xaxis: {
      categories: time
    }
  }

  // Return the component with the chart
  return (
    <div>
      <ReactApexChart options={options} series={options.series} type="area" height={350} />
    </div>
  );
};

// Export the component
export default MyChart;