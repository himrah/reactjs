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


const reducer = (state,action)=>{
  switch (action.type) {
    case 'Change':return action
    default: return state
  }
}
