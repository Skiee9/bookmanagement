

const initialState={
    myBooks:[],
    loading:false,
    error:null,
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