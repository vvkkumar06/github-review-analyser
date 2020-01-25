import React from 'react';
import Constants from './../../utils/constants';
import ReviewCount from './../shared/review-count';
import { Grid, Paper } from '@material-ui/core';

function ReviewsCounterContainer({ reviews }) {
    return (
        <Paper style={{ width: '100%' }}>
            <Grid container spacing={3}>
                {Constants.REVIEW_TYPES.map((type, index) => (
                    <Grid container xs={3} justify="center" key={index} >
                        <ReviewCount type={type} reviews={reviews} />
                    </Grid>
                ))}
            </Grid>
        </Paper>
    );
}

export default ReviewsCounterContainer;