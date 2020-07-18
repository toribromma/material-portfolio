import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import profile from "../images/profile1.jpg"
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.primary
  },
}));


function Home() {

  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <hr></hr>
      <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      >
        <Grid item xs={12} sm={9}>
          <Paper 
          className={classes.paper}
          elevation={0}
          >
            <h2>
              A nerdy dude with a passion, TRULY, a renaissance man!
            </h2>
            <p>
              I enjoy the outdoors, picnicing, playing guitar, and most of all: coding!
            </p>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper elevation={0} className={classes.paper}>
            <img width={325} height={300} src={profile}/>
            <h4>Contact Info:</h4>
            </Paper>
        

        </Grid>
      
      </Grid>
    </div>
  );
}

export default Home;
