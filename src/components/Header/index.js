import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    name: {
        textAlign: "center",
        marginTop: "200px"
    }

  }));


function Header() {

      const classes = useStyles();

    return (
            <header className={classes.name}>
                <h1>tori bromma</h1>
                <h2>Full-Stack Web Developer</h2>
            </header>
    )
}

export default Header;