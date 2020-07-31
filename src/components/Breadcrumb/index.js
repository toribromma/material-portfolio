import React from "react";
import {Grid} from "@material-ui/core"
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
        marginTop: "30px",
        marginBottom: "30px",
        // background: " linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(154,190,113,1) 53%, rgba(253,187,45,1) 87%)",
        overflow: "auto",
        whiteSpace: "nowrap",
        // borderRadius: 10,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        border: "2px black solid",
        backgroundColor: "orange",
        textAlign: "center",
    },
    link: {
        display: "inline-block",
        padding: "20px",
        textAlign: "center",
        fontFamily: 'Merriweather',
        color: "white",
        textDecoration: "none",
        fontWeight: "bolder",
        textAlign: "center",
        // letterSpacing: 5,
      "&:hover": {
        backgroundColor: "#222",
        color: "white",
        
      }


    }
  }));

function Breadcrumb() {
      const classes = useStyles();
    return (
        <div className={classes.root}>
          <Grid container>
            <Grid item xs={0} md={4}/>
            <Grid item xs={12} md={4}>
            <div className={classes.breadcrumb} separator="|" aria-label="breadcrumb">
            <Link className={classes.link} color="inherit" to="/">
            About
            </Link >
            <Link className={classes.link} color="inherit" to="/projects" >
            Projects
            </Link>
            <Link className={classes.link} color="inherit" to="/skills">
            Skills
            </Link>
            <Link className={classes.link} color="inherit" to="/skills">
            Photos
            </Link>
            </div>
            </Grid>
            <Grid item xs={12}/>
            </Grid>
        </div>
    )
}

export default Breadcrumb;

