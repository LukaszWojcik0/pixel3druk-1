

import { initializeApp } from "firebase/app";
// import {	getAuth      } from "firebase/auth";
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";
import firebaseConfig from "./firebaseConfig";

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);
console.log(storage)


function uploadFile(event) {
event.preventDefault()
  const fileInput = document.getElementById('fileInput');
  const mail = document.getElementById('inputEmail');
  console.log (fileInput)
  const file = fileInput.files[0];
  console.log(file);
  if (file) {
    const storageRef = ref(storage, "/"+mail.textContent+"-"+file.name);

    uploadBytesResumable(storageRef, file)
  } else {
    console.error('Wybierz plik do przesłania.');
  }
}


const button = document.querySelector(".btn-success")
button.addEventListener("click", uploadFile)