import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount("#app");

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBb0lFkLYAXLUEL7QE1XflfoSk4ddW8sA0",
  authDomain: "agentzhao-me.firebaseapp.com",
  databaseURL: "https://agentzhao-me-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "agentzhao-me",
  storageBucket: "agentzhao-me.appspot.com",
  messagingSenderId: "820658337259",
  appId: "1:820658337259:web:72f80c785c9231ed5415ae",
  measurementId: "G-FQJHM8B9LM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);