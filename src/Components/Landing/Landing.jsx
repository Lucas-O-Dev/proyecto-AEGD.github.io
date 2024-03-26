import React from 'react'
import {Link}  from 'react-router-dom'
import userIcon from '../../assets/user.svg'

const Landing = () => {
  return (
    <div>
        <h1>Landing</h1>
        <Link to="/Login"><img src={userIcon} alt="cart-icon" /></Link>
    </div>
  )
}

export default Landing