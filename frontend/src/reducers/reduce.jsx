//import * as raction from '../actions/reduceaction'

import {initialState} from '../actions/actions' 
export const reducer=(state=initialState,action)=>{
    switch(action.type){
        case 'none':
            state.toggle = action.value
            break;
            //return {...state,toggle:'initial'}
            //return Object.assign({},state,{toggle:'initial'})
        case 'initial':
            state.toggle = action.value
            break;
            //return {...state,toggle:'none'}
            //return Object.assign({},state,{toggle:'none'})
        default :
            return state
    }
    return state;
    
}