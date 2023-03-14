import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const profileBtn = document.querySelector('.header__profile-btn');

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
        const user = await signInWithPopup(authProf, provider)
        console.log(user);
    } catch(error) {
        console.log(error);
    }
}
profileBtn.addEventListener("click", getIn);