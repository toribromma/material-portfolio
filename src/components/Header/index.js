import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Grid} from "@material-ui/core"
var ReactRotatingText = require('react-rotating-text');

const useStyles = makeStyles((theme) => ({
    header: {
        textAlign: "center",
        marginTop: "100px",
        // backgroundColor: "black"
    },
    heading: {
      fontFamily: "Pacifico",
    },
    paper: {
      backgroundColor: "#D0D4BA",
      borderRadius: "10px",
      padding: 18
    }

  }));


function Header() {
      const classes = useStyles();
    return (
            <header className={classes.header}>

                <Grid container>
                  <Grid item xs={3}>

                  </Grid>
                  <Grid item xs={6}>
                  <Paper className={classes.paper}>
                  <h1> 
                  <ReactRotatingText 
              color={"black"}
              items={['Tori Bromma', 'Full-Stack Web Developer', 'Welcome to my Page']} 
              className={classes.heading}
              /></h1>
                            </Paper>
                    </Grid>
                    <Grid item xs={3}>
                    
                    </Grid>
                
              </Grid>

            </header>
    )
}

export default Header;