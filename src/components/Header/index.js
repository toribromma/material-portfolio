import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Grid} from "@material-ui/core"
// var ReactRotatingText = require('react-rotating-text');

const useStyles = makeStyles((theme) => ({
    header: {
        textAlign: "center",
        marginTop: "100px",
        // backgroundColor: "black"
    },
    heading: {
      fontFamily: "Pacifico",
      letterSpacing: "4px",
      
    },
    paper: {
      // backgroundColor: "#D0D4BA",
      // borderRadius: "10px",
      // padding: 18
      // background: "repeating-radial-gradient(circle, #9AAB89, #9AAB89, 10px, #D0D4BA 10px, #D0D4BA 20px)"
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
                  <Paper elevation={0} className={classes.paper}>
                  <h1
              className={classes.heading}
              >Tori Bromma</h1>
                            </Paper>
                    </Grid>
                    <Grid item xs={3}>
                    
                    </Grid>
                
              </Grid>

            </header>
    )
}

export default Header;