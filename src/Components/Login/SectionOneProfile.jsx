import React from 'react'
import Button from '@mui/material/Button'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import './StylesLogin/_sectiononeprofile.scss'

const SectionOneProfile = () => {
  return (
    <div className='sectionOneProfile'>
      <div className="firstContainerSectionOneProfile">
        <Button sx={{ marginTop: "1rem", marginRight: "1rem" }}>
          <CameraAltIcon />
        </Button>
      </div>

      <div className="secondContainerSectionOneProfile">

        <div className="conteinerInfoUserProfile">

          <article className='firstArticleConteinerInfoUserProfile'>
            <section className="sectionFirstArticleConteinerInfoUserProfile">
              <h2>Lucas Ss</h2>
              <button>Verificar</button>
            </section>
            <section className="sectionSecondArticleConteinerInfoUserProfile">
              <h4>Desarrollador de Front-End en Autonomía.</h4>
              <div className="containerUbicationAndButtonContactInformation">
                <p>General Deheza, Córdoba, Argentina.</p>
                <button>Información de contacto.</button>
              </div>
            </section>
            <section className="sectionThirdArticleConteinerInfoUserProfile">
              <button>
                Tengo interés en...
              </button>
              <button>
                Añadir Sección
              </button>
              <button>
                Más
              </button>
            </section>
          </article>
        </div>
      </div>

      <div className="ThirdConteinerSectionOneProfile">
        <article className='firstArticleThirdConteinerSectionOneProfile'>
          <section className='firstSectionFirstArticleThirdConteinerSectionOneProfile'>
            <p>Se busca empleo en...</p>
            <p>Cargos de Desarrollo Web
            </p>
          </section>
          <section className='secondSectionFirstArticleThirdConteinerSectionOneProfile'>
          <p>          Muestra tus servicios en una sección de tu perfil para que te descubran fácilmente.
          </p>
          <button>Comenzar</button>
          </section>
        </article>
      </div>

    </div>
  )
}

export default SectionOneProfile
