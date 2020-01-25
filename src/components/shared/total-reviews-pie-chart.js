import React from 'react';
import { Chart } from "react-google-charts";
import { Paper } from '@material-ui/core';
import { Slide } from 'react-reveal';
import RubberBand from 'react-reveal/RubberBand';

function TotalReviewsPieChart(props) {

  let reviewData = Object.keys(props.reviews).map(type => {
    return [type.toUpperCase(), props.reviews[type].length];
  });

  let pieChartData = [["Review Type", "No of Reviews"], ...reviewData];

  return (
    <Slide left>
      <Paper style={{ padding: '20px' }}>
        <RubberBand>
          <Chart
            height={'300px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={pieChartData}
            options={{
              title: 'Total Reviews',
              is3D: true
            }}
          />
        </RubberBand>
      </Paper>
    </Slide>
  );
}

export default TotalReviewsPieChart;