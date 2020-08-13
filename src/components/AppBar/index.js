import React from "react";
import {AppBar, Toolbar, Typography, IconButton, Menu} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu/"
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Button from "@material-ui/core/Button"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
        fontFamily: "Pacifico",
        background: "linear-gradient(45deg, #22c1c3 30%, #fdbb2d 90%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      },
      offset: theme.mixins.toolbar,
      link: {
        display: "flex",
        padding: "10px",
        textAlign: "center",
        fontFamily: 'Pacifico',
        color: "#436436",
        textDecoration: "none",
        // fontWeight: "bold",
        textAlign: "center",
        letterSpacing: 2,
      "&:hover": {
        // background: "linear-gradient(45deg, #22c1c3 30%, #fdbb2d 90%)",
        color: "gray",
      },
      link2: {
        backgroundColor: "linear-gradient(45deg, #22c1c3 30%, #fdbb2d 90%)",
      }
    }
      
  }));

function AppBr() {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
        <AppBar elevation={0} color="transparent" position="fixed">
            <Toolbar>
                <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
                </IconButton>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <Link className={classes.link} to="/" onClick={handleClose}>About</Link>
                    <Link className={classes.link} to="/projects"  onClick={handleClose}>Projects</Link>
                    <Link className={classes.link} to="/skills" onClick={handleClose}>Skills</Link>
                    <Link className={classes.link} to="/photos" onClick={handleClose}>Photos</Link>
                </Menu>
                <Typography variant="h6" className={classes.title}>
                TB
                </Typography>
                <Button href="https://github.com/toribromma" target="_blank"><GitHubIcon/></Button>
                <Button href="http://linkedin.com/in/toribromma" target="_blank"><LinkedInIcon/></Button>
            </Toolbar>
            </AppBar>
            <div className={classes.offset} />
            </div>
    )
}

export default AppBr;