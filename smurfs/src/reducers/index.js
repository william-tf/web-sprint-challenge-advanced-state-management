import {FETCH_SUCCESSFUL, FETCH_FAILED, POST_SUCCESSFUL, POST_FAIL} from '../actions'




const initialState = {
    smurfs:[],
    newSmurf:{
        name: '',
        age: '',
        height:'',
        error:''
    }
}




export const reducer = (state = initialState, action) =>{
    switch(action.type){
            case FETCH_SUCCESSFUL:
                return{
                    ...state,
                    smurfs: action.payload,
                    newSmurf:action.payload
                }
        case FETCH_FAILED:
            return{
                ...state,
                error:action.payload
            }
            case POST_SUCCESSFUL:
                return{

                }
        default:
            return state;
    }
}