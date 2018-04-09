import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './Nav.css';
import Link from 'next/link'
//import Style from 'react-style-tag'
//import Main from './Main';
//import Login from './Login'
//import Registration from './Registration'
//import Async from 'react-code-splitting'
//import About from '../About'
//import img from './Images/'
//import notify from  './Images/notify.png' 
//import profile from  './Images/profile.png'
//import msg from  './Images/msg.png'
//import logout from  './Images/logout.png'
//import Profile from './Profile'
import { Helmet } from 'react-helmet'
import Loadable from 'react-loadable'
//import Comb from '../src/base/Comb'
//import Msg from '../src/base/Msg'
//import Main from './Main'
//import { Comb } from './Comb';

//const Profile = () => <Async load={import('./Profile')}/>

//const Main = () => <Async load={import('./Comb')}/>
const Loading = () => <div>Loading...</div>;


//const Registration = () => <Async load={import('./Registration')}/>



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
//9667558662

class Nav extends React.Component{
    render(){
        //var token=localStorage.getItem('token')
        const style={
            'height':'20px',
            'maxWidth':'20px',
            'minWidth':'20px'
        }
        return(
            <nav className="nav">
                <div className="navdiv">
                    <div className="brand">
                        <span className="header_font">
                           <span style={{color:'black'}}>
                            <Link href="/"><b>Fasigner</b></Link>
                            </span>
                        </span>    
                    </div>
                    <div className="profile_info">         
                        <span className="top_p"><Link href='/user/ajay'>Proflle</Link></span>
                        <span className="top_p"><Link href="/message">Message</Link></span>
                        <span className="top_p"><Link href="/notify/">Notify</Link></span>
                        <span className="top_p"><Link href="#" onClick={this.logout} >Logout </Link></span>
                    </div>
                </div>
            </nav>

/*
            <div>
            <span style={{color:'orange'}}>
            <Link href="/about">Fasigner</Link>
            </span>
            <div>Nav</div>
            </div>*/
        )
    }
}
export default Nav;