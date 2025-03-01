
import axios from "axios"
const initialState={
    myBooks:[],
    loading:false,
    error:null,
}

const FETCH_MY_BOOKS_REQUEST="FETCH_MY_BOOKS_REQUEST";
const FETCH_MY_BOOKS_SUCCESS="FETCH_MY_BOOKS_SUCCESS";
const FETCH_MY_BOOKS_FAILURE="FETCH_MY_BOOKS_FAILURE";

export const fetchBookd=()=>async(dispatch)=>{
    dispatch({type:FETCH_MY_BOOKS_REQUEST});
    try{
        const response=await axios.get(`https://react-app-1072b-default-rtdb.firebaseio.com/books.json`);
        const booksArray =response.data
        ? Object.keys(response.data).map((key)=>({id:key,...response.data[key]})):[];
        dispatch({type:FETCH_MY_BOOKS_SUCCESS,payload:booksArray});
    }catch(error){
        dispatch({type:FETCH_MY_BOOKS_FAILURE,payload:error});
    }
}


const bookReducer=(state= initialState, action)=>{
    switch(action.type){
        case FETCH_MY_BOOKS_REQUEST:
            return{...state, loading:true};

        case FETCH_MY_BOOKS_SUCCESS:
            return{...state, loading:false, myBooks:action.payload};

            case FETCH_MY_BOOKS_FAILURE:
                return{...state, loading:false,error:action.payload};

                default:
                    return state;
    }
};
export default bookReducer