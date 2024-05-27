import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

export const createUser = async (email, password) => {
  console.log("create user triggered");
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    console.log("User created successfully:", user);

    // Send email verification
    try {
      const emailVerification = await sendEmailVerification(user);
      console.log("Email verification sent:", emailVerification);
    } catch (verificationError) {
      console.error("Error sending email verification:", verificationError);
    }

    return res; // Return the response if needed
  } catch (error) {
    console.error("Error while registering user:", error);
    throw error; // Make sure to rethrow the error to trigger the catch block in the calling function
  }
};

export const loginUser = async(email, password) => {
    try{
        const res = await signInWithEmailAndPassword(auth, email, password);
        console.log("loginRes", res)
    } catch(error) {
        console.log(error)
        throw error
    }
}
