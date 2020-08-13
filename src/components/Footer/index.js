import React from "react";
import { makeStyles } from '@material-ui/core/styles';
// import GitHubIcon from '@material-ui/icons/GitHub';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import Button from "@material-ui/core/Button"

const useStyles = makeStyles((theme) => ({
    footer: {
        textAlign: "center",
        marginTop: "150px",
        fontFamily: "Pacifico"
        // borderTop: "2px solid black"
    }

  }));


function Footer() {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <h3>© Copyright 2020, Tori Bromma</h3>
            {/* <Button href="https://github.com/toribromma" target="_blank"><GitHubIcon/></Button>
            <Button href="http://linkedin.com/in/toribromma" target="_blank"><LinkedInIcon/></Button>
             */}
        </footer>
    )
}

export default Footer;