import React from 'react'
import './StylesLogin/_profile.scss'
import { Link } from 'react-router-dom'
import SignOutButton from './SignOutButton'

const Profile = () => {
  return (
    <div className='conteinerPrincipalProfile'>
        <section className='sectionOneProfile'>
        <h1>Perfil</h1>
        <SignOutButton />
        <Link to="/EditInfoUserDatabase">¿Deseas realizar algún cambio en tus datos?</Link>
        </section>
    </div>
  )
}

export default Profile