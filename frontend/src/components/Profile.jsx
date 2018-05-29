import React from 'react'
//import { BrowserRouter as Link } from "react-router-dom"
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import  { post } from 'axios';
import {Helmet} from 'react-helmet'
import './profile.css'
import { Gallery } from "./actions/actions"
import { mapStateToProps,mapDispatchToProps } from './others/MapsProps'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Map,fromJS} from 'immutable'

/*
mutation abc(
  $id:ID!,
  $website:String!,
  $first_name:String!
	$last_name:STring!
  $twitter:String!
  $fb:String!
  $instagram:String!
  $about:String!
  $dob:String!
){
  updateInfo(	
    website:$website,
    userId:$id
    firstName:$first_name
    lastName:$last_name
    twitter:$twitter
    fb:$fb instagram:$instagram about:$about dob:$dob
  ){
    formErrors{
      
    }
    info{
      firstName
      lastName
    }
  }
}

*/





const query = gql`query user($username:String!)
{
  users(username:$username){
    id
    username
    firstName
    lastName
    profile{
      id
      about,
      birthDay
      website
      fb
      instagram
      twitter
    }
		profilePic{
      id
      profileOriginal
      profileThumbs
      profilePhoto
    }
    photos{
      pageInfo{
        startCursor
        endCursor
      }
      edges{
        node{
          id
          originalPhoto
          photo
          thumbs
        }
      }
    }
  }
}
  `

const updateinfo = gql`mutation UpdateInfo($user_id: ID!, $website: String!, $first_name: String!, $last_name: String!, $twitter: String!, $fb: String!, $instagram: String!, $about: String!, $dob: String!) {
  updateInfo(website: $website, userId: $user_id, firstName: $first_name, lastName: $last_name, twitter: $twitter, fb: $fb, instagram: $instagram, about: $about, dob: $dob) {
    formErrors
    status
  }
}
`

