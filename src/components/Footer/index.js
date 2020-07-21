import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    footer: {
        textAlign: "center",
        marginTop: "200px"
    }

  }));


function Footer() {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <h3>© Copyright 2020, Tori Bromma</h3>
        </footer>
    )
}

export default Footer;