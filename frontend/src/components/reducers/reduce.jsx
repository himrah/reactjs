//import * as raction from '../actions/reduceaction'

//import {initialState} from '../actions/actions'

/*export const reducer=(state=initialState,action)=>{
    switch(action.type){
        case 'none':
            state.toggle = action.toggle
            break;
            //return {...state,toggle:'initial'}
            //return Object.assign({},state,{toggle:'initial'})
        case 'initial':
            state.toggle = action.toggle
            break;
            //return {...state,toggle:'none'}
            //return Object.assign({},state,{toggle:'none'})
        default :
            return state.toggle
    }
    //return state;
}*/

import { combineReducers } from 'redux'
import {Change_Gallery,Change_Toggle,Change_User} from '../actions/actions'


const User = (state='',action)=>{
    switch(action.type){
        case Change_User: return action.value
        default : return state;
    }
}

const Toggle = (state='',action)=>{
    switch(action.type){
        case Change_Toggle: return action.value
            //break;
            //console.log(action.value.newstate)
        //case 'another': return action.toggle
        default:
            return state
    }
}

const Gallery = (state={},action)=>{
  switch (action.type) {
    case Change_Gallery:return action.value
    default: return state
  }
}
//var allreducer = combineReducers({Gallery:Gallery,Toggle:Toggle})


const allreducer = combineReducers(
    {  Gallery:Gallery,
      Toggle:Toggle,
      User:User
    }
    )


export default allreducer
//export default reducer;
