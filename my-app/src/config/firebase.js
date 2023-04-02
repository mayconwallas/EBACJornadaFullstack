import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore/lite';
const firebaseConfig = {
  apiKey: "AIzaSyCpODPZoTIsQPcjr83EJnJcliZKBDVTbf4",
  authDomain: "tiktok-ebac-estudos.firebaseapp.com",
  projectId: "tiktok-ebac-estudos",
  storageBucket: "tiktok-ebac-estudos.appspot.com",
  messagingSenderId: "572265543823",
  appId: "1:572265543823:web:e7c6d6c013c6818ce798fa"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;