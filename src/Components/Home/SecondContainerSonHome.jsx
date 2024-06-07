import React, { useState, useRef, useEffect } from 'react'
import Button from '@mui/material/Button';
import './_secondcontainersonhome.scss'
import Sheet from '@mui/joy/Sheet';
import Stack from '@mui/joy/Stack';
import { styled } from '@mui/joy/styles';

const SecondContainerSonHome = () => {

  const Item = styled(Sheet)(({ theme }) => ({
    ...theme.typography['body-sm'],
    textAlign: 'center',
    fontWeight: theme.fontWeight.md,
    color: theme.vars.palette.text.secondary,
    border: '1px solid',
    borderColor: theme.palette.divider,
    borderRadius: theme.radius.md,
  }));

    const [popupOpen, setPopupOpen] = useState(false);
    const popupRef = useRef(null);
  
    const openPopup = () => {
      setPopupOpen(true);
    };
  
    const closePopup = () => {
      setPopupOpen(false);
    };
  
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        closePopup();
      }
    };
  
    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

return (
    <>
    <div className="SecondContainerSonHome">

    <div className="containerStackSecondContainerSonHome">
    <Stack direction="row" spacing={1}>
    <Item>    <Button>¿Cómo encontrar empleo?</Button></Item>
    <Item>    <Button>¿Cómo publicar avisos?</Button></Item>
    <Item>    <Button onClick={openPopup}>Grupos de Whatsapp</Button></Item>
    </Stack>
    </div>
    
    </div>

    {popupOpen && (
    <div className="popup" ref={popupRef}>
    <div className="popup-content">

    <section>
        <article>
            <h2>AEGD</h2>
        </article>
        <article>
            <p>Te ofrecemos que puedas unirte a grupos de whatsapp donde difundiremos búsquedas laborales de forma semanal.</p>
            <p>MUY IMPORTANTE: Para evitar molestias hemos configurado para que sólo los administradores podamos enviar mensajes en los grupos.</p>
            <p>Esperamos te sea de ayuda.</p>
        </article>
    </section>

    <Button>Continuar</Button>
    </div>
    </div>
    )}
    </>
)
}

export default SecondContainerSonHome