import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionGetReviews } from './../../../actions/reviews'
import { Grid, Paper, Tab, Tabs } from '@material-ui/core';
import { Phone as PhoneIcon, Favorite as FavoriteIcon, PersonPin as PersonPinIcon } from '@material-ui/icons';
import Reviews from './../reviews/reviews';


class ReviewList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }
    componentDidMount() {
        this.props.actionGetReviews();
    }
    handleChange = (event, newValue) => {
        this.setState({ value: newValue });
    };
    render() {
        const { reviews } = this.props;
        const { value } = this.state;
        return (
            <Grid container spacing={2} style={{ display: 'flex', flexFlow: 'column wrap' }} >
                <Grid item xs={12}>
                    <Paper square>
                        <Tabs
                            value={value}
                            onChange={this.handleChange}
                            variant="fullWidth"
                            indicatorColor="secondary"
                            textColor="secondary"
                            aria-label="icon label tabs example"
                        >
                            <Tab icon={PhoneIcon} label="RECENTS" />
                            <Tab icon={PhoneIcon} label="FAVORITES" />
                            <Tab icon={PhoneIcon} label="NEARBY" />
                        </Tabs>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Reviews reviews={reviews} type='general' rowsPerPage='5' />
                </Grid>
                <Grid item xs={6}>
                    <Reviews reviews={reviews} type='doc' rowsPerPage='5' />
                </Grid>
                <Grid item xs={6}>
                    <Reviews reviews={reviews} type='standard' rowsPerPage='5' />
                </Grid>
                <Grid item xs={6}>
                    <Reviews reviews={reviews} type='logic' rowsPerPage='5' />
                </Grid>
                <Grid item xs={6}>
                    <Reviews reviews={reviews} type='style' rowsPerPage='5' />
                </Grid>
                <Grid item xs={6}>
                    <Reviews reviews={reviews} type='design' rowsPerPage='5' />
                </Grid>
                <Grid item xs={6}>
                    <Reviews reviews={reviews} type='test' rowsPerPage='5' />
                </Grid>
                <Grid item xs={6}>
                    <Reviews reviews={reviews} type='validation' rowsPerPage='5' />
                </Grid>
                <Grid item xs={6}>
                    <Reviews reviews={reviews} type='security' rowsPerPage='5' />
                </Grid>
            </Grid>
        )
    }
}

const mapStateToProps = state => {
    return {
        reviews: state.reviews
    }
}


export default connect(mapStateToProps, { actionGetReviews })(ReviewList);