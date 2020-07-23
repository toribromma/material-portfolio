import React from "react";
import {Breadcrumbs, Link, Grid} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';

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
        fontWeight: "bolder",
        textAlign: "center",
        fontFamily: 'Merriweather',
        color: "black",

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
            <Link className={classes.link} color="inherit" to="/material-portfolio/#/">
            About
            </Link >
            <Link className={classes.link} color="inherit" to="/material-portfolio/#/projects" >
            Projects
            </Link>
            <Link className={classes.link} color="inherit" to="/material-portfolio/#/skills">
            Skills
            </Link>
            </Breadcrumbs>
            <Grid item xs={4}/>
            </Grid>
        </div>
    )
}

export default Breadcrumb;

