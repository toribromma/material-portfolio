import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import InfoIcon from '@material-ui/icons/Info';
import tileData from '../components/Project/tileData';
import {Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Grid} from "@material-ui/core"


const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    width: 275,
  },
  media: {
    height: 180,
  },
  }));

  
function Projects() {
    const classes = useStyles();
    return (   

    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={2}>
    {tileData.map((tile) => (
    <Grid item xs={12} sm={12} md={3} xl={3}>
    <Card raised className={classes.root}>
    <CardActionArea>
      <CardMedia
        className={classes.media}
        image={tile.img}
        src={tile.title}
      />
      <CardContent>
        <Typography  gutterBottom variant="h5" component="h2">
          {tile.title}
        </Typography>
        <Typography variant="body2" color="textPrimary" component="p">
          {tile.description}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
    <Link to={"/projects/" + tile._id} aria-label={`info about ${tile.title}`} className={classes.icon}>
<InfoIcon />
</Link>
    </CardActions>
  </Card>
  </Grid>
          ))}
      </Grid>
    );
}

export default Projects;