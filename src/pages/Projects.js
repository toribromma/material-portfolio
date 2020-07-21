import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import tileData from '../components/Project/tileData';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      // overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
      marginTop: "100px"
    },
    gridList: {
      width: 1000 ,
      height: 850,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    }
  }));

  
function Projects() {
    const classes = useStyles();
    return (     
        <div>
            <hr></hr>
             <div className={classes.root}>
                <GridList cellHeight={600} spacing={3} cols={1} className={classes.gridList}>
                    {/* <GridListTile key="Subheader" cols={2} rows={1} style={{ height: 'auto' }}>
                    <ListSubheader component="div">Projects</ListSubheader>
                    </GridListTile> */}
                    {tileData.map((tile) => (
                    <GridListTile className={classes.tile} key={tile.img}>
                        <img src={tile.img} alt={tile.title} />
                        <GridListTileBar
                        title={tile.title}
                        subtitle={<span>{tile.description}</span>}
                        actionIcon={
                        <IconButton href={"/projects/" + tile._id} aria-label={`info about ${tile.title}`} className={classes.icon}>
                        <InfoIcon />
                        </IconButton>
                        }
                        />
                    </GridListTile>
                    ))}
                 </GridList>
    </div>

        </div>
    );
}

export default Projects;