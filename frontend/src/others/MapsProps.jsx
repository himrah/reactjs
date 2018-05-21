import React, { Component } from 'react';
import {Toggle,Gallery} from '../actions/actions'

export const mapStateToProps = state =>{
    //console.log(state)
    return {
        toggle:state.toggle,
        gallery:state.gallery
    }
}

export const mapDispatchToProps=dispatch=>{
    return {
        onStClick:st=>{
            dispatch(Toggle(st))
        },
        onGallery:st=>{
            dispatch(Gallery(st))
        }
    }
}
