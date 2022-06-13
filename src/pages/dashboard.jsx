import React from 'react'
import { useEffect, useState } from 'react'
import { app, database } from "../firebase";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged,signOut } from "firebase/auth";

export default function Dashboard() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setIsLogin(true);
        console.log('login')
      } else {
        // User is signed out
        setIsLogin(false);
        console.log('login out')
        navigate('/login', { replace: true });
      }
    });
  },[])

    // signOut(auth).then(() => {
    //   // Sign-out successful.
    //   console.log('signout')
    // }).catch((error) => {
    //   // An error happened.
    // });
  return (
    <div>dashboard</div>
  )
}
