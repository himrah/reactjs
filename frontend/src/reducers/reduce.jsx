//import * as raction from '../actions/reduceaction'
const initialState = {
    toggle : 'none',
}
export default (state=initialState,action)=>{
    switch(action.type){
        case 'none':
            //return {...state,toggle:'initial'}
            return Object.assign({},state,{toggle:'initial'})
        case 'initial':
            //return {...state,toggle:'none'}
            return Object.assign({},state,{toggle:'none'})
        default :
            return state
    }
    
}