import React from 'react';
import { Typography, Box } from '@material-ui/core';

function TabPanel(props) {
   const { children, value, index, ...other } = props;

   return (
      <div role="tabpanel"
         hidden={value !== index}
         id={`scrollable-prevent-tabpanel-${index}`}
         aria-labelledby={`scrollable-prevent-tab-${index}`} >
         {props.children}
      </div>
   );
}

export default TabPanel;