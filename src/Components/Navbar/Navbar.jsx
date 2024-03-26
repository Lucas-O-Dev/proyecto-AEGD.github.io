import React from "react"
import logoIcon from '../../assets/slack.svg'
import userIcon from '../../assets/user.svg'
import cartIcon from '../../assets/cart.svg'
import {Link}  from 'react-router-dom'
import styled from 'styled-components';


import './_navbar.scss'


const StyledLink = styled(Link)`
  /* Aquí puedes aplicar tus propios estilos */
  text-decoration: none; /* Quita el subrayado predeterminado */
  color: inherit; /* Utiliza el color del texto heredado */
`;


const Navbar = () => {
    return(
        <div className="conteinerNavbar">
            <div className="containerBrand">
            <Link to="/home"><img src={logoIcon} alt="logo-icon" className="logoIcon"/></Link>
            <p>AEGD</p>
            </div>
            <div className="containerCategories">
            <StyledLink to="/Courses"><h3>
            Cursos 
            </h3></StyledLink>
            <StyledLink to="/curriculums"><h3>
            Curriculums
            </h3></StyledLink>
            <StyledLink to="/Jobs"><h3>
            Ofertas Laborales
            </h3></StyledLink>
            </div>
            <div className="conteinerLinks">
            <Link to="/Profile"><img src={userIcon} alt="cart-icon" /></Link>
            <Link to="/Cart"><img src={cartIcon} alt="cart-icon" /></Link>
            </div>
        </div>
    )
}

export default Navbar