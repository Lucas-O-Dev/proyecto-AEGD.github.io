import React, { useEffect, useState } from 'react';
import { auth } from '../../../Firebase/Config'; // Importa la configuración de Firebase
import { onAuthStateChanged } from 'firebase/auth'; // Importa la función para detectar cambios en el estado de autenticación

const EmailAndNumberPhoneIsVerified = () => {
  // Estado local para almacenar si el email está verificado
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  // Estado local para almacenar si el número de teléfono está verificado
  const [isPhoneNumberVerified, setIsPhoneNumberVerified] = useState(false);

  // useEffect se usa para ejecutar código cuando el componente se monta y cuando el estado de autenticación cambia
  useEffect(() => {
    // onAuthStateChanged escucha cambios en el estado de autenticación del usuario
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Si hay un usuario autenticado, actualiza el estado con la verificación del email y el número de teléfono
        setIsEmailVerified(user.emailVerified);
        // Suponemos que si user.phoneNumber existe, el número de teléfono está verificado
        setIsPhoneNumberVerified(!!user.phoneNumber);
      } else {
        // Si no hay usuario autenticado, resetea los estados a false
        setIsEmailVerified(false);
        setIsPhoneNumberVerified(false);
      }
    });

    // Limpia el efecto para evitar fugas de memoria
    return () => unsubscribe();
  }, []); // El array vacío significa que esto solo se ejecuta cuando el componente se monta y desmonta

  return (
    <div>
      <section>
        {/* Muestra si el email está verificado o no */}
        <p>Email {isEmailVerified ? 'Verificado' : 'Sin Verificar'}</p>
        {/* Muestra si el número de teléfono está verificado o no */}
        <p>Número De Teléfono {isPhoneNumberVerified ? 'Verificado' : 'Sin Verificar'}</p>
      </section>
    </div>
  );
};

export default EmailAndNumberPhoneIsVerified;
