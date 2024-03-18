import React from 'react'
import {Link} from 'react-router-dom'
import './_jobslist.scss'

const JobsList = ({ trabajos }) => {
return (
<div className="containerJobsList">
{trabajos.map((job) => (
<div key={job.id} className="cardJobs">
<div className="cardJobsDetails">
<h3>{job.Empresa}</h3>
<p>{job.Cargo}</p>
<p>{job.Duracion}</p>
</div>
<Link className="card-button" to={`/`}>More info</Link>
</div>
))}
</div>
)
}

export default JobsList
