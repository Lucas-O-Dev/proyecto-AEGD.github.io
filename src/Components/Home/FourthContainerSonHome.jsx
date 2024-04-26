import React from 'react'
import securityIcon from '../../assets/icons8-protect-24.png'
import chartIcon from '../../assets/icons8-graph-24.png'
import trustIcon from '../../assets/icons8-trust-64.png'
import './_fourthcontainersonhome.scss'

const FourthContainerSonHome = () => {
  return (
    <div className="containerPrincipalFourthContainerSonHome">
        <section>
        <img src={securityIcon} alt="securityIcon" height="30px" width="30px" />
            <h4>Seguridad</h4>
            <p>El sistema esta preparado para garantizar que la información de los usuarios esté resguardada a lo largo de todo el proceso de uso.</p>
        </section>
        <section>
        <img src={chartIcon} alt="chartIcon" height="30px" width="30px" />
            <h4>Evolución y Trayectoria</h4>
            <p>Más de 3 años de trabajo avalan el crecimiento y desarrollo de la plataforma en múltiples ciudades del país.</p>
        </section>
        <section>
        <img src={trustIcon} alt="trustIcon" height="30px" width="30px" />
            <h4>Compromiso</h4>
            <p>Nuestro equipo trabaja todos los días para asegurar la calidad de las publicaciones y el uso responsable de la plataforma.</p>
        </section>
    </div>
  )
}

export default FourthContainerSonHome