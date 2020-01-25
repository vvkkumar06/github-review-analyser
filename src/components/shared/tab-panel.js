import React from 'react';

function TabPanel({ children, value, index }) {

    return (
     <div hidden={value !== index}  id={`vertical-tabpanel-${index}`} aria-labelledby={`vertical-tab-${index}`}>
        {children}
     </div>
    );
  }

export default TabPanel;