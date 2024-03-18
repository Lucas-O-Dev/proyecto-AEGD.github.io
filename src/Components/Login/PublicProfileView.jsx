import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { existsUsername, getProfilePhotoUrl, getUserPublicProfileInfo } from '../../../Firebase/Config'
import PublicLink from './PublicLink'

const PublicProfileView = () => {

  const params = useParams()
  const [profile, setProfile] = useState(null)
  const [url, setUrl] = useState('')
  const [state, setCurrentState] = useState(0)

  useEffect(() => {
    console.log("Ejecutando useEffect para obtener el perfil...");

    getProfile();

    async function getProfile() {
        const username = params.username;

        try {
            console.log("Buscando el UID del usuario...");
            const userUid = await existsUsername(username);

            if (userUid) {
                console.log("El usuario existe. Obteniendo información del perfil...");
                const userInfo = await getUserPublicProfileInfo(userUid);
                console.log("Información del perfil obtenida:", userInfo);

                setProfile(userInfo);

                console.log("Obteniendo la URL de la foto de perfil...");
                const url = await getProfilePhotoUrl(userInfo.profileInfo.profilePicture);
                console.log("URL de la foto de perfil obtenida:", url);

                setUrl(url);
            } else {
              setCurrentState(7)
                console.log("El usuario no existe.");
            }
        } catch (error) {
            console.error("Error al obtener el perfil:", error);
        }
    }
}, [params.username]);

if(state === 7) {
  return(
    <div>
      <h2>Username no existe</h2>
    </div>
  )
}

if (!profile) {
  return <div>Cargando...</div>;
}
  return (
    <div>

<div>
  <img src={url} alt="" style={{ width: '80px', height: '80px' }} />
</div>


      <h2>{profile.profileInfo.username}</h2>
      <h3>{profile.profileInfo.displayName}</h3>

      <div>{profile ?.linksInfo.map((link) => (
        <PublicLink key={link.docId} url={link.url} title={link.title} />
      ))}</div>
    </div>
  )
}

export default PublicProfileView