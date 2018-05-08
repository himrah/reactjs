
import React from 'react';
//import {  Link } from "react-router-dom";
//import '../static/logincss.css'
import './logincss.css'
import {post} from 'axios'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
//import About from '../About'

const query = gql`query user{
    currentUser{
      id
      username
      firstName
      lastName
    }
  }`

class Login extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            username :'',
            password :'',
            //count : 0
            //uid : localStorage.token
        }
    }    


    componentWillUpdate(nextProps) {
        //console.log(localStorage)
        //console.log(nextProps)
        if (!nextProps.data.loading && nextProps.data.currentUser === null) {
          localStorage.setItem("user",nextProps.data.currentUser)
          //window.location.replace('/login/')
        }
      }    

    updateInput = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    } 
 

  handleSubmit(e) {
    //alert("workd")
    //e.preventDefault()
    //alert(this.state.username+this.state.password)
  

    e.preventDefault()
   /* fetch('http://localhost:8000/api-token-auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username: this.state.username, password: this.state.password})

    })*/
    var server = "http://localhost:8000/api-token-auth/"
    const config={
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    }
    post(server,{username: this.state.username, password: this.state.password},config)
    .then(res => {
        //alert(res.data.token)
          if (res.data.token) {
            //console.log(res.data.token)
            localStorage.setItem('token', res.data.token)
            window.location.replace('/')
          }
          else{
              alert('Username or Password is wrong')
          }
        })
      .catch(err => {
        alert('Username or password is wrong')
      })
       
    
    }
    render(){
        return(
        <main className="main-login">
            <section className="section-login">
            <div className="login_box">
                <form ref={ref => (this.form = ref)}  onSubmit={e => this.handleSubmit(e)}>
                        <div>
                            <input type="text"  value={this.state.userame}  name="username" placeholder="Username" className="form-control" id="username"    onChange={this.updateInput}/>
                        </div>
                        <div>
                        <input type="password" value={this.state.password} name="password" placeholder="Password" className="form-control" id="password"  onChange={this.updateInput}/>
                        </div>
                        <input type="submit" className="btn" value="login"/>
                        
                        <div className="optional">
                            <div className="signup">
                                
                                <span className="_sup">
                                {/*}
                                <Link to="/registration">Sign Up</Link>*/}
                                </span>
                            </div>
                            <div className="forget">
                                <span className="_fgps">
                                {/*<Link to="#">Forget Password ?</Link>*/}
                                </span>
                            </div>
                        </div>
                    
                </form>
            </div>
            </section>
            
        </main>
        )
    }
}
Login = graphql(query)(Login)
export default Login
