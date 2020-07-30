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
      fontSize: 50,
      letterSpacing: "8px",
      lineHeight: "60px",
      color: "black"
      
    },
    paper: {
      backgroundColor: "#D0D4BA",
      borderRadius: "6px",
      padding: 18,
      background: "radial-gradient(circle, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)"
    }

  }));


function Header() {
      const classes = useStyles();
    return (
            <header className={classes.header}>

                <Grid container>
                  <Grid item xs={12}>
                  <Paper elevation={0} className={classes.paper}>
                  <h1
              className={classes.heading}
              >Tori Bromma</h1>
                            </Paper>
                    </Grid>
              </Grid>

            </header>
    )
}

export default Header;