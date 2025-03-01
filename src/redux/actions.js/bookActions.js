import {
    FETCH_MY_BOOKS_REQUEST,
    FETCH_MY_BOOKS_SUCCESS,
    FETCH_MY_BOOKS_FAILURE
} from './actionTypes'
import axios from "axios"

// for fetching the books
export const fetchMyBooks = (userId) => async (dispatch)=>{
    dispatch({type: FETCH_MY_BOOKS_REQUEST});
    try{
        const response = await axios.get(`https://react-app-1072b-default-rtdb.firebaseio.com/users/${userId}/myBooks.json`);
        const books = response.data ? Object.keys(response.data).map((key)=>({
            id: key,
            ...response.data[key],
        })):[];
        dispatch ({ type:FETCH_MY_BOOKS_SUCCESS,payload:books});
    }catch(error){
        dispatch({type: FETCH_MY_BOOKS_FAILURE,payload:error.message});
    }
}