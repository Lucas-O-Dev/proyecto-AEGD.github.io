import React from 'react'
import {Link}  from 'react-router-dom'
import myImage  from '../../assets/EmpleAR_logo_transparent.png'
import loginIcon from '../../assets/icons8-handshake-100.png'
import Button from '@mui/material/Button';
import './_sectiononelanding.scss'

const SectionOneLanding = () => {
  return (
    <section className='sectionOneLanding'>

  <article className='articleTitleLanding'>
    <img src={myImage} alt="" />
  </article>

  {/* <article>
  <img src={logoIcon} alt="logo-icon" height="80px" width="80px" />
  </article> */}

  <article className='articleParrafoLanding '>
  <p>Conectá con tu próximo empleo!</p>
  </article>

  <article className='articleButtonLoginLanding'>
  <Link to="/Login"><img src={loginIcon} alt="user-icon" height="60px" width="30px" /></Link>
  <p>Click Aquí.</p>
  </article>


        <article className='articleButtonLinkToCurriculumLanding'>
        <Button variant="outlined" ><Link to='/curriculum'  className='linkToCurriculum'><p>CREA TU CURRICULUM GRATIS!</p></Link></Button>
        </article>


</section>

  )
}

export default SectionOneLanding