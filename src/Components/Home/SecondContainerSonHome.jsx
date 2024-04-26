import React, { useState, useRef, useEffect } from 'react'
import './_secondcontainersonhome.scss'

const SecondContainerSonHome = () => {

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
    <section>
    <button onClick={openPopup}>Grupos de Whatsapp</button>
    <button>¿Cómo encontrar empleo?</button>
    <button>¿Cómo publicar avisos?</button>
    </section>
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

<button>Continuar</button>
    </div>
    </div>
    )}
    </>
)
}

export default SecondContainerSonHome