import React from "react";
import { makeStyles } from '@material-ui/core/styles';
var ReactRotatingText = require('react-rotating-text');

const useStyles = makeStyles((theme) => ({
    header: {
        textAlign: "center",
        marginTop: "200px"
    },
    heading: {
      fontFamily: "Pacifico"
    }

  }));


function Header() {
      const classes = useStyles();
    return (
            <header className={classes.header}>
                <h1> 
                  <ReactRotatingText 
              color={"black"}
              items={['Tori Bromma', 'Full-Stack Web Developer', 'Welcome to my Page']} 
              className={classes.heading}
              /></h1>
                {/* <h2>Full-Stack Web Developer</h2> */}
            </header>
    )
}

export default Header;