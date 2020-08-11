import React from "react";
import {AppBar, Toolbar, Typography, IconButton, Menu} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu/"
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
        fontFamily: "Pacifico"
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
        background: "linear-gradient(45deg, #22c1c3 30%, #fdbb2d 90%)",
        color: "white",
        
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
                </Menu>
                <Typography variant="h6" className={classes.title}>
                TB
                </Typography>
            </Toolbar>
            </AppBar>
            <div className={classes.offset} />
            </div>
    )
}

export default AppBr;