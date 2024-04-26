import React from 'react'
import countryIcon from '../../assets/icons8-country-50.png'
import './_thirdcontainersonhome.scss'

const ThirdContainerSonHome = () => {
  return (
    <div className='containerPrincipalThirdContainerSonHome'>

        <section>
            <article>
                <img src={countryIcon} alt="countryIcon" height="80px" width="80px" />
                <p>Empleo por localidad.</p>
            </article>
        </section>

        <section>
            <article>
                <p>Villa María(3)</p>
                <p>Córdoba(11)</p>
                <p>Río Cuarto(6)</p>
                <p>General Deheza(2)</p>
                <p>Hernando(8)</p>
            </article>
        </section>
    </div>
  )
}

export default ThirdContainerSonHome