
import React from 'react';
//import {  Link } from "react-router-dom";
//import '../static/logincss.css'
import './logincss.css'
import {post} from 'axios'
import { graphql, Query, compose } from 'react-apollo'
import gql from 'graphql-tag'
import client from '../connection'
import { mapStateToProps, mapDispatchToProps } from './others/MapsProps'
import {connect} from 'react-redux'
import { User } from './actions/actions';
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
        this.handleSubmit = this.handleSubmit.bind(this)
    }    


/*    componentWillUpdate(nextProps) {
        //console.log(localStorage)
        console.log(this.props)
        console.log(`from cwp ${nextProps}`)
        if (!nextProps.data.loading && nextProps.data.currentUser === null) {
          localStorage.setItem("user",nextProps.data.currentUser)
          //window.location.replace('/login/')
        }
    }*/
       
      componentWillReceiveProps(nextProps) {
          console.log(nextProps)
          /*if(nextProps.data.currentUser){
            this.props.dispatch(User({
                username:nextProps.data.currentUser.username,
                first_name:nextProps.data.currentUser.first_name,
                last_name:nextProps.data.currentUser.last_name,
                user_id:nextProps.data.currentUser.id,
            }))              
          }*/

      }

componentDidUpdate(prevProps, prevState) {
    //console.log(this.props.data)
    let nextProps = this.props
    if(this.props.data.currentUser){
        
        this.props.dispatch(User({
            username:nextProps.data.currentUser.username,
            first_name:nextProps.data.currentUser.first_name,
            last_name:nextProps.data.currentUser.last_name,
            user_id:nextProps.data.currentUser.id,
        }))              
      }
}

/*        shouldComponentUpdate = (nextProps, nextState) => {
        let shouldUpdate = this.props.sdata !== nextProps.data;
          console.log(`next ${nextProps} and p ${nextState} `)
        return shouldUpdate
        }
  */      

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
        if (res.data.token) {
            
            console.log(res.data)
            localStorage.setItem('token', res.data.token)
            this.props.data.refetch()
            console.log(this.props.data)
            
/*            client.query({
                query:query
            }).then(res=>
            console.log(res))
            console.log(res.data)
            //localStorage.setItem('token', res.data.token)
            //window.location.replace('/')*/

        }
          else{
              console.log('Username or Password is wrong')
          }
        })
      .catch(err => {
        console.log('wrong'+err)
      })
       
    
    }
    render(){
        console.log(this.props)
        return(
        <main className="main-login">
            <section className="section-login">
            <div className="login_box">
                <form ref={ref => (this.form = ref)}  onSubmit={this.handleSubmit}>
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
const queryOptions = {
    options: props => ({
        variables: {
        
        },
    }),
    }

export default compose(
    connect(mapStateToProps),
    graphql(query)
)(Login)
