import React from 'react'
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import './StylesLogin/_sectionsecondprofile.scss'

const SectionSecondProfile = () => {
  return (
    <div className='sectionSecondProfile'>
        <section className="firstSectionSecondSectionProfile">
            <div className="conteinerEditLanguageProfile">
              <h4>Idioma del perfil</h4>
              <Button>
                <EditIcon />
              </Button>
            </div>
          <p>Español</p>
            <div className="conteinerEditLanguageProfile">
              <h4>Perfil público</h4>
              <Button>
                <EditIcon />
              </Button>
            </div>
          <p>http://localhost:5173/profile</p>
        </section>
        <section className='secondSectionSecondSectionProfile'>
        </section>
    </div>
  )
}

export default SectionSecondProfile
