import React from 'react'
import {Link}  from 'react-router-dom'
import logoIcon from '../../assets/technology_podcast_3y15jy6awh8h.svg'
import userIcon from '../../assets/user.svg'
import loginIcon from '../../assets/icons8-connectivity-and-help-skin-type-1-100.png'
import './_landing.scss'

const Landing = () => {
  return (
    <div className='principalConteinerLanding'>
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
    </div>
  )
}

export default Landing