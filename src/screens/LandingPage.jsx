//vendor
import React from 'react'
//components
import { NavBar } from '../components/navBars/NavBar'
//firebase



export const LandingPage = (history) => {

        // const resp = await firebase
        // .auth()
        // .signInWithPopup(googleAuthProvider)
        // .then((hola) => ({
        //   name: hola.user.displayName,
        //   email: hola.user.email,
        //   uid: hola.user.uid,
        // }));
        // return resp
    
    return (
        <div className="Landing">
            <NavBar history={history}/>
        </div>
    )
} 
