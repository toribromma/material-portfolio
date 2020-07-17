import React from "react";
import {Breadcrumbs, Link} from "@material-ui/core"
import Home from "../../pages/Home";

function Breadcrumb() {

    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
      }    

    return (
        <div>
            <Breadcrumbs separator="⋆" aria-label="breadcrumb">
            <Link color="inherit" href="/" onClick={handleClick}>
            About
            </Link>
            <Link color="inherit" href="/" onClick={handleClick}>
            Projects
            </Link>
            <Link color="inherit" href="/" onClick={handleClick}>
            Skills
            </Link>
            </Breadcrumbs>
        </div>
    )
}

export default Breadcrumb

