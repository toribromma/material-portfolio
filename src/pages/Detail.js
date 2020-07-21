import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import tileData from "../components/Project/tileData"
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
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
                <h2>{project.title}</h2>
            </Grid>
            <Grid item xs={12}>
                <p>{project.description}</p>
            </Grid>
            <Grid item xs={12}>
                <img className={classes.img} src={project.img}/>
            </Grid>
            <Grid item xs={12}>
                <Link to="/projects">← Back to Projects</Link>
            </Grid>
        </Grid>
     </div>

);
}

export default Detail;