import React from 'react'
import { useEffect, useState } from 'react'
import { app, database } from "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function Dashboard() {
    const [isLogin, setIsLogin] = useState(false);
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setIsLogin(true);
        console.log('login', user)
        // ...
      } else {
        setIsLogin(false);
        // User is signed out
        // ...
        console.log('login out')
      }
    });
    // signOut(auth).then(() => {
    //   // Sign-out successful.
    // }).catch((error) => {
    //   // An error happened.
    // });
  return (
    <div>dashboard</div>
  )
}