class Edit extends React.Component{
  constructor(props){
    super(props);
      this.state = {
        user:[],
        users:[],
        us:'ajay',
        user_id:''
    }
  }
  componentDidMount = () => {
    
    //const user = fromJS({name:'ajay',contact:{mobile:90}})
    const user = fromJS(this.props.info.users) 
    console.log(this.props.info.users)
    console.log(user.get('profile').get('about'))
    this.setState(
      {
        user:user,
        users:this.props.info.users,
        user_id:this.props.info.users.id
      }
    )
  }
  handlechange(e){
    //console.log(e.target.name)
    //console.log(Map(this.state.user).get('firstName'))
    let user = Map(this.state.user)
    /*this.setState({
      user:this.state.user
    })*/  
    switch(e.target.name){
      case 'first_name':this.setState({user:user.set('firstName',e.target.value)});break;
      case 'last_name':this.setState({user:user.set('lastName',e.target.value)});break;
      case 'birthDay':this.setState({user:user.setIn(['profile','birthDay'],e.target.value)});break;
      case 'about':this.setState({user:user.setIn(['profile','about'],e.target.value)});break;
      case 'website':this.setState({user:user.setIn(['profile','website'],e.target.value)});break;
      case 'twitter':this.setState({user:user.setIn(['profile','twitter'],e.target.value)});break;
      case 'insta':this.setState({user:user.setIn(['profile','instagram'],e.target.value)});break;
      case 'fb':this.setState({user:user.setIn(['profile','fb'],e.target.value)});break;
      default:break
    }
  }
  handlesubmit(e){
    e.preventDefault()
    let user = e.target
    this.props.mutate(
      {
        variables:{
        user_id:this.state.user_id,
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
    }).catch(err=>{
      console.log(err)
    })
  }

  render(){

    console.log(this.state.user)
    let user = Map(this.state.user)
    return(
      <article>
        <form onSubmit={this.handlesubmit.bind(this)} >
        First Name : <input type="text" name="first_name" value={user.get('firstName')} onChange={this.handlechange.bind(this)}/>
        Last Name : <input type="text" value={user.get('lastName')} name="last_name" onChange={this.handlechange.bind(this)}/>
        Date of Birthday : <input type="date" value={user.getIn(['profile','birthDay'])} name="birthDay" onChange={this.handlechange.bind(this)}/>
        About : <textarea value={user.getIn(['profile','about'])} onChange={this.handlechange.bind(this)} name="about"/>
        website : <input type="text" value={user.getIn(['profile','website'])} name="website" onChange={this.handlechange.bind(this)}/>
        twitter <input type="text" name="twitter" value={user.getIn(['profile','twitter'])} onChange={this.handlechange.bind(this)}/>
        Instagram <input type="text" name="insta" value={user.getIn(['profile','instagram'])} onChange={this.handlechange.bind(this)}/>
        Facebook <input type="text" name="fb" value={user.getIn(['profile','fb'])} onChange={this.handlechange.bind(this)}/>        
        <button type="submit" name="submit" className="edit">Sumit</button>
      </form>
      </article>
    )
  }
}


const server = "http://localhost:8000/"
//const server = "http://cf792ff7.ngrok.io/"

class Thumb extends React.Component{
  constructor(props){
    super(props);
      this.state = {
        //maxWidth : '33.3%',
        grid : 3,
        //comments : []
    }
  }
  render()
  {
    const style = {
      'maxWidth':this.props.mw,
      'padding':'2px'
    }
    //console.log(this.props.Gallery.Gallery.gallery)
    //console.log(this.props)
    let img = server+this.props.photo.thumbs
    //let img = "http://localhost:8000/"+this.props.photo.node.thumbs
    return(
      <div className="thm" style={style}>
        <img className="thumbimg" src={img} alt="pho" />   
      </div>
    )
  }
}




class Profile extends React.Component{
  constructor(props) {
    super(props);
    this.state ={
      //file:null
      maxWidth:'33%',
      grid:3,
      isedtable:true,
      edit:'none',
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
  }
  
  componentDidMount = () => {
    console.log(this.props)
    this.setState(
      {
        grid:this.props.Gallery.grid,
        maxWidth:this.props.Gallery.width
      }
    )
    //this.setState()
  }
    
  onFormSubmit(e){
    e.preventDefault()
    this.fileUpload(this.state.file).then((response)=>{
      console.log(response.data);
    }).catch(function(error){
      console.log(error) 
    })
  }

  
  
  onChange(e){
    this.setState({file:e.target.files[0]})
  }
  
  fileUpload(file){
    const url = 'http://localhost:8000/api/post/';
    //const url = 'http://example.com/file-upload';
    const formData = new FormData();
    formData.append('original_photo',file)
    //console.log(file)
    const token = localStorage.getItem('token')
    const config = {
        headers: {
            'content-type': 'multipart/form-data',
            'authorization': `JWT ${token}`,
            
            //'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
            //'validateStatus':201,
          }
    }
    //console.log(formData)
    return  post(url, formData,config)
}
changeWidth(e){

this.props.dispatch(Gallery({grid:e,width:`${100/e}%`}))
this.setState({'grid':e,'maxWidth':`${100/e}%`})
}
ShowEditInfo(){
  if (this.state.edit=='none')
  {
    this.setState({edit:'initial'})
  }
  else{
    this.setState({edit:'none'})
  }
}
  render(){

        let { data, mutate } = this.props
        //console.log(data)
        if (data.loading || !data.users) {
          return <div>Loading...</div>
        }

        const style={
          'borderRadius': '50%',
        }
        const profile_photos = this.props.data.users.photos.edges;
        //console.log(profile_photos)
        //var l = []
        var photo_list=[]
        var counter = 0
        let l = profile_photos
        while(counter<l.length){
          var t=[]
          l.slice(counter,counter+this.state.grid).forEach(function(e){
            t.push(e)
          })
          photo_list.push(t)
          counter+=this.state.grid
        }
        //console.log(this.props)
        //console.log(photo_list)
        return(
          <main className="main">      
          <Helmet>
          <title>Profile</title>
          </Helmet>  
            <section className="top">
              <div className="profile">
              <div className="pfile">
                  <span className="fl_rw">
                    <div className="information">
                    { data.users.profile ?(
                      <div className="personal">
                          
                          <div className="fl_rw">
                            <span className="unm">{data.users.firstName + " " +data.users.lastName}</span>
                            <span className="_un">(@{data.users.username})</span>
                          </div>
                          <div className="_about">
                            {data.users.profile.about}
                          </div>
                          <button className="edit" onClick={this.ShowEditInfo.bind(this)}>Edit Profile</button>
                      </div>
                    ) : (
                      <div className="p">
                      </div>
                    )
                    }
                  
                  </div>
                  <div className="container">
                      {/*}
                      <img style={style} src={ "http://localhost:8000/photos/"+data.users.profilePic.profileThumbs} alt="profile"/>
                      */}
                      <div className="uprf">
                      <img style={style} src={ server+data.users.profilePic.profileThumbs} alt="profile"/>
                      <div className="overlay"></div>
                      </div>
                      {
                      /*
                      <input type="file" className="in" name="profile_pic" onChange={this.onChangePost}/>
                      */
                      }
                    </div>                  
                  </span>                  
                  </div>
              </div>

{/*}              <div className="info">
                    { data.users.profile ?(
                      <div className="personal">
                          <div>
                            username : {data.users.username}
                          </div>
                          <div>
                            Name : {data.users.firstName + " " +data.users.lastName}
                          </div>
                          <div>
                            Birthday : {data.users.profile.birthDay}
                          </div>                                
                      </div>
                    ) : (
                      <div className="personal">
                      </div>
                    )
                    }
                  
                <div className="input">
                  <form onSubmit={this.onFormSubmit}>
                    <input type="file" onChange={this.onChange}/>
                    <button type="submit">Upload</button>
                  </form>
                </div>  
            </div>
   */}

            </section>
            <section className="edit_info" style={{display:this.state.edit}}>
              <Edit info={data} mutate = {mutate}/>
              </section>
            <section className="slide">
                    <div className="fl_rw sl_sec">
                        <div><span  className="li" >All(232)</span></div>
                        <div><span  className="li" >Photos(44)</span></div>
                        <div><span  className="li" >Blogs(5)</span></div>
                        <div><span  className="li" >Documents(3)</span></div>
                        <div><span  className="li" >Videos(10)</span></div>
                        <div><span  className="li" >Presentations(1)</span></div>
                        <div><span  className="li" >Another</span></div>
                    </div>
            </section>
            <section className="slide">
              <div className="fl_rw ch_op">
                <span  onClick={(e)=>this.changeWidth(3)}>3</span>
                <span  onClick={(e)=>this.changeWidth(4)}>4</span>
                <span  onClick={(e)=>this.changeWidth(5)}>5</span>
              </div>
            </section>
            <section className="bottom">
            {/*
              <div className="box">
                <div className="group">
                  {profile_photos.map(p=><Thumb key={p.id} photo={p} />)}
                </div>
              </div>
            */}
            <div className="p_cont">
            {   
              <div className="_row">
                {photo_list.map(p=><Group key={p[0].node.id} Gallery={this.props} maxWidth={this.state.maxWidth} photo={p} />)}
              </div>
            }
            </div>    
            </section>
          </main>
        )
    }
}


class Group extends React.Component{
  /*constructor(props){
    super(props);
    this.state={
      'maxWidth':'33.3%'
    }
  }*/
  render(){
    //console.log(this.props.photo)
    //const mw = this.props.maxWidth
    return(
      <div className="fl_rw _group">
        {
          this.props.photo.map(
            p=><Thumb key={p.node.id} Gallery={this.props} mw={this.props.maxWidth} photo={p.node}/>
          )
        }
      </div>
    )
  }  
}

const queryOptions = {
  options: props => ({
    variables: {
      username: props.match.params.userName,
    },
  }),
}

export default compose(
  connect(
    (state)=>({
      Gallery:state.Gallery,
      //onGallery:state.onGal
    })
  ),
  graphql(query,queryOptions),
  graphql(updateinfo)
)(Profile)
//export default comp(Profile)
//export default graphql(query,queryOptions)(Profile)

/*
export default compose(
  connect(mapStateToProps,mapDispatchToProps),
  graphql(query, queryOptions),
  //graphql(upload)
)(Profile)
*/
//var a=this.props.match.params.userName

/*const upload = gql`mutation abc(){
  img(
    )
  {
    formErrors
  }
}
`*/


//DetailView = graphql(query, queryOptions)(DetailView)
//export default DetailView



/*
export default compose(
  graphql(MY_QUERY),
  graphql(UpdateComment)
)(Article)
Profile = graphql(query)(Profile)
export default Profile;
*/




/*
const query = gql`query user($username:String!){
    users(username:$username){
      id,
      username
      firstName,
      lastName
      photos{
        edges{
          node{
            id,
            thumbs
            photo
            originalPhoto
          }
        }
      }
      profile{
        id
        birthDay
        profilePic{
          id
          profileThumbs
        }
      }
    }
  }


*/






/*  onSubmit(e){
    e.preventDefault()
    //console.log(this.props)
    //const url = 'http://localhost:8000/api/post/';
    //const formData = new FormData();
    //formData.append('file',file)    
    this.fileUpload(this.state.file).then((response)=>{
      console.log(response.data);
    }).catch(function(error){
      console.log(error)
    })    
  }
*/

/*
  fileUpload(file){
    //console.log(file)
    const url = 'http://localhost:8000/api/post/';
    let formData = new FormData();
    //formData.append('original_photo',file)
    formData.append('file',file)
    //formData.get("original_photo")
    const token = localStorage.getItem('token')
    const config = {
        headers: {
            'content-type': 'multipart/form-data',
            'authorization': `JWT ${token}`, 
            'Accept': 'application/json'
        }
    }
    //console.log(formData.get("original_photo"))
    return  post(url, formData.get('file'),config)
    //return  post(url, formData.get("original_photo"),config)
  }



*/

  /*profileupdate(file){
    const url = 'http://localhost:8000/api/profilepic/';
    const formData = new FormData();
    formData.append('original_photo',file)
    const token = localStorage.getItem('token')
    const config = {
        headers: {
            'content-type': 'multipart/form-data',
            'authorization': `JWT ${token}` 
        }
    }
    return  put(url, formData,config)
  }*/


/*
  onChange(e){
    this.setState({file:e.target.files[0]})
  }
*/
/*  onChangePost(e){
    //this.setState({file:e.target.files[0]})
    let file = e.target.files[0]
    console.log(file)
    const url = 'http://localhost:8000/api/profilepic/'+localStorage;
    const formData = new FormData();
    formData.append('original_photo',file)
    const token = localStorage.getItem('token')
    const config = {
        headers: {
            'content-type': 'multipart/form-data',
            'authorization': `JWT ${token}` 
        }
    }
    return  put(url, formData,config)
  }*/

