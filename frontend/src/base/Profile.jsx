import React from 'react'
//import { BrowserRouter as Link } from "react-router-dom"
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import  { post, put } from 'axios';
import {Helmet} from 'react-helmet'
import './profile.css'
//var a=this.props.match.params.userName

/*const upload = gql`mutation abc(){
  img(
    )
  {
    formErrors
  }
}
`*/

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

const query = gql`query user($username:String!)
{
  users(username:$username){
    id
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
          originalPhoto
          photo
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


class Profile extends React.Component{
  constructor(props) {
    super(props);
    this.state ={
      file:null
    }
//    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
//    this.fileUpload = this.fileUpload.bind(this)
}


  onSubmit(e){
    e.preventDefault()
    console.log(this.props)
    //const url = 'http://localhost:8000/api/post/';
    //const formData = new FormData();
    //formData.append('file',file)    
    /*const config = {
      headers: {
          'content-type': 'multipart/form-data'
      }
  }   */ 
    this.fileUpload(this.state.file).then((response)=>{
      console.log(response.data);
    })    
  }


  fileUpload(file){
    const url = 'http://localhost:8000/api/post/';
    const formData = new FormData();
    formData.append('original_photo',file)
    const token = localStorage.getItem('token')
    const config = {
        headers: {
            'content-type': 'multipart/form-data',
            'authorization': `JWT ${token}` 
        }
    }
    return  post(url, formData,config)
}

profileupdate(file){
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
}



  onChange(e){
    this.setState({file:e.target.files[0]})
  }

  onChangePost(e){
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
       
        return(
          <main className="main">      
          <Helmet>
          <title>Profile</title>
          </Helmet>
          <div>This is profile  {this.props.match.params.userName}</div>
            <section className="top">

              <div className="profile">
              { data.users.profile ?(
              <div>sdfds</div>
              ) : (
                <div className="container">
                  <img style={style} src={ "http://localhost:8000/photos/"+data.users.profilePic.profileThumbs} alt="profile"/>
                  <div className="overlay"></div>
                  <input type="file" className="in" name="profile_pic" onChange={this.onChangePost}/>
                </div>
              ) 
              
              }  

              </div>
              <div className="info">
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

                  <form ref={ref=>(this.this=ref)} onSubmit={e=>this.onSubmit(e)} id="formUpload">
                  <input type="file" name="in" onChange={this.onChange}/>
                  <input type="submit" name="post" value="upload" />
                  </form>
                
                
                </div>
            </div>
            </section>
          
          </main>
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
export default compose(
  graphql(query, queryOptions),
  //graphql(upload)
)(Profile)

