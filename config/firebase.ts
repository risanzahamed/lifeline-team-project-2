import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAXDbxEO2yIdsYFge1IDaNXIQ5_ggXDhFc",
    authDomain: "next-app-project.firebaseapp.com",
    projectId: "next-app-project",
    storageBucket: "next-app-project.appspot.com",
    messagingSenderId: "561954031752",
    appId: "1:561954031752:web:53e8ad9db9b89e03faf73d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default app;