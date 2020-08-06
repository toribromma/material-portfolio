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
        fontSize: "12px",
        marginTop: "5px",
        marginBottom: "30px",
        // background: " linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(154,190,113,1) 53%, rgba(253,187,45,1) 87%)",
        overflow: "auto",
        whiteSpace: "nowrap",
        borderRadius: 30,
        boxShadow: '0 1px 3px 1px #F0C987',
        border: "0.2px #E9C46A solid",
        // background: "linear-gradient(45deg, #22c1c3 30%, #fdbb2d 90%)",
        textAlign: "center",
    },
    link: {
        display: "inline-block",
        padding: "10px",
        textAlign: "center",
        fontFamily: 'Pacifico',
        color: "#436436",
        textDecoration: "none",
        // fontWeight: "bold",
        textAlign: "center",
        letterSpacing: 2,
      "&:hover": {
        background: "linear-gradient(45deg, #22c1c3 30%, #fdbb2d 90%)",
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

