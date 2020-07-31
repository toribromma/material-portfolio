import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import profile from "../images/profile1.jpg";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(4),
    color: theme.palette.text.primary,
    lineHeight: 2,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
  },
  paper2: {
    padding: theme.spacing(4),
    color: "black",
    lineHeight: 1.5,
    background: "linear-gradient(0deg, #22c1c3 0%, #fdbb2d 100%)",
    boxShadow: '0 5px 10px 4px rgba(255, 105, 135, .3)'
  },
  avatar: {
    width: "200px",
    height: "200px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto"
  },
  button: {
    background: 'linear-gradient(45deg, #22c1c3 30%, #fdbb2d 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 38,
    padding: '0 20px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  links:{
    // textDecoration: "none",
    color: "black",
    "&:hover": {
      color: "white"
    },
  }
}));


function Home() {

  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      {/* <hr></hr> */}
      <Grid 
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={2}
      >
        <Grid item xs={12} sm={12} xl={9}>
          <Paper 
          className={classes.paper}
          elevation={1}
          >
            <h2>
              <i>Welcome to my Page!</i>
            </h2>
            <p>
              I enjoy the outdoors, basketball, playing guitar, and most of all: <b><i>coding</i></b>!
            </p>
            <p>
              <b>Full Stack (MERN) Web Developer</b> with a background in Political Science and Social Services. Dedicated to
              developing best practices, honing current coding skills, producing effective, creative app ideas, and solving complicated
              problems. Known for being hardworking, adaptable, and a great communicator.
            </p>
            <p>Focused on <b>Object-Oriented Programming</b> and <b>agile development</b>. My goals are to become more advanced in React and become better at whiteboarding.</p>
            <Button className={classes.button} target="_blank" href="mailto:toribromma@gmail.com">
              Email me
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} xl={3}>
          <Paper elevation={1} className={classes.paper2}>
            <Avatar className={classes.avatar} src={profile}/>
            <h4>Contact Info:</h4>
            <ul>
              <li>
              <a className={classes.links} href="tel:+17147020401"><b>Call me for more info</b></a>
              </li>
              <li> Please check out my<span></span>
                <a className={classes.links} target="_blank" href="https://drive.google.com/file/d/1Q0jXdWVesqziTQG1LJKpO_Vp0rj5ddrC/view?usp=sharing">
                  <b> Resume</b>
                </a>
              </li>
            </ul>
            </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
