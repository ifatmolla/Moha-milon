import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import { auth } from "../firebase_init";

export const AuthContext = createContext(null);

const Authprovider = ({ children }) => {
    // createUser ফাংশনটি আগে ডিক্লেয়ার করুন
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };


   const singinUser = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password)
   }

    // তারপর authinfo অবজেক্ট তৈরি করুন
    const authinfo = {
        name: 'nodi sagor',
        createUser, // এখানে createUser ফাংশন রেফারেন্স দিন
        singinUser,
    };

    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;
