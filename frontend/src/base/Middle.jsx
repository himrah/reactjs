import React from 'react';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import Article from './Article';
import Article from './Article';
//import Middle from './Middle';

//const Article = () => <Async load={import('./Article')}/>

class Middle extends React.Component{
    render(){
        return(
            <div className="mid">
            <Article />
            </div>
        )
    }
}
export default Middle;