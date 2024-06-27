import React from 'react'
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';

const FirstArticleJobs = () => {
  return (
    <article className="firstArticleJobs">
    <p>Publica tu anuncio de empleo para que lo vean millones de personas.</p>
    <Link to='/AddJobs'><Button>Agregar oferta laboral</Button></Link>
</article>
  )
}

export default FirstArticleJobs