import { GoogleAuthProvider,signInWithPopup, signOut } from "firebase/auth";
import {auth} from  "/firebase/firebaseConfig"


const initialState={
    user:JSON.parse(localStorage.getItem("user")) || null,

};

const SET_USER="SET_USER";
const LOGOUT="LOGOUT";

export const loginWithGoogle =()=>async (dispatch)=>{
    try{
        const provider= new GoogleAuthProvider();
        const result=await auth.signInWithPopup(auth,provider)
        localStorage.setItem("user", JSON.stringify(result.user));
        dispatch({type:SET_USER, payload:result.user})
    }catch(error){
       console.log("Login failed:",error)
        }
    }


    export const logout=()=>async (dispatch)=>{
        await signOut(auth);
        localStorage.removeItem("user");
        dispatch({type:LOGOUT})
    }



    export default function authReducer(state=initialState,action){
        switch(action.type){
            case SET_USER:
                return {...state,user:action.payload};
                case LOGOUT:
                    return {...state, user:null};
                    default:
                        return state;

    }
}
