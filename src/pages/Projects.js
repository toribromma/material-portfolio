import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import InfoIcon from '@material-ui/icons/Info';
import tileData from '../components/Project/tileData';
import {Paper} from "@material-ui/core"


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      alignItems: "center",
      justifyContent: 'center',
      backgroundColor: theme.palette.background.paper,
      // minHeight: "100vh"
    },
    section: {
      display: 'flex',
      alignItems: "center",
      justifyContent: 'center',
      flexWrap: "wrap",
      transformStyle: "preserve-3d",
      width: "100%"
    },
    card: {
      position: "relative",
      width: "320px",
      height: "320px",
      margin: 20,
      transformStyle: "preserve-3d",
      perspective: "1000",
      "&:hover": {
        transform: "rotateY(180deg)"
      },
    },
    box: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      transformStyle: "preserve-3d",
      transform: "1s ease",
      // border: "1px solid gray",
      boxShadow: "0 0 25px gray",
      borderRadius: "10px"
    },
    imgBx: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    },
    img: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    },
    contentBx: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "black",
      backfaceVisibility: "hidden",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      transformStyle: "preserve-3d",
      transform: "rotateY(180deg)",
    },
    box2: {
      transformStyle: "preserve-3d",
      padding: 20,
      background: "linear-gradient(45deg,#D0D4BA,#B8A082)",
      transform: "translateZ(100px)",
    },
  }));

  
function Projects() {
    const classes = useStyles();
    return (     
        <Paper outline={1}>
             {/* <div className={classes.root}> */}
                {/* <GridList cellHeight={600} spacing={1} cols={2} className={classes.gridList}> */}
                    {/* <GridListTile key="Subheader" cols={1} rows={1} style={{ height: 'auto' }}>
                    <ListSubheader component="div">Projects</ListSubheader>
                    </GridListTile> */}
                    {tileData.map((tile) => (
                    // <GridListTile className={classes.tile} key={tile.img}>
                    //     <img src={tile.img} alt={tile.title} className={classes.img} />
                    //     <GridListTileBar
                    //     className={classes.bar}
                    //     title={tile.title}
                    //     subtitle={<span>{tile.description}</span>}
                    //     actionIcon={
                    //     <Link to={"/projects/" + tile._id} aria-label={`info about ${tile.title}`} className={classes.icon}>
                    //     <InfoIcon />
                    //     </Link>
                    //     }
                    //     />
                    // </GridListTile>
                    <div className={classes.root}>
                      <div className={classes.section}>
                        <div className={classes.card}>
                          <div className={classes.box}>
                            <div className={classes.imgBx}>
                              <img className={classes.img} src={tile.img}/>
                            </div>
                            <div className={classes.contentBx}>
                              <div className={classes.box2}>
                                <h2>{tile.title}</h2>
                                <p>{tile.description}</p>
                                <Link to={"/projects/" + tile._id} aria-label={`info about ${tile.title}`} className={classes.icon}>
                                  <InfoIcon />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    ))}
                 {/* </GridList> */}
    </Paper>

        // </div>
    );
}

export default Projects;