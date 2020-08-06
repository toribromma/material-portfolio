import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Grid} from "@material-ui/core"
// var ReactRotatingText = require('react-rotating-text');
import image from "../../images/trianglify-lowres.png"

const useStyles = makeStyles((theme) => ({
    header: {
        textAlign: "center",
        // marginTop: "100px",
    },
    heading: {
      fontFamily: "Pacifico",
      fontSize: 50,
      letterSpacing: "8px",
      lineHeight: "60px",
      background: "linear-gradient(45deg, #22c1c3 30%, #fdbb2d 90%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent"
      
    },
    paper: {
      // borderRadius: "15px",
      padding: 18,
      // borderBottom: "2px black solid",
      // boxShadow: '0 3px 0px 0px #22c1c3'
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