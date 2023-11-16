

import { initializeApp } from "firebase/app";
// import {	getAuth      } from "firebase/auth";
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";
import firebaseConfig from "./firebaseConfig";

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);


function uploadFile(event) {
// event.preventDefault()
const form = document.getElementById('form');
  const fileInput = document.getElementById('fileInput');
  const mail = document.querySelector("#inputEmail")

  

  const file = fileInput.files[0];

  if (file) {
    const storageRef = ref(storage, "/"+mail.value+"-"+file.name);

    uploadBytesResumable(storageRef, file)
    
  } else {
    console.error('Wybierz plik do przesłania.');
  }
  form.submit();
}


const button = document.querySelector(".btn-success")
button.addEventListener("click", uploadFile)