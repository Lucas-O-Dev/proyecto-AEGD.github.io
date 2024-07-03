import React from 'react'
import './StylesLogin/_profile.scss'
import { Link } from 'react-router-dom'
import SignOutButton from './SignOutButton'
import SectionOneProfile from './SectionOneProfile'
import SectionSecondProfile from './SectionSecondProfile'

const Profile = () => {
  return (
    <div className='conteinerPrincipalProfile'>
        <div className="conteinerSectionsProfile">

        <SectionOneProfile />
        {/* <Link to="/EditInfoUserDatabase">¿Deseas realizar algún cambio en tus datos?</Link> */}

      <SectionSecondProfile />
        </div>
    </div>
  )
}

export default Profile