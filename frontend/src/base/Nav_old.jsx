import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './Nav.css';
//import Style from 'react-style-tag'
//import Main from './Main';
//import Login from './Login'
//import Registration from './Registration'
//import Profile from './Profile'
//import Main from './Main'
import Loadable from 'react-loadable'

const Loading = () => <div>Loading...</div>;

const Main = Loadable({
    loader: () => import('./Main'),
    loading : Loading
})

const Profile = Loadable({
    loader: () => import('./Profile'),
    loading : Loading
})

class Nav extends Component{
    render(){
        return(
            <Router>
                <span>
                    <Link to="/">Home</Link>
                    <Link to="/user/ajay">Profile</Link>
                    <Route exact path="/user/:userName" component={Profile}/>
                    <Route exact path="/" component={Main}/>
                </span>
            </Router>
        )
    }
}
/*import Loadable from 'react-loadable'

const Loading = () => <div>Loading...</div>;

const Main = Loadable({
    loader: () => import('./Comb'),
    loading : Loading
})

const Login = Loadable({
    loader: () => import('./Login'),
    loading : Loading
})

const Registration = Loadable({
    loader: () => import('./Registration'),
    loading : Loading
})


class Nav extends Component{
    render(){
        return(
            <Router><span>
            
            <nav className="nav">
            <div className="navdiv">
                <div className="brand">
                    <span className="header_font">
                    
                        <Link to="/home"><span style={{color:'orange'}}>Fasigner</span></Link>
                    
                    </span>
                </div> 
                <div className="profile_info" >
                    <span className="top_p"><Link to="/home">Home</Link></span>
                    <span className="top_p"><Link to="/upload">Upload</Link></span>
                    <span className="top_p"><Link to="/user/ajay">Ajay</Link></span>
                    <span className="top_p"><Link to="/logout">Logout</Link></span>
                    <span className="top_p"><Link to="/login">Login</Link></span>
                </div>
                
            </div>
            </nav>
            <Switch>
            <Route exact path="/user/:userName" component={Profile}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/home" component={Main}/>
            <Route exact path="/registration" component={Registration} />
            </Switch>
        </span>   
        </Router>
        )
    }
}*/
export default Nav;