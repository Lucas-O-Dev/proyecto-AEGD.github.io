// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore,
collection,
addDoc,
getDocs,
doc,
getDoc,
query,
where,
setDoc,
deleteDoc } from "firebase/firestore"

import {getStorage,
ref,
uploadBytes,
getDownloadURL,
getBytes }
from "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyD0HON9hSYePH1gTZivGbjedh4QyLPpNfA",
  authDomain: "proyecto-aegd.firebaseapp.com",
  projectId: "proyecto-aegd",
  storageBucket: "proyecto-aegd.appspot.com",
  messagingSenderId: "16911335662",
  appId: "1:16911335662:web:6dbdcf1eb44aa0639e33ff",
  measurementId: "G-J5X6Z4LCLS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const db = getFirestore(app)

export const storage = getStorage(app)

export async function userExists (uid) {
  const docRef = doc(db, 'users', uid)
  const res = await getDoc(docRef)
  return res.exists()
}

export async function existsUsername (username) {
  const users = []
  const docsRef = collection(db, 'users')
  const q = query(docsRef, where ('username', '==', username ))

  const querySnapshot = await getDocs(q)

  querySnapshot.forEach(doc => {
    users.push(doc.data())
  })

  return users.length > 0 ? users[0].uid : null
}

export async function registerNewUser (user) {
  try{
    const collectionRef = collection (db, 'users')
    const docRef = doc(collectionRef, user.uid)
    await setDoc(docRef, user)
  } catch (error){

  }
}

export async function updateUser(user) {
  try {
    const collectionRef = collection(db, "users");
    const docRef = doc(collectionRef, user.uid);
    await setDoc(docRef, user);
    console.log("User document updated successfully");
  } catch (error) {
    console.error("Error updating user document:", error);
    throw error; // Re-lanzar el error para que pueda ser manejado donde sea que se llame a esta función
  }
}

export async function getUserInfo(uid) {
  try{
    const docRef = doc(db, 'users', uid )
    const document = await getDoc(docRef)
    return document.data()
  } catch (error) {}
}

export async function insertNewLink(link) {
  try {
    const docRef = collection(db, 'links')
    const res = await addDoc(docRef, link)
    return res
  } catch (error) {
    console.error(error)
  }
}

export async function getLinks (uid){

  const links = []
try {
const collectionRef = collection(db, 'links')
const q = query (collectionRef, where('uid', '==', uid))
const querySnapshot = await getDocs(q)

querySnapshot.forEach((doc)=>{
  const link = {...doc.data()}
  link.docId = doc.id
  links.push(link)
})

return links

} catch (error) {
  console.error(error)
}
}

export async function updateLink (docId, link) {
  try {
    const docRef = doc(db, 'links', docId)
    const res = await setDoc(docRef, link)
    return res
  } catch (error) {
    console.error(error)
  }
}

export async function deleteLink (docId) {
  try {
    const docRef = doc(db, 'links', docId)
    const res = await deleteDoc(docRef)

    return res
  } catch (error) {
    console.log(error)
  }
}

export async function setUserProfilePhoto(uid, file) {
  try {
    const imageRef = ref(storage, `images/${uid}`);
    const resUpload = await uploadBytes(imageRef, file);
    const downloadUrl = await getDownloadURL(imageRef);

    if (resUpload && downloadUrl) {
      return { resUpload, downloadUrl }; // Devuelve tanto la respuesta de carga como la URL de descarga
    } else {
      throw new Error("Error al cargar la imagen o al obtener la URL de descarga");
    }
  } catch (error) {
    console.error(error);
    throw new Error("Error al cargar la imagen al almacenamiento de Firebase");
  }
}



export async function getProfilePhotoUrl(profilePicture){
  try {
    const imageRef = ref(storage, profilePicture)

    const url = await getDownloadURL (imageRef)
    return url
  } catch (error) {
    console.log(error)
  }
}

export async function getUserPublicProfileInfo(uid) {
  const profileInfo = await getUserInfo(uid)
  const linksInfo = await getLinks(uid)

  return{
    profileInfo: profileInfo,
    linksInfo: linksInfo
  }
}

export async function logout () { 
  await auth.signOut()
}