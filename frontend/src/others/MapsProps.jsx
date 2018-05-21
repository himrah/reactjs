import React, { Component } from 'react';
import {Toggle} from '../actions/actions'

export const mapStateToProps = state =>{
    console.log(state)
    return {
        toggle:state.toggle
    }
}

export const mapDispatchToProps=dispatch=>{
    return {
        onStClick:st=>{
            dispatch(chstate(st))
        }
    }
}
