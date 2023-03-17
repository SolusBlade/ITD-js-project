import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, signIn } from "firebase/auth";
import Notiflix from 'notiflix';

import * as icons from '../images/icons.svg';

const profileBtn = document.querySelector('.header__profile-btn');
const profileMobileBtn = document.querySelector('.header__profile-btn.mob-icon');

profileBtn.addEventListener("click", getIn);
profileMobileBtn.addEventListener("click", getIn);
onUpload();

const firebaseConfig = {
  apiKey: "AIzaSyBEyxsja9Xmbt99yqe3GAmeQbiTjDFO9Ss",
  authDomain: "itd-js.firebaseapp.com",
  projectId: "itd-js",
  storageBucket: "itd-js.appspot.com",
  messagingSenderId: "506310313975",
  appId: "1:506310313975:web:c42844fb885d711c6710f2"
};

const app = initializeApp(firebaseConfig);

const authProf = getAuth(app);

async function getIn(){
    const provider = new GoogleAuthProvider();
    
    try{
        const user = await signInWithPopup(authProf, provider);
        localStorage.setItem("user", JSON.stringify(user));
        profileBtn.innerHTML=`<img
            class="profile_img"
            src="${user._tokenResponse.photoUrl}"
            alt="profile_img"
            width="40"
        />
        `;
        profileMobileBtn.innerHTML=`<img
            class="profile_img"
            src="${user._tokenResponse.photoUrl}"
            alt="profile_img"
            width="40"
        />
        `;
        onLogIn(user._tokenResponse.displayName);
        profileBtn.removeEventListener("click", getIn);
        profileBtn.addEventListener("click", getOut);
        profileMobileBtn.removeEventListener("click", getIn);
        profileMobileBtn.addEventListener("click", getOut);
    } catch(error) {

    }
}
async function getOut(){
    const userName = JSON.parse(localStorage.getItem("user"))._tokenResponse.displayName;
    onLogOut(userName);
    localStorage.removeItem("user");
    signOut(authProf);
    profileBtn.innerHTML=`
    <svg width="40" height="40" class="header__profile-ico">
        <use href="${icons}#icon-profile"></use>
    </svg>
    `
    profileMobileBtn.innerHTML=`
    <svg width="40" height="40" class="header__profile-ico">
        <use href="${icons}#icon-profile"></use>
    </svg>
    `
    profileBtn.removeEventListener("click", getOut);
    profileBtn.addEventListener("click", getIn);
    profileMobileBtn.removeEventListener("click", getOut);
    profileMobileBtn.addEventListener("click", getIn);
}

async function onUpload(){
    try{
        const user = JSON.parse(localStorage.getItem("user"));
        profileBtn.innerHTML=`<img
            class="profile_img"
            src="${user._tokenResponse.photoUrl}"
            alt="profile_img"
            width="40"
        />
        `;
        profileMobileBtn.innerHTML=`<img
            class="profile_img"
            src="${user._tokenResponse.photoUrl}"
            alt="profile_img"
            width="40"
        />
        `;
        profileBtn.removeEventListener("click", getIn);
        profileBtn.addEventListener("click", getOut);
        profileMobileBtn.removeEventListener("click", getIn);
        profileMobileBtn.addEventListener("click", getOut);
    } catch(error) {

    }
}





function onLogIn(name){
    Notiflix.Notify.success(
        `Nice to meet you ${name}!`,
        {
          timeout: 2000,
        },
      );
}
function onLogOut(name){
    Notiflix.Notify.success(
        `Good Bye ${name}!`,
        {
          timeout: 2000,
        },
      );
}