import React from "react";
import {Breadcrumbs, Link} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '⋆ & > * + *': {
        marginTop: theme.spacing(3),
      }
    },
    breadcrumb: {
        fontSize: "20px",
        marginTop: "100px",
        marginBottom: "50px"

    },
    link: {
        padding: "10px",
        fontWeight: "bolder",
        textAlign: "center"

    }
  }));

function Breadcrumb() {

    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
      }    

      const classes = useStyles();

    return (
        <div className={classes.root}>
            <Breadcrumbs className={classes.breadcrumb} separator=" " aria-label="breadcrumb">
            <Link className={classes.link} color="inherit" href="/" onClick={handleClick}>
            About
            </Link >
            <Link className={classes.link} color="inherit" href="/" onClick={handleClick}>
            Projects
            </Link>
            <Link className={classes.link} color="inherit" href="/" onClick={handleClick}>
            Skills
            </Link>
            </Breadcrumbs>
        </div>
    )
}

export default Breadcrumb;

