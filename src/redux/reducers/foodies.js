import { GET_ITEMS } from "../actions";

const initialState={
    items:[],
    item:{}
}

const foodies=(state=initialState,action)=>{

    switch(action.type){
        case GET_ITEMS:
            return {
                ...state,
                items:action.payload
            }
        default:
            return  state;
    }


}


export default foodies;