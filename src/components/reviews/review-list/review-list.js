import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionGetReviews } from './../../../actions/reviews'
import { Grid, AppBar, Tab, Tabs  } from '@material-ui/core';
import { Phone as PhoneIcon, Favorite as FavoriteIcon, PersonPin as PersonPinIcon } from '@material-ui/icons';
import Reviews from './../reviews/reviews';
import TabPanel from './../../shared/tab-panel';

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
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
      }
    render() {
        const { reviews } = this.props;
        const { value } = this.state;
        return (
            <Grid container spacing={2} style={{ display: 'flex', flexFlow: 'column wrap' }} >
                <Grid item xs={12}>
                <AppBar position="static">
                <h1 style={{textAlign: 'center'}}>Github Review Analyser</h1>
                <Tabs value={value} onChange={this.handleChange} aria-label="simple tabs example">
                    <Tab label="general" {...this.a11yProps(0)} />
                    <Tab label="doc" {...this.a11yProps(1)} />
                    <Tab label="standard" {...this.a11yProps(2)} />
                    <Tab label="logic" {...this.a11yProps(3)} />
                    <Tab label="style" {...this.a11yProps(4)} />
                    <Tab label="design" {...this.a11yProps(5)} />
                    <Tab label="test" {...this.a11yProps(6)} />
                    <Tab label="validation" {...this.a11yProps(7)} />
                    <Tab label="security" {...this.a11yProps(8)} />
                </Tabs>
                </AppBar>
                    <TabPanel value={value} index={0}>
                        <Reviews reviews={reviews} type='general'/>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Reviews reviews={reviews} type='doc' />
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <Reviews reviews={reviews} type='standard' />
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <Reviews reviews={reviews} type='logic' />
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                        <Reviews reviews={reviews} type='style' />
                    </TabPanel>
                    <TabPanel value={value} index={5}>
                        <Reviews reviews={reviews} type='design' />
                    </TabPanel>
                    <TabPanel value={value} index={6}>
                        <Reviews reviews={reviews} type='test' />
                    </TabPanel>
                    <TabPanel value={value} index={7}>
                        <Reviews reviews={reviews} type='validation' />
                    </TabPanel>
                    <TabPanel value={value} index={8}>
                        <Reviews reviews={reviews} type='security' />
                    </TabPanel>
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