import React from 'react'
import securityIcon from '../../assets/icons8-protect-24.png'
import chartIcon from '../../assets/icons8-graph-24.png'
import trustIcon from '../../assets/icons8-trust-64.png'
import Sheet from '@mui/joy/Sheet';
import Stack from '@mui/joy/Stack';
import { styled } from '@mui/joy/styles';
import './_fourthcontainersonhome.scss'

const FourthContainerSonHome = () => {

  const Item = styled(Sheet)(({ theme }) => ({
    ...theme.typography['body-sm'],
    textAlign: 'center',
    fontWeight: theme.fontWeight.md,
    color: theme.vars.palette.text.secondary,
    border: '1px solid',
    borderColor: theme.palette.divider,
    padding: theme.spacing(1),
    borderRadius: theme.radius.md,
  }));

  return (<>
    <div className='containerPrincipalFourthContainerSonHome'>
      <Stack direction="row"  className='stackContainerPrincipalFourthContainerSonHome'>
        <Item>
          <img src={securityIcon} alt="securityIcon" height="30px" width="30px" />
          <h4>Seguridad</h4>
          <p>El sistema esta preparado para garantizar que la información de los usuarios esté resguardada a lo largo de todo el proceso de uso.</p></Item>
        <Item>
          <img src={chartIcon} alt="chartIcon" height="30px" width="30px" />
          <h4>Evolución y Trayectoria</h4>
          <p>Más de 3 años de trabajo avalan el crecimiento y desarrollo de la plataforma en múltiples ciudades del país.</p></Item>
        <Item>
          <img src={trustIcon} alt="trustIcon" height="30px" width="30px" />
          <h4>Compromiso</h4>
          <p>Nuestro equipo trabaja todos los días para asegurar la calidad de las publicaciones y el uso responsable de la plataforma.</p></Item>
      </Stack>
    </div>
  </>
  )
}

export default FourthContainerSonHome