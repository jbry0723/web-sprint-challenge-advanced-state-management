import{START_FETCH,FETCH_SMURFS,FETCH_ERROR,ADD_SMURF} from "../actions/index"

export const initialState = {
    smurfs:[],
    loading:false,
    Error:""
}

export const reducer = (state=initialState, action)=>{
    switch(action.type){
        case(START_FETCH):
            return({...state,
            loading:true})
        case(FETCH_SMURFS):
            return({...state,
            smurfs:action.payload,
            loading:false})
        case(FETCH_ERROR):
            return({...state,
            loading:false,
            Error:action.payload})
        case(ADD_SMURF):
        return({...state,
            smurfs:[...state.smurfs, action.payload]})
        

        default:
            console.log("default case occuring")
            return state;
    }
}

export default reducer;

//Task List:
//1. Add in the initialState needed to hold: 
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//2. Setup your reducer to take the state and action as peremeters
//3. Add in cases to your reducer to handle:
//      - The start of an api call
//      - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
//      - Setting Error Text
//      - Any other state changes you see as necessary