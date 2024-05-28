import React from 'react'
import {Link} from 'react-router-dom'
import './_jobslist.scss'

const JobsList = ({ trabajos }) => {
return (
<div className="containerJobsList">
{trabajos.map((job) => (
<div key={job.id} className="cardJobs">
<div className="cardJobsDetails">
<h3>{job.descripcion}</h3>
<p>{job.jornadaLaboral}</p>
<p>{job.experienciaRequerida}</p>
<p>{job.duracion}</p>
<p>{job.sueldo}</p>
<p>{job.nivelEducativo}</p>
<p>{job.modalidad}</p>
<p>{job.localidad}</p>
<p>{job.rubro}</p>
<p>{job.puesto}</p>
</div>
<Link className="card-button" to={`/`}>More info</Link>
</div>
))}
</div>
)
}

export default JobsList

