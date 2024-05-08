import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth"
import { auth } from "./firebase"

export const createUser = async(email, password) => {
    console.log("triggered")
    console.log("email", email)
    console.log("Password", password)
    try{
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user
        console.log("res", res)
        console.log("user", user)
        const emailVerification = await sendEmailVerification(user);
        console.log("emailVerification", emailVerification)
        return res
    } catch(error) {
        console.log("error while registering user", error)
    }
} 