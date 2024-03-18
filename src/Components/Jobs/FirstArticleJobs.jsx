import React from 'react'
import {Link} from 'react-router-dom'

const FirstArticleJobs = () => {
  return (
    <article className="firstArticleJobs">
    <h2>Jobs</h2>
    <p>agregar oferta laboral</p>
    <Link to='/AddJobs'><button>agregar</button></Link>
</article>
  )
}

export default FirstArticleJobs