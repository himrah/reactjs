import React from 'react';
import {connect} from 'react-redux'
import {mapStateToProps} from './others/MapsProps'
import gql from 'graphql-tag'
import { User } from "./actions/actions"
import { graphql, compose } from 'react-apollo'


const updateinfo = gql`mutation UpdateInfo($user_id: ID!, $website: String!, $first_name: String!, $last_name: String!, $twitter: String!, $fb: String!, $instagram: String!, $about: String!, $dob: String!) {
    updateInfo(website: $website, userId: $user_id, firstName: $first_name, lastName: $last_name, twitter: $twitter, fb: $fb, instagram: $instagram, about: $about, dob: $dob) {
      formErrors
      status
    }
  }
  `

class Edit extends React.Component{

    handlechange(e){
        //let user = Map(this.state.user)
        this.props.view(e)
        switch(e.target.name){

            case 'first_name':this.props.dispatch(User({first_name:e.target.value}));break;
            case 'last_name':this.props.dispatch(User({last_name:e.target.value}));break;
            case 'birthDay':this.props.dispatch(User({dob:e.target.value}));break;
            case 'about':this.props.dispatch(User({about:e.target.value}));break;
            case 'website':this.props.dispatch(User({website:e.target.value}));break;
            case 'twitter':this.props.dispatch(User({twitter:e.target.value}));break;
            case 'insta':this.props.dispatch(User({instagram:e.target.value}));break;
            case 'fb':this.props.dispatch(User({fb:e.target.value}));break;            
            default:break
        }
      }
      handlesubmit(e){
        e.preventDefault()
        let user = e.target
        this.props.mutate(
          { 
            variables:{
            user_id:this.props.User.user_id,
            first_name:user.first_name.value,
            last_name:user.last_name.value,
            about:user.about.value,
            dob:user.birthDay.value,
            website:user.website.value,
            twitter:user.twitter.value,
            fb:user.fb.value,
            instagram:user.insta.value,
          }
        }).then(res=>{
          console.log(res)
          this.props.view({show:'none'})
        }).catch(err=>{
          console.log(err)
        })
      }

    render(){
        console.log(this.props)
        let user = this.props.User
        console.log(user)
        return(
            <article>
            {
              <form onSubmit={this.handlesubmit.bind(this)}>
              <div>
                First Name : <input type="text" className="input" name="first_name" value={user.first_name} onChange={this.handlechange.bind(this)}/>
              </div>
              <div>
                Last Name : <input type="text" className="input" value={user.last_name} name="last_name" onChange={this.handlechange.bind(this)}/>
              </div>
              <div>
                Date of Birthday : <input type="date" className="input" value={user.dob} name="birthDay" onChange={this.handlechange.bind(this)}/>
              </div>
              <div>
                About : <textarea value={user.about} className="input" onChange={this.handlechange.bind(this)} name="about"/>
              </div>
              <div>
                website : <input type="text" value={user.website} className="input" name="website" onChange={this.handlechange.bind(this)}/>
              </div>
              <div>
               twitter <input type="text" name="twitter" className="input" value={user.twitter} onChange={this.handlechange.bind(this)}/>
              </div>
              <div>
                Instagram <input type="text" name="insta" className="input" value={user.instagram} onChange={this.handlechange.bind(this)}/>
              </div>
              <div>
                Facebook <input type="text" name="fb" className="input" value={user.fb} onChange={this.handlechange.bind(this)}/>
              </div>
            <button type="submit" name="submit" className="edit">Sumit</button>
            </form>
        
          }
      
            </article>
        )
    }
}
//export default connect(mapStateToProps)(Edit)
export default compose(
    /*connect(
      (state)=>({
        Gallery:state.Gallery,
      })
    ),*/
    /*connect(mapStateToProps,mapDispatchToProps),*/
    connect(mapStateToProps),
    //graphql(query,queryOptions),
    graphql(updateinfo)
  )(Edit)