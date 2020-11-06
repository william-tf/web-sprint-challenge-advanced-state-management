import axios from 'axios';

export const FETCH_SUCCESSFUL = 'FETCH_SUCCESSFUL'
export const FETCH_FAILED = 'FETCH_FAILED'
export const POST_SUCCESSFUL = 'POST_SUCCESSFUL'
export const POST_FAILED = 'POST_FAILED'



export const getSmurf = () => dispatch => {
    axios.get('http://localhost:3333/smurfs')
    .then(res =>
        dispatch({type:FETCH_SUCCESSFUL, payload:res.data}))
        .catch(err => dispatch({type:FETCH_FAILED, payload:err}))
}


export const postSmurf = (smurf) => dispatch =>{
    axios.post('http://localhost:3333/smurfs', smurf)
    .then(res =>
        dispatch({type:POST_SUCCESSFUL, payload:res.data}))
    .catch(err => dispatch({type:POST_FAILED, payload:err}))
}