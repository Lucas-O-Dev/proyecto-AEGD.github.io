import React from 'react'
import {Link}  from 'react-router-dom'
import logoIcon from '../../assets/slack.svg'
import userIcon from '../../assets/user.svg'
import loginIcon from '../../assets/icons8-connectivity-and-help-skin-type-1-100.png'
import './_sectiononelanding.scss'

const SectionOneLanding = () => {
  return (
    <section className='sectionOneLanding'>

  <article className='articleTitleLanding'>
  <h1>AEGD</h1>
  </article>

  <article>
  <img src={logoIcon} alt="logo-icon" height="80px" width="80px" />
  </article>

  <article className='articleParrafoLanding '>
  <p>Encuentra  tu próximo empleo!</p>
  </article>

  <article className='articleButtonLoginLanding'>
  <Link to="/Login"><img src={loginIcon} alt="user-icon" height="60px" width="60px" /></Link>
  </article>

</section>
  )
}

export default SectionOneLanding