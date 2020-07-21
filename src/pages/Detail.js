import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


function Detail(props) {
    const [project, setProject] = useState({});

    const {id} = useParams()
    useEffect(() => {
        // getProject(id)
        //     .then(res => setProject(res.data))
        //     .catch(err => console.log(err));
    }, [])

return (
    <div>
        <h1>Hi</h1>
        <h2>hsedf</h2>
        <Link to="/projects">← Back to Projects</Link>
     </div>

);
}

export default Detail;