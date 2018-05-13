import React, { Component } from 'react';
//import Async from 'react-code-splitting'
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Loadable from 'react-loadable'
//const Login = () => <Async load={import('./base/Login')}/>
//const Nav = () => <Async load={import('./base/Nav')}/>
import Loading from './loading'

const Login = Loadable({
  loader: () => import('./base/Login'),
  loading : Loading
})

const Nav = Loadable({
  loader: () => import('./base/Nav'),
  loading : Loading
})

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
    //var token=true
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
