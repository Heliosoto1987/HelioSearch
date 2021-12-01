//firebase
import { firebase } from '../firebase/firebase-config';

export const startRegisterWithEmailPassword = async (email, password, name) => {
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
    } catch (error) {
        alert(error)
    }

}

export const startLoginWithEmailPassword = async (email, password) => {
    try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
    } catch (error) {
        alert(error)
    }

}