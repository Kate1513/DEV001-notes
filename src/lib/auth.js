import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

export const signUpUser = (email, password) => {
    const uid = createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => userCredential.user.uid)
      .catch((error) => {
        const errorCode = error.code;
        throw new Error(errorCode);
      });
    return uid;
  };

