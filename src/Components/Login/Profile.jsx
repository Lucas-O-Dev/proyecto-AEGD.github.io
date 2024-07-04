import React from 'react'
import './StylesLogin/_profile.scss'
import SignOutButton from './SignOutButton'
import SectionOneProfile from './SectionOneProfile'
import SectionSecondProfile from './SectionSecondProfile'

const Profile = () => {
  return (
    <div className='conteinerPrincipalProfile'>
        <div className="conteinerSectionsProfile">

        <SectionOneProfile />

      <SectionSecondProfile />
        </div>
    </div>
  )
}

export default Profile