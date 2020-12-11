import axios from 'axios';
export const START_FETCH="START_FETCH"
export const FETCH_SMURFS="FETCH_SMURFS"
export const FETCH_ERROR="FETCH_ERROR"
export const ADD_SMURF="ADD_SMURF"

export const fetchSmurfs=()=>dispatch=>{

    dispatch ({type:START_FETCH})
    
    axios
    .get ("http://localhost:3333/smurfs")
    .then (resp=>{
        console.log(resp.data)
        dispatch({type:FETCH_SMURFS, payload:resp.data})
    })
    .catch(err=>{
        console.log("error",err)
        dispatch({type:FETCH_ERROR,payload:err})
    })

}

export const addSmurf=(smurf)=>dispatch=>{
    dispatch( {type:ADD_SMURF, payload:smurf})
}



//Task List:
//1. Add fetch smurfs action: 
//              - fetch and return initial list of smurfs
//              - dispatch actions that indicate if we are waiting for a server response
//              - dispatch an error text action if an error is returned from the server
//2. Add add smurf action:
//              - dispatch an error text action if smurf data does not includes a name, nickname and position field
//              - send a post request with the smurf as body to see if there is an error
//              - dispatch add smurf action if request is successful
//              - dispatch an error text action if an request returns an error
//3. Add set error text action:
//              - return action object setting error text
//4. Any other actions you deem nessiary to complete application.