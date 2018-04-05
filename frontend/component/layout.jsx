import React from 'react'
import Link from 'next/link'
//export default({children})=>
/*
class Layout extends React.Component{
render(){
    var token=true
    return(*/
var token=true
export default({children})=>
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
        {/*                    <span className="top_p"><Link to="/logout">Logout</Link></span>
                        <span className="top_p"><Link to="/login">Login</Link></span>*/}
                    </div>
                </nav>


            <main>
                { children }
            </main>
        </div>
/*    )
    }
}*/
//export default ({children})=>Layout