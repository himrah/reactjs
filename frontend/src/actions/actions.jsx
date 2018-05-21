//export const ABC = "none"

/*export const initialState = {
    type:'initial',
    toggle : 'none',
}*/

export const Toggle =(newstate)=> {
    return{
        type:"Change",
        toggle:newstate,
    }
}
