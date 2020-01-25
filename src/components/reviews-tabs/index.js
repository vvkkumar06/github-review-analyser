import React,{ useState } from 'react';
import { Grid, Paper, Tabs, Tab } from '@material-ui/core';

import Constants from './../../utils/constants';
import TabPanel from './../shared/tab-panel';
import ReviewsTable from './../reviews-table';


function ReviewsTabs({reviews}) {
    const reviewTypes = Constants.REVIEW_TYPES;
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    const a11yProps = (index) => {
        return {
            id: `vertical-tab-${index}`,
            'aria-controls': `vertical-tabpanel-${index}`
        };
    }
    return (
        <Paper>
            <Grid container spacing={2} >
                <Grid item xs="3" xm="3" md="2" lg="2">
                    <Tabs value={value} orientation="vertical" variant="scrollable" onChange={handleChange} >
                        {
                            reviewTypes.map((type, index) => (
                                <Tab label={type} {...a11yProps(index)} key={index} />
                            ))
                        }
                    </Tabs>
                </Grid>
                <Grid item xs="9" xm="9" md="10" lg="10">
                    {
                        reviewTypes.map((type, index) => (
                            <TabPanel value={value} index={index} key={index}>
                                <ReviewsTable reviews={reviews} type={type} rowsPerPage='5' />
                            </TabPanel>
                        ))
                    }
                </Grid>
            </Grid>
        </Paper>
    );
}

export default ReviewsTabs;