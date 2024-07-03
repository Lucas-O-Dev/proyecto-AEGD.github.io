// import React, { useState, useEffect, useRef } from 'react';
// import { auth } from '../../../Firebase/Config';
// import PhoneInput from 'react-phone-input-2';
// import './StylesLogin/_phonesignin.scss';
// import { Input } from '@mui/material';
// import Button from '@mui/material/Button'
// import 'react-phone-input-2/lib/style.css';
// import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

// const PhoneSignin = () => {
//     const [phone, setPhone] = useState('');
//     const [user, setUser] = useState(null);
//     const [code, setCode] = useState('');
//     const recaptchaVerifierRef = useRef(null);

//     useEffect(() => {
//         // Instancia de RecaptchaVerifier
//         recaptchaVerifierRef.current = new RecaptchaVerifier('recaptcha', {
//             'size': 'invisible',
//             'callback': () => { },
//             'expired-callback': () => { },
//         }, auth);

//         // Limpiar el reCAPTCHA cuando el componente se desmonte
//         return () => {
//             if (recaptchaVerifierRef.current) {
//                 recaptchaVerifierRef.current.clear();
//             }
//         };
//     }, []);

//     const SendCode = async () => {
//         try {
//             if (!recaptchaVerifierRef.current) return;

//             // Enviar el código de verificación al número de teléfono
//             const confirmation = await signInWithPhoneNumber(auth, phone, recaptchaVerifierRef.current);
//             setUser(confirmation);
//         } catch (error) {
//             console.error('Error al enviar el código de verificación:', error);
//         }
//     };

//     const verifyCode = async () => {
//         try {
//             if (!user) {
//                 console.error('No hay usuario para verificar el código.');
//                 return;
//             }
//             // Confirmar el código de verificación
//             const credential = await user.confirm(code);
//             console.log('Credencial de autenticación:', credential);
//         } catch (error) {
//             console.error('Error al verificar el código:', error);
//         }
//     };

//     return (
//         <div className='phone-signin'>
//             <div>
//                 <PhoneInput
//                     country={'ar'}
//                     value={phone}
//                     onChange={(phone) => setPhone("+" + phone)}
//                 />
// <Button onClick={SendCode}>Enviar</Button>            </div>
//             <Input type="text"  placeholder='Escribir código' onChange={(e) => setCode(e.target.value)} />
// <Button onClick={verifyCode} size='small'>Verificar código</Button>            {/* Recaptcha */}
//             <div id="recaptcha"></div>
//         </div>
//     );
// };

// export default PhoneSignin;
