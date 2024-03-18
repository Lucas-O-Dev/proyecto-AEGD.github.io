import React, { useState } from 'react'
import AuthProvider from './AuthProvider/AuthProvider'
import { Link, useNavigate} from 'react-router-dom'
import { existsUsername, updateUser } from '../../../Firebase/Config'

const ChooseUserNameView = () => {

  const [ state, setState ] = useState(0)
  const[currentUser, setCurrentUser] = useState({})
  const [username, setUsername] = useState ('')

  const navigate = useNavigate ()

  const handleUserLoggedIn = (user) => {
    navigate('/Dashboard')
      }
    
      const handleUserNotRegistered = (user) => {
        setCurrentUser(user)
        setState(3)
      }
      
      const handleUserNotLoggedIn = () => {
        navigate('/login')
      }

      const handleInputUsername = (e) => {
        setUsername(e.target.value)
      }

      const handleContinue = async () => {
        if (username != ""){
          const exists = await existsUsername(username)
          if(exists){
            setState(5)
          } else {

            const tmp = {...currentUser}
            tmp.username = username
            tmp.processCompleted = true
            await updateUser(tmp)
          }
        }
      }

if(state === 3 || state === 5) {
  return <div>
    <h2>Bienvenido{currentUser.displayName}</h2>
    <p>Para terminar el proceso elige un nombre de usuario.</p>
    {state === 5 ? <p>El nombre de usuario ya existe</p> : ""}
    <div>
      <input type="text" onChange={handleInputUsername} />
    </div>

    <div>
      <button onClick={handleContinue}>Continuar</button>
    </div>
  </div>
}

if (state === 6) {
  return <div>
    <h2>Felicidades ya puedes ir al dashboard</h2>
    <Link to='/dashboard'>Continuar</Link>
  </div>
}
  return (
    <AuthProvider
    onUserLoggedIn={handleUserLoggedIn}
    onUserNotRegistered={handleUserNotRegistered} 
    onUserNotLoggedIn={handleUserNotLoggedIn}>

    </AuthProvider>
  )
}

export default ChooseUserNameView