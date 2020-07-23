import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import tileData from "../components/Project/tileData"
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/button';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.primary,
    },
    img: {
        margin: 'auto',
        display: 'flex',
        maxWidth: '100%',
        maxHeight: '100%',
    }
  }));

function Detail(props) {
    const [project, setProject] = useState({});

    const {id} = useParams()
    
    useEffect(() => {
        const res = tileData.filter(project => project._id === id)
            console.log(res[0])
            setProject(res[0])
    }, [])

    const classes = useStyles();
    
return (
    <div className={classes.root}>
        <Grid container 
        direction="col" 
        justify="center" 
        spacing={3}
        alignItems="center">
            <Grid item xs={12}>
               <Paper elevation={0} className={classes.paper}><h2>{project.title}</h2></Paper> 
            </Grid>
            <Grid item xs={12}>
            <Paper elevation={0} className={classes.paper}><p>{project.description}</p></Paper>
            </Grid>
            <Paper elevation={3} className={classes.paper}><Grid item xs={12}>
                <img className={classes.img} src={project.img}/>
            </Grid></Paper>
            <Grid item xs={12}>
            <Paper elevation={0} className={classes.paper}>
                <Button>
                <Link to="/material-portfolio/projects">← Back to Projects</Link>
                </Button>
                </Paper>
            </Grid>
        </Grid>
     </div>

);
}

export default Detail;