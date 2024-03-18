import { useEffect, useRef, useState } from "react";
import {
  setUserProfilePhoto,
  updateUser,
  getProfilePhotoUrl,
} from "../../../Firebase/Config";
import DashboardWrapper from "./DashboardWrapper";
import { useNavigate } from "react-router-dom";
import AuthProvider from "./AuthProvider/AuthProvider";

export default function EditProfile() {
  const ref = useRef(null);
  const [profileUrl, setProfileUrl] = useState(undefined);
  const [currentUser, setCurrentUser] = useState(null);
  const [state, setCurrentState] = useState()

  let navigate = useNavigate();

  function handleOnClickProfilePicture() {
    ref.current.click();
  }

  async function handleOnChangeProfileImage(e) {
    try {
      console.log("Handling profile image change...");
  
      var fileList = e.target.files;
      var fileReader = new FileReader();
  
      if (fileReader && fileList && fileList.length) {
        fileReader.readAsArrayBuffer(fileList[0]);
        fileReader.onload = async function () {
          try {
            console.log("File loaded successfully");
  
            var imageData = fileReader.result;
  
            const res = await setUserProfilePhoto(currentUser.uid, imageData);
  
            if (res && res.resUpload && res.downloadUrl) {
              const tmpUser = { ...currentUser };
              tmpUser.profilePicture = res.resUpload.metadata.fullPath;
              setCurrentUser({ ...tmpUser });
              await updateUser(currentUser);
              setProfileUrl(res.downloadUrl);
              console.log("Profile picture URL updated:", res.downloadUrl);
            } else {
              console.error("Error updating profile picture: Response or metadata is undefined");
            }
            
          } catch (error) {
            console.error("Error updating profile picture:", error);
          }
        };
      }
    } catch (error) {
      console.error("Error handling profile image change:", error);
    }
  }
  

  async function handleOnUserLoggedIn(user) {
    setCurrentUser(user);
    const url = await getProfilePhotoUrl(user.profilePicture);
    setProfileUrl(url);
    setCurrentState(2)
  }

  function handleOnUserNotLoggedIn() {
    navigate("/login");
  }

  return (
    <AuthProvider
      onUserLoggedIn={handleOnUserLoggedIn}
      onUserNotLoggedIn={handleOnUserNotLoggedIn}
    >
      <DashboardWrapper>
        <div>
          <h2>Edit Profile Info</h2>
          <div>
            <div>
              <img src={profileUrl} alt="" width={100} />
            </div>
            <div>
              <button onClick={handleOnClickProfilePicture}>
                Choose new profile picture
              </button>
              <input
                ref={ref}
                type="file"
                onChange={handleOnChangeProfileImage}
                style={{ display: 'none' }}
              />
            </div>
          </div>
        </div>
      </DashboardWrapper>
    </AuthProvider>
  );
}