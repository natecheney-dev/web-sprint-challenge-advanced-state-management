import axios from 'axios';

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.


export const START_FETCH = "START_FETCH";
export const SUCCESS_FETCH = "SUCCESS_FETCH";
export const FAIL_FETCH = "FAIL_FETCH";
export const ADD_SMURF = "ADD_SMURF";


export const fetchSmurfs = () => dispatch => {
    console.log('dispatched');

    dispatch(startFetch());

    axios.get("http://localhost:3333/smurfs")
        .then(resp=> {
            dispatch(successFetch(resp.data))
        })
        .catch(err => {
            dispatch(failFetch(err))
        });
}


export const startFetch = ()=> {
    return ({type:START_FETCH});
}

export const successFetch = (smurf)=> {
    console.log("smurf",smurf)
    return ({type:SUCCESS_FETCH, payload:smurf});
}

export const failFetch = (error)=> {
    return ({type:FAIL_FETCH, payload:error});
}

export const addSmurf = (item) => {
    
    axios.post("http://localhost:3333/smurfs", item)
        .then (resp =>{
            console.log('post', resp);
        })
        .catch (resp =>{
            console.log('fail:', resp)
        })
        return({type:ADD_SMURF, payload:item})

    
}