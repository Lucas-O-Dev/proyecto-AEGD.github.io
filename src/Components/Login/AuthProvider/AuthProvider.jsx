import React, { useEffect, useState } from 'react'
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth'
import { auth, getUserInfo, registerNewUser, userExists } from '../../../../Firebase/Config'

import {useNavigate} from 'react-router-dom'


const AuthProvider = ({children,
     onUserLoggedIn,
      onUserNotLoggedIn,
      onUserNotRegistered
    }) => {

    const [ state, setCurrentState ] = useState(0)

    const navigate = useNavigate ()

    useEffect(() => {


        onAuthStateChanged(auth, async (user) => {
          if (user) {
            const isRegistered = await userExists (user.uid)
            if (isRegistered) {
              const userInfo = await getUserInfo(user.uid)
              if(userInfo.processCompleted){
              //todo:reedirigir a Dashboard
              onUserLoggedIn(userInfo)
              }else {
                onUserNotRegistered(userInfo)
              }

            } else {
              await registerNewUser ({
                uid: user.uid,
                displayName: user.displayName,
                profilePicture:"",
                username:"",
                processCompleted: false,
              })
              //todo: reedirigir a usuarios
                onUserNotRegistered(user)
            }
      
            setCurrentState(3)
      
            console.log (user.displayName)
          }
          else {
            onUserNotLoggedIn()
          }
        })
      },[navigate])
  return (
    <div>{children}</div>
  )
}

export default AuthProvider