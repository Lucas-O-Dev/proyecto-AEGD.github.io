import React from 'react'
import {Link} from 'react-router-dom'

import './StylesLogin/_dashboardwrapper.scss'

const DashboardWrapper = ({children}) => {
  return (
<div className='conteinerDashboardWrapper'>
    <nav className='navbarDashboardWrapper'>
        <Link to='/dashboard'>Links</Link>
        <Link to='/dashboard/profile'>Profile</Link>
        <Link to='/signout'>Signout</Link>
    </nav>
<div>{children}</div>
</div>
  )
}

export default DashboardWrapper