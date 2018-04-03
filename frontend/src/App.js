import React, { Component } from 'react';
import Async from 'react-code-splitting'
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Login = () => <Async load={import('./base/Login')}/>
const Nav = () => <Async load={import('./base/Nav')}/>

/*class P extends Component{
  render() {
    return(
      <div>
      lkjsdlkf
      </div>
    )
  }
}*/

class Container extends Component{
  render() {
    var token=localStorage.getItem('token')
    
    //console.log(localStorage)
    //console.log(token)
    /*if(token==null){
      console.log("sdlkfjlksdf")
      window.location.replace('/login')
    }*/
    //console.log(token)
    return (
    <div>
      { token ? (
        <Nav />
      ): (
        <Login />
      )
      }
    </div>
    );
  }
}



class App extends Component {
  render(){
    return <Container />
  }
}

export default App;
