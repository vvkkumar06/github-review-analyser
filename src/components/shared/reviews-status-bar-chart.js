import React from 'react';
import { Chart } from "react-google-charts";
import { Paper } from '@material-ui/core';
import { Slide } from 'react-reveal';


function ReviewsStatusBarChart(props) {
  let resolvedReviews = Object.keys(props.reviews).map(type => {
    return [type.toUpperCase(), props.reviews[type].length, props.reviews[type].filter(review => {
      return review.commit_id !== review.original_commit_id;
    }).length];
  });

  let barChartData = [['Review Type', 'Total Reviews', 'Resolved'], ...resolvedReviews];
  return (
    <Slide right>
      <Paper style={{ padding: "20px" }}>
        <Chart
          width={'100%'}
          height={'300px'}
          chartType="ColumnChart"
          loader={<div>Loading Chart</div>}
          data={barChartData}
          options={{
            chart: {
              title: 'Reviews Status',
              subtitle: 'Total Reviews vs Resolved Reviews',
            },
            colors: ['#d21', '#5a1']
          }}
        />
      </Paper>
    </Slide>
  );
}

export default ReviewsStatusBarChart;