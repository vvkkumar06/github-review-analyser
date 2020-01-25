import React from 'react';
import Constants from './../../utils/constants';
import ReviewCount from './../shared/review-count';
import {Grid} from '@material-ui/core';

function ReviewsCounterContainer({ reviews }) {
    return (
        Constants.REVIEW_TYPES.map((type, index) => (
            <Grid container xs={3} justify="center" key={index}>
                <ReviewCount type={type} reviews={reviews} />
            </Grid>
        ))
    );
}

export default ReviewsCounterContainer;