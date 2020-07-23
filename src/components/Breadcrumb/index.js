import React from "react";
import {Breadcrumbs, Grid} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
      '⋆ & > * + *': {
        marginTop: theme.spacing(3),
      },
    },
    breadcrumb: {
        fontSize: "20px",
        marginTop: "100px",
        marginBottom: "50px",
    },
    link: {
        padding: "20px",
        textAlign: "center",
        fontFamily: 'Merriweather',
        color: "black",
        textDecoration: "none",
        fontWeight: "bolder",


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
          <Grid container>
            <Grid item xs={4}/>
            <Breadcrumbs className={classes.breadcrumb} separator="|" aria-label="breadcrumb">
            <Link className={classes.link} color="inherit" to="/">
            About
            </Link >
            <Link className={classes.link} color="inherit" to="/projects" >
            Projects
            </Link>
            <Link className={classes.link} color="inherit" to="/skills">
            Skills
            </Link>
            </Breadcrumbs>
            <Grid item xs={4}/>
            </Grid>
        </div>
    )
}

export default Breadcrumb;

