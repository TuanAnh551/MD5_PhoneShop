// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVDLhDkjsJNI3l97DU9mONV60JASOfokA",
  authDomain: "java-75075.firebaseapp.com",
  projectId: "java-75075",
  storageBucket: "java-75075.appspot.com",
  messagingSenderId: "596834806177",
  appId: "1:596834806177:web:edcffb86efbdd12fd283e0",
  measurementId: "G-EMPYD4HQXR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const fireBaseFn = {
  uploadToStorage: async (
    file: File,
    fallBackUrl: string = "https://firebasestorage.googleapis.com/v0/b/java-75075.appspot.com/o/ngoisao.jpg?alt=media&token=af773d40-c7fc-4afd-b664-2861beb18d4a"
  ) => {
    try {
      const typeFile = `.${file.type.split("/")[1]}`;
      const fileName = `picture_${Math.ceil(
        Date.now() * Math.random()
      )}${typeFile}`;

      const storage = getStorage(app);
      const storageRef = ref(storage, fileName);
      console.log("toi day file", file);
      const res = await uploadBytes(storageRef, file);
      console.log("toi day");
      const url = await getDownloadURL(res.ref)
        .then((res) => res)
        .catch((err) => {
          console.log("err 1", err);
          return fallBackUrl;
        });
      return url;
    } catch (err) {
      console.log("err 2", err);
      return fallBackUrl;
    }
  },
};
