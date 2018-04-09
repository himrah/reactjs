import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './Nav.css';
//import Link from 'next/link'
//import Style from 'react-style-tag'
//import Main from './Main';
//import Login from './Login'
//import Registration from './Registration'
//import Async from 'react-code-splitting'
//import About from '../About'
//import img from './Images/'
import notify from  './Images/notify.png' 
import profile from  './Images/profile.png'
import msg from  './Images/msg.png'
import logout from  './Images/logout.png'
//import Profile from './Profile'
import { Helmet } from 'react-helmet'
import Loadable from 'react-loadable'

//import Main from './Main'
//import { Comb } from './Comb';

//const Profile = () => <Async load={import('./Profile')}/>

//const Main = () => <Async load={import('./Comb')}/>
const Loading = () => <div>Loading...</div>;

const Main = Loadable({
    loader: () => import('./Main'),
    loading : Loading
})


const Interest = Loadable({
    loader: () => import('./Interest'),
    loading : Loading
})


const Profile = Loadable({
    loader:() => import('./Profile'),
    loading : Loading
})


const Msg = Loadable({
    loader:() => import('./Msg'),
    loading : Loading
})


//const Main = () => <Async load={import('./Main')}/>

//const Login = () => <Async load={import('./Login')}/>
const Login = Loadable({
    loader:() => import('./Login'),
    loading : Loading
})

//const Registration = () => <Async load={import('./Registration')}/>
const Registration = Loadable({
    loader:() => import('./Registration'),
    loading : Loading
})



class Logout extends React.Component{
    render(){
        //localStorage.setItem('token','null')
        //localStorage.removeItem('token')
        localStorage.removeItem('token')
        return(
            window.location.replace('/')
        )
    }
}


class Nav extends React.Component{
    logout(){
        localStorage.removeItem('token')
        window.location.replace('/')
    }
    render(){
        var token=localStorage.getItem('token')
        const style={
            'height':'20px',
            'maxWidth':'20px',
            'minWidth':'20px'
        }
        return(
            <Router>
                <span>  
                    <Helmet>
                        <title>Fasigner</title>
                    </Helmet>
                <nav className="nav">
                    <div className="navdiv">
                        <div className="brand">
                            <span className="header_font">            
                                <Link to="/"><span style={{color:'black'}}>Fasigner</span> </Link>
                            </span>
                        </div>
                    { token ? (
                        <div className="profile_info">         
                        <span className="top_p"><Link to='/ajay'><img className="logo" style={style} src={profile} alt="sdf"  /> </Link></span>
                        <span className="top_p"><Link to="/message"><img src={msg} alt="sdf" className="logo" style={style} /> </Link></span>
                        <span className="top_p"><Link to="/notify/"><img src={notify} alt="sdf" className="logo" style={style} /> </Link></span>
                        <span className="top_p"><Link to="#" onClick={this.logout} ><img src={logout} alt="sdf" className="logo" style={style} /> </Link></span>
                        </div>
                        ): (
                            <div className="profile_info">                    
                            <span className="top_p"><Link to="/login">Login</Link></span>
                            </div>
                        )

                    }
    {/*                    <span className="top_p"><Link to="/logout">Logout</Link></span>
                        <span className="top_p"><Link to="/login">Login</Link></span>*/}
                    </div>
                </nav>          
            <Switch>      
            <Route exact path="/" component={Main}/>
            <Route path="/notify/" component={Interest}/>
            <Route path="/logout" component={Logout}/>
            <Route path="/message/" component={Msg}/>
            <Route path="/:userName" component={Profile}/>
            
            <Route path="/registration" component={Registration} />
            </Switch>
        </span>   
        </Router>
        )
    }
}
export default Nav;