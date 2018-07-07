import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, } from "react-router-dom";
import './Nav.css';
import {withRouter} from 'react-router'
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
//import $ from 'jquery'
import Loading from '../loading'
import Create from './Create'
//import Main from './Main'
//import { Comb } from './Comb';

//const Profile = () => <Async load={import('./Profile')}/>

//const Main = () => <Async load={import('./Comb')}/>
//const Loading = () => <div>Loading...</div>;
//import {Provider} from 'react-redux'

import { mapStateToProps,mapDispatchToProps } from './others/MapsProps'
import {connect} from 'react-redux'



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

/*const Login = Loadable({
    loader:() => import('./Login'),
    loading : Loading
})*/

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
    constructor(props){
        super(props);
        
        this.state = {
            /*inputcomment : '',
            keyset : '',
            comments : [],
            cmt_endcursor:'',
            hasNextPage:'',
            id:'',*/
            show:'initial',
            pcontent:'op'
            //hasNextPage : this.props.pageInfo.hasNextPage,
            //cursor : this.props.pageInfo.endCursor,
            //uid : localStorage.token
        }
        //this.updateInput = this.updateInput.bind(this);
        //this.handleClick = this.handleClick.bind(this);
    }    
    
    logout(){
        localStorage.removeItem('token')
        window.location.replace('/')
    }
    
    render(){
        //var token=localStorage.getItem('token')
        
        var token=true
        const style={
            'height':'20px',
            'maxWidth':'20px',
            'minWidth':'20px'
        }
        console.log(this.props)
        //console.log(this.props.toggle)
        return(
            
                <Router onUpdate={()=>window.scrollTo(0,0)}>
                    <span className="m_con">  
                        <Helmet>
                            <title>Fasigner</title>
                        </Helmet>
                    <nav className="nav">
                        <div className="navdiv">
                            <div className="brand">
                                <span className="header_font">            
                                    <Link to="/"><span style={{color:'orange'}}>NiXiS</span> </Link>
                                </span>
                            </div>
                        { token ? (
                            <div className="profile_info _on_top">         
                            {/*<span className="top_p"><Link to='/'><span className="homeT"></span></Link></span>*/}
                            
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
                      
                <Route exact path="/" component={Main}/>
                <Route path="/notify/" component={Interest}/>
                <Route path="/logout" component={Logout}/>
                <Route path="/message/" component={Msg}/>
                <Route path="/:userName/create" component={Create}/>
                <Route path="/:userName" component={Profile}/>
                <Route path="/registration" component={Registration} />
                
                <div className="dropdown">
                    <div className="dropdown-content" style={{display:'none'}}>
                            <div>Share External</div>
                            <div>Full size image</div>
                            <div>Copy Link</div>
                            <div>Report</div>
                    </div>    
                </div>

                <nav className="btm_nav">
                        <div className="btm_navdiv">
                        { token ? (
                            <div className="profile_info _on_bottom">
                            <span className="top_p" style={{color:'black',fontFamily: 'BLKCHCRY',fontSize:'30px'}}><Link to="/">N</Link></span>
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
            </span>   
            </Router>
        
        )
    }
}
//export default Nav
export default connect(mapStateToProps,mapDispatchToProps)(Nav);