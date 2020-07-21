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
        <h1></h1>
        <h2>{project.title}</h2>
        <Link to="/projects">← Back to Projects</Link>
     </div>

);
}

export default Detail;