import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import tileData from "../components/Project/tileData"
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

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
    },
    button: {
        background: 'linear-gradient(45deg, #9AAB89 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 38,
        padding: '0 20px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
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
        spacing={4}
        alignItems="center">
            <Grid item xs={12}>
            <Paper elevation={0} className={classes.paper}><h2>{project.title}</h2></Paper> 
            </Grid>
            <Grid item xs={12}>
            <Paper elevation={0} className={classes.paper}><h5>{project.description}</h5></Paper>
            <Paper elevation={0} className={classes.paper}><b>{project.technologies}</b></Paper>
            </Grid>
            <Paper elevation={3} className={classes.paper}>
                <img className={classes.img} src={project.img}/>
                <Paper elevation={0} className={classes.paper}><Button component={"button"} className={classes.button} target="_blank" href={project.githubLink}>Github</Button></Paper>
            <Paper elevation={0} className={classes.paper}><Button className={classes.button} target="_blank" href={project.deployedLink}>Deployed</Button></Paper>
            </Paper>
            <Grid item xs={12}>
            <Paper elevation={0} className={classes.paper}>
                <Button>
                <Link to="/projects">← Back to Projects</Link>
                </Button>
                </Paper>
            </Grid>
        </Grid>
     </div>

);
}

export default Detail;