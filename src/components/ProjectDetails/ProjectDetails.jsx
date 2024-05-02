import { Link, useParams } from "react-router-dom"

import projectsData from './../projects-data.json'

function ProjectDetails() {

    const { project_id } = useParams()

    const foundProject = projectsData.find(elm => elm._id === project_id)

    return (
        <div>
            <h1>Detalles de proyecto {foundProject.name}</h1>
            <hr />
            <p>Tecnologias: {foundProject.technologies}</p>
            <hr />
            <Link to={'/mis-proyectos'}>Volver a los proyectos</Link>
        </div>
    );
}

export default ProjectDetails;
