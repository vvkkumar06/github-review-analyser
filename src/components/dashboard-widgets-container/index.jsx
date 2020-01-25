import React, { Component } from 'react';
import { Grid, Paper, Tab, Tabs } from '@material-ui/core';

import Reviews from './../reviews-table';
import TotalReviewsPieChart from './../shared/total-reviews-pie-chart';
import ReviewsStatusBarChart from './../shared/reviews-status-bar-chart';
import ReviewsCounterContainer from './../reviews-counter-container';
import ReviewsTabs from './../reviews-tabs';

class DashboardWidgetContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }
    render() {
        const { reviews } = this.props;
        const { value } = this.state;
        return (
            <Grid container spacing={2} >
                <Grid item xs={12} sm={12} md={6}>
                    <TotalReviewsPieChart reviews={reviews} />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <ReviewsStatusBarChart reviews={reviews} />
                </Grid>
                <Grid item xs={12} style={{ margin: "50px" }}>
                    <Grid container spacing={3} >
                        <ReviewsCounterContainer reviews={reviews}/>
                    </Grid>
                </Grid>
                <Grid item xs="12" >
                    <ReviewsTabs reviews={reviews} />
                </Grid>
            </Grid>
        )
    }
}

export default DashboardWidgetContainer;