import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import tileData from "../components/Project/tileData"


function Detail(props) {
    const [project, setProject] = useState({});

    const {id} = useParams()
    
    useEffect(() => {
        const res = tileData.filter(project => project._id === id)
            console.log(res[0])
            setProject(res[0])
    }, [])

    
return (
    <div>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <img src={project.img}/>
        <br></br>
        <Link to="/projects">← Back to Projects</Link>
     </div>

);
}

export default Detail;