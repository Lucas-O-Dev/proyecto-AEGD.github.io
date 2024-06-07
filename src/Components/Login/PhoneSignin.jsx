import React, { useState } from 'react';
import { auth } from '../../../Firebase/Config';
import PhoneInput from 'react-phone-input-2';
import './StylesLogin/_phonesignin.scss';
import 'react-phone-input-2/lib/style.css';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

const PhoneSignin = () => {
    const [phone, setPhone] = useState('');
    const [user, setUser] = useState(null);
    const [code, setCode] = useState('');

    // Instancia de RecaptchaVerifier
    const recaptchaVerifier = new RecaptchaVerifier('recaptcha', {
        'size': 'invisible',
        'callback': () => { },
        'expired-callback': () => { },
    });

    const SendCode = async () => {
        try {
            // Enviar el código de verificación al número de teléfono
            const confirmation = await signInWithPhoneNumber(auth, phone, recaptchaVerifier);
            setUser(confirmation);
        } catch (error) {
            console.error('Error al enviar el código de verificación:', error);
        }
    };

    const verifyCode = async () => {
        try {
            if (!user) {
                console.error('No hay usuario para verificar el código.');
                return;
            }
            // Confirmar el código de verificación
            const credential = await user.confirm(code);
            console.log('Credencial de autenticación:', credential);
        } catch (error) {
            console.error('Error al verificar el código:', error);
        }
    };

    return (
        <div className='phone-signin'>
            <div>
                <PhoneInput
                    country={'ar'}
                    value={phone}
                    onChange={(phone) => setPhone("+" + phone)}
                />
                <button onClick={SendCode}>Enviar</button>
            </div>
            <input type="text" placeholder='Escribir código' onChange={(e) => setCode(e.target.value)} />
            <button onClick={verifyCode}>Verificar código</button>
            {/* Recaptcha */}
            <div id="recaptcha"></div>
        </div>
    );
};

export default PhoneSignin;
