import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionGetReviews } from './../../../actions/reviews'
import { Grid, AppBar, Paper, Tab, Tabs } from '@material-ui/core';
import Reviews from './../reviews/reviews';
import TabPanel from './../../shared/tab-panel';
import ReviewsChart from '../../shared/reviews-chart';
import ReviewsStatusChart from '../../shared/reviews-status-chart';
import ReviewCount from '../../shared/review-count';

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

    a11yProps = (index) => {
        return {
            id: `vertical-tab-${index}`,
            'aria-controls': `vertical-tabpanel-${index}`
        };
      }
    render() {
        const { reviews } = this.props;
        const { value } = this.state;
        return (
            <Grid container spacing={2} >
                 <Grid item xs={6}>
                    <ReviewsChart reviews={reviews}/>
                </Grid>
                <Grid item xs={6}>
                    <ReviewsStatusChart reviews={reviews}/>
                </Grid>
                <Grid item xs={12} style={{margin: "50px"}}>
                        <Grid container spacing={3} >
                            <Grid container xs={3} justify="center">
                                <ReviewCount type="general" count={reviews['general'] && reviews['general'].length} />
                            </Grid>
                            <Grid container xs={3} justify="center">
                                <ReviewCount type="standard" count={reviews['standard'] && reviews['standard'].length} />
                            </Grid>
                            <Grid container xs={3} justify="center">
                                <ReviewCount type="doc" count={reviews['doc'] && reviews['doc'].length} />
                            </Grid>
                            <Grid container xs={3} justify="center">
                                <ReviewCount type="logic" count={reviews['logic'] && reviews['logic'].length} />
                            </Grid>
                        </Grid>
                </Grid>
                <Grid item xs="12">
                    <Paper>
                        <Grid container spacing={2}>
                            <Grid item xs="3" xm="3" md="2" lg="2">
                                <AppBar position="static">
                                    <Tabs value={value} orientation="vertical" variant="scrollable" onChange={this.handleChange}>
                                        <Tab label="general" {...this.a11yProps(0)} />
                                        <Tab label="standard" {...this.a11yProps(1)} />
                                        <Tab label="doc" {...this.a11yProps(2)} />
                                        <Tab label="logic" {...this.a11yProps(3)} />
                                        <Tab label="style" {...this.a11yProps(4)} />
                                        <Tab label="design" {...this.a11yProps(5)} />
                                        <Tab label="validation" {...this.a11yProps(6)} />
                                        <Tab label="security" {...this.a11yProps(7)} />
                                    </Tabs>
                                </AppBar>
                            </Grid>
                            <Grid item xs="9" xm="9" md="10" lg="10">
                                <Paper>

                                    <TabPanel value={value} index={0}>
                                        <Reviews reviews={reviews} type='general' rowsPerPage='5' />
                                    </TabPanel>
                                    <TabPanel value={value} index={1}>
                                        <Reviews reviews={reviews} type='standard' rowsPerPage='5' />
                                    </TabPanel>
                                    <TabPanel value={value} index={2}>
                                        <Reviews reviews={reviews} type='doc' rowsPerPage='5' />
                                    </TabPanel>
                                    <TabPanel value={value} index={3}>
                                        <Reviews reviews={reviews} type='logic' rowsPerPage='5' />
                                    </TabPanel>
                                    <TabPanel value={value} index={4}>
                                        <Reviews reviews={reviews} type='style' rowsPerPage='5' />
                                    </TabPanel>
                                    <TabPanel value={value} index={5}>
                                        <Reviews reviews={reviews} type='design' rowsPerPage='5' />
                                    </TabPanel>
                                    <TabPanel value={value} index={6}>
                                        <Reviews reviews={reviews} type='validation' rowsPerPage='5' />
                                    </TabPanel>
                                    <TabPanel value={value} index={7}>
                                        <Reviews reviews={reviews} type='security' rowsPerPage='5' />
                                    </TabPanel>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Paper>
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