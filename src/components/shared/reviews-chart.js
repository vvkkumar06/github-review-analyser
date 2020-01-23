import React from 'react';
import { Chart } from "react-google-charts";
import { Paper } from '@material-ui/core';

function ReviewsChart(props) {

 let reviewData = Object.keys(props.reviews).map(type => {
  return [type, props.reviews[type].length];
 });
 
 let pieChartData = [["Review Type", "No of Reviews"], ...reviewData];
 
 return (
  <Paper style={{padding: '20px'}}>
    <Chart
      width={'500px'}
      height={'300px'}
      chartType="PieChart"
      loader={<div>Loading Chart</div>}
      data={pieChartData}
      options={{
        title: 'Total Reviews',
        is3D: true
      }}
  />
  </Paper>
 );
}

export default ReviewsChart;