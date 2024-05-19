import React, { useState } from 'react'
import {auth} from '../../../Firebase/Config'
import PhoneInput from 'react-phone-input-2'
import './StylesLogin/_phonesignin.scss'
import 'react-phone-input-2/lib/style.css'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'

const PhoneSignin = () => {

  const [phone, setPhone] = useState ('')
  const [user, setUser] = useState(null)
  const [code, setCode] = useState("")

  const SendCode = async () => {
    try {
      const recaptcha = new RecaptchaVerifier('recaptcha', {
        'size': 'invisible',
        'callback': () => {},
        'expired-callback': () => {},
      });
      const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha);
      setUser(confirmation);
    } catch (error) {
      console.error(error);
    }
  };
  

  const verifyCode = async () => {
     try {
      const data = await user.confirm(code)
      console.log(data)
     } catch (error) {
      console.error(error)
     }
  }

  return (
    <div className='phone-signin'>
      <div>
      <PhoneInput
         country={'ar'}
         value={phone}
         onChange={(phone) => setPhone ("+" + phone)}   
         />

        <button onClick={SendCode}>Send</button>
        
      </div>
      <input type="text" placeholder='Escribir código' onChange={(e) => setCode(e.target.value)} />
      <button onClick={verifyCode} >verificar código</button>
    </div>
  )
}

export default PhoneSignin