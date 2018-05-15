import React from 'react'
//import { BrowserRouter as Link } from "react-router-dom"
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import  { post } from 'axios';
import {Helmet} from 'react-helmet'
import './profile.css'

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




/*
  const MY_QUERY = gql`query allPhotos{
    allPhotos {
        id
        photo
        createdDate
        comments {
          edges {
            node {
              id
              comment
              commentTime
              commentBy{
                username
                id
              }
            }
          }
        }
        uploadBy {
          id
          username
          
        }
      }
      }`
*/

const server = "http://localhost:8000/"
//const server = "http://994365fa.ngrok.io/"

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
      maxWidth:'33.3%',
      grid:3
      
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
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
//console.log(e)
this.setState({'grid':e,'maxWidth':`${100/e}%`})
}

  render(){
        let { data } = this.props
        console.log(data)
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
        var counter =0
        let l = profile_photos
        while(counter<l.length){
          var t=[]
          l.slice(counter,counter+this.state.grid).forEach(function(e){
            t.push(e)
          })
          photo_list.push(t)
          counter+=this.state.grid
        }
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
                {photo_list.map(p=><Group key={p[0].node.id} maxWidth={this.state.maxWidth} photo={p} />)}
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
            p=><Thumb key={p.node.id} mw={this.props.maxWidth} photo={p.node}/>
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
  graphql(query, queryOptions),
  //graphql(upload)
)(Profile)

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

