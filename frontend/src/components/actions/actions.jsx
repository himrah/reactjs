//export const ABC = "none"

/*export const initialState = {
    type:'initial',
    toggle : 'none',
}*/
export const Change_Gallery = "gallery:UpdateGallery"
export const Change_Toggle = "gallery:UpdateToggle"

export const Toggle =(newstate)=> {
    return{
        type:Change_Toggle,
        value:newstate,
    }
}

export const Gallery =(newstate)=> {
    return{
        type:Change_Gallery,
        value:
        {
            grid:newstate.grid,
            width:newstate.width
        },
    }
}

export const initialState = {
  Gallery:
    {
      grid:3,
      width:'300px'
    },
  Toggle:'none'
}