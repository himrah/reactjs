import React from 'react'
import Link from 'next/link'
import Nav from './Nav'
//import notify from  './Images/notify.png' 
//import profile from  './Images/profile.png'
//import msg from  './Images/msg.png'
//import logout from  './Images/logout.png'
//export default({children})=>
/*
class Layout extends React.Component{
render(){
    var token=true
    return(*/
class Layout extends React.Component{
    render(){
        const style={
            'height':'20px',
            'maxWidth':'20px',
            'minWidth':'20px'
        }
        let token=true
        return(
                <span>
                <Nav />
{/*                    <nav className="nav">
                        <div className="navdiv">
                            <div className="brand">
                                <span className="header_font">            
                                    <Link to="/"><span style={{color:'black'}}><b>Fasigner</b></span> </Link>
                                </span>
                            </div>
                        { token ? (
                            <div className="profile_info">         
                            <span className="top_p"><Link href='/user/ajay'>Profile</Link></span>
                            <span className="top_p"><Link href='/message'>Msg</Link></span>
                            <span className="top_p"><Link href='/notify'>Notify</Link></span>
                            </div>
                            ): (
                                <div className="profile_info">                    
                                <span className="top_p"><Link href="/login">Login</Link></span>
                                </div>
                            )

                        }
                        </div>
                    </nav> */}
                    <div>This is layout {this.props.children}</div>
                </span>
        )
    }
}

export default Layout
/*export default({children})=>
        <div>
            <nav className="nav">
                <div className="navdiv">
                    <div className="brand">
                        <span className="header_font">
                            <Link href="/"><span style={{color:'black'}}><b>Fasigner</b></span> </Link>
                        </span>
                    </div>
                { token ? (
                    <div className="profile_info">
                    <span className="top_p"><Link href='/user/ajay'>Profile </Link></span>
                    <span className="top_p"><Link herf="/message">Message</Link></span>
                    <span className="top_p"><Link href="/notify/">Notify</Link></span>
                    <span className="top_p"><Link href="#" onClick={this.logout} >Logout </Link></span>
                    </div>
                    ): (
                        <div className="profile_info">
                        <span className="top_p"><Link to="/login">Login</Link></span>
                        </div>
                    )

                }
                </div>
            </nav>
            <main>
                { children }
            </main>
        </div>*/
/*    )
    }
}*/
//export default ({children})=>Layout
