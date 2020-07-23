import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  

function Skills() {
    const classes = useStyles();
    return (

        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <i className="fab fa-html5 fa-5x"></i>
                        <div className="language">HTML</div>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <i className="fab fa-css3-alt fa-5x"></i>
                        <div className="language">CSS, Bootstrap, UIKit, Material UI</div>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                    <i className="fab fa-react fa-5x fa-spin"></i>
                    <div className="language">React, Redux, Hooks</div>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <i className="fab fa-html5 fa-5x"></i>
                        <div className="language">HTML</div>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                    <i className="fab fa-node-js fa-5x"></i>
                    <div className="language">Node and Express</div>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                    <i className="fas fa-database fa-5x"></i>
                    <div className="language">MySQL and Mongo</div>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default Skills;