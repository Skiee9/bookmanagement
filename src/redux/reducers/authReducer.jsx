import { LOGIN_USER, LOGOUT_USER, REGISTER_USER } from "../actions.js/authActions";

 const initialState ={user:null};
 export default function authReducer (state=initialState,action){
    Switch (action.type) {
        case REGISTER_USER;
        case LOGIN_USER;
      return{...state, user:action.payload};
      case LOGOUT_USER;
        return{...state, user:null};
        default
            return state;
    };

 }