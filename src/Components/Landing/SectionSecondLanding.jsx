import React from 'react'
import {Link} from 'react-router-dom'
import documentIcon from '../../assets/icons8-document.svg'; // Ruta de tu imagen
import privacyIcon from '../../assets/icons8-privacy-policy-48.png'; // Ruta de tu imagen
import './_sectionsecondlanding.scss'

const SectionSecondLanding = () => {
  return (
    <div className='containerPrincipalSectionSecondLanding'>
      <section>
        <article><img src={documentIcon} alt="documenticon" width={"40px"}/></article>
        <article><Link to=''>Menciones Legales</Link></article>
      </section>
      <section>
        <article><Link to=''>Políticas De Privacidad</Link></article>
        <article><img src={privacyIcon} alt="documenticon" width={"40px"}/></article>
      </section>
    </div>
  )
}

export default SectionSecondLanding