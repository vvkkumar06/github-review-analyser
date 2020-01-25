import React from 'react';
import {Paper, Typography} from '@material-ui/core';

function ReviewCount(props) {
 const {type, reviews} = props;
 const count = reviews[type] && reviews[type].length;
 return (
  <Paper elevation={3} style={{width:"200px", height: "80px", position: "relative"}}>
    <Paper elevation={3} style={{width: "80px", height: "80px", position: "absolute", left: "10px", top: "-25px", background: "linear-gradient(60deg, #ef5350, #e53935)", color: "#eee"}}>
       <Typography variant="h2" style={{textAlign: "center"}}>
         {count}
       </Typography>
    </Paper>
    <Typography variant="subtitle2" style={{paddingTop: "20px", paddingRight: "20px", textAlign: "right"}}>
         {type.toUpperCase()}
     </Typography>
  </Paper>
 );
}

export default ReviewCount;