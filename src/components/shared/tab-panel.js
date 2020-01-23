import React from 'react';
import {Typography, Box} from '@material-ui/core';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
     <div hidden={value !== index}  id={`vertical-tabpanel-${index}`} aria-labelledby={`vertical-tab-${index}`}>
        {props.children}
     </div>
    );
  }

  export default TabPanel;