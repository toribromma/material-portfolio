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
    padding: theme.spacing(2),
    color: theme.palette.text.primary,
    lineHeight: 1.5
  },
  avatar: {
    width: "200px",
    height: "200px"
  },
  button: {
    background: 'linear-gradient(45deg, #9AAB89 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 38,
    padding: '0 20px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
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
      >
        <Grid item xs={12} sm={9}>
          <Paper 
          className={classes.paper}
          elevation={1}
          spacing={4}
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
              problems. Known for being hardworking, having sound ideas and following through with projects.
            </p>
            <p>Focused on <b>Object-Oriented Programming</b> and <b>agile development</b>. My goals are to become more advanced in React and become better at whiteboarding.</p>
            <Button className={classes.button} target="_blank" href="mailto:toribromma@gmail.com">
              Email me
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper elevation={1} className={classes.paper}>
            <Avatar className={classes.avatar} src={profile}/>
            <h4>Contact Info:</h4>
            <ul>
              <li>
              <a href="tel:+17147020401">Call me for more info</a>
              </li>
              <li> Please check out my<span> </span>
                <a target="_blank" href="https://drive.google.com/file/d/1Q0jXdWVesqziTQG1LJKpO_Vp0rj5ddrC/view?usp=sharing">
                  Resume
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
