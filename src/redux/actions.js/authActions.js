
// import { create } from "domain"


import {auth} from "./firebase/firebaseConfig";
import {signInWithEmailAndPassword, createUserWithEmailAndPassword,signOut} from 'firebase/auth'

export const REGISTER_USER="REGISTER_USER"
export const LOGIN_USER="LOGIN_USER"
export const LOGOUT_USER="LOGOUT_USER"
// export const SET_USER="SET_USER"

export const registerUSer=(email,password)=>async (dispatch)=>{
    try{
        const userCredential = await  createUserWithEmailAndPassword(auth, email, password);
        dispatch({type:REGISTER_USER, payload: userCredential.user});
    }catch(error){
        console.log("email registration is must",error);
    }
}

export const loginUSer= (email, password)=>async(dispatch)=>{
    try{
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        dispatch({type:LOGIN_USER, payload: userCredential.user});

    }catch(error){
        console.log("invalid email or password",error);
    }
}
export const logoutUser=()=>async (dispatch)=>{
    try{
        await signOut(auth);
        dispatch({type:LOGOUT_USER,payload:''});
    }catch(error){
        console.log("unable to logout",error)
    }
}
// export const setUser=(user)=>(dispatch)=>{
//     try{
//         dispatch({type:SET_USER,payload:user})
//     }
// }