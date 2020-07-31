import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import InfoIcon from '@material-ui/icons/Info';
import tileData from '../components/Project/tileData';
import {Paper} from "@material-ui/core"
import image from "../images/cool-background.svg"


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      alignItems: "center",
      justifyContent: 'center',
      // minHeight: "100vh"
    },
    section: {
      display: 'flex',
      alignItems: "center",
      justifyContent: 'center',
      flexWrap: "wrap",
      transformStyle: "preserve-3d",
      width: "100%",
      padding: 50
    },
    card: {
      position: "relative",
      width: "345px",
      height: "220px",
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
      boxShadow: "0 0 25px white",
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
      objectFit: "cover",
      borderRadius: 5
    },
    contentBx: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "antiqueblue",
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
      background: "radial-gradient(circle, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
      transform: "translateZ(100px)",
    },
  }));

  
function Projects() {
    const classes = useStyles();
    return (     
        <Paper outline={0} elevation={0} className={classes.background1}>
                  <div className={classes.root}>
                      <div className={classes.section}>
                    {tileData.map((tile) => (
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
                    ))}
                    </div>
                      </div>

    </Paper>
    );
}

export default Projects;