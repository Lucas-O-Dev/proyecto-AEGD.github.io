import React from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <div>
        <section>
        <h1>Perfil</h1>
        <Link to="/PersonalData">Datos Personales</Link>
        </section>
    </div>
  )
}

export default Profile