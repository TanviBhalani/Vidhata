import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

export const sendMessageToFirebase = async ({ name, email, message }) => {
  return await addDoc(collection(db, "messages"), {
    name,
    email,
    message,
    createdAt: new Date()
  });
};

