import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import { BrowserRouter as Router, Link } from "react-router-dom"
import './article.css'
import TimeAgo from 'javascript-time-ago'
import LoadArticle from './LoadArticle'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import en from 'javascript-time-ago/locale/en'

class ReplayComment extends React.Component{
    render(){
        return(
            <span className="_uname">
                <span className="_cmt">{this.props.cmt.node.comment} </span>
                <Link to={this.props.cmt.node.commentBy.username}>
                    <span style={{color:'black',fontWeight:'bold',marginRight:'3px'}}>
                        {this.props.cmt.node.commentBy.firstName}
                    </span>
                </Link>
            </span>
        )
    }
}



class Comments extends React.Component {
    render(){
        TimeAgo.locale(en)
        const timeAgo = new TimeAgo('en-US')
        
        var ctime = this.props.cmt.node.commentTime
        let reply = this.props.cmt.node.replycomment.edges
        return(
            <div className="_cmt_box">
                    <span className="_uname">
                        <Router>  
                        {
                            <Link to={this.props.cmt.node.commentBy.username} key={this.props.cmt.node.commentBy.id}><span style={{color:'black',fontWeight:'bold',marginRight:'3px'}}>{this.props.cmt.node.commentBy.username}</span></Link>
                        }
                        </Router>
                        <span className="_cmt" style={{fontweight:'normal'}}>
                            {this.props.cmt.node.comment}
                        </span>
                        <span className="_cmt_time" style={{color:'rgb(83, 83, 83)',fontSize:'12px',fontStyle:'inherit',marginLeft:'2px'}}>
                        {/* :- {ctime.format(new Date(de))}*/}
                        <span>:- {timeAgo.format(new Date(ctime)-60*1000,'time')}</span>
                        </span>
                        <div className="reply">   
                        { reply.map(c=><ReplayComment key={c.node.id} cmt={c}  />)}
                        </div>
                    </span>
            </div>
        )
    }
}

const Ac =()=>{
    return(
    <div>sdfsdf</div>
    )
}



class Articles extends React.Component{


    constructor(props){
        super(props);
        
        this.state = {
            inputcomment : '',
            keyset : '',
            //hasNextPage : this.props.pageInfo.hasNextPage,
            //cursor : this.props.pageInfo.endCursor,
            //uid : localStorage.token
        }
        this.updateInput = this.updateInput.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    

    handleSubmit(e){
        e.preventDefault()
        console.log(this.props)
        let formData = new FormData(this.form)
        //console.log(formData)
        console.log(this.state.inputcomment)
        //let el = document.querySelector('.show_comments')
        //el.append(this.state.inputcomment)

        //el.appendChild("jlkjsdlkjlksdf")

       
        this.props.m.mutate({variables:{comment:this.state.inputcomment,photoid:this.state.keyset,userid:localStorage.getItem('userid')}})
        .then(res=>{
            if (res.data.postComment.formErrors == null) {
                alert("Your Comment is done!")
                //console.log("done")
            }
            else(
                console.log(res.data.createMessage.formErrors)
            )
        })
        .catch(err=>{
            console.log('Network error!')
        })


        
    }


    handleClick(){
        console.log(this.state.keyset)
        console.log(this.state.inputcomment)
    }
    updateInput(e,key){
        this.setState({inputcomment: e.target.value,keyset:key})
    }
    render(){
        TimeAgo.locale(en)
        const timeAgo = new TimeAgo('en-US')
        let post = this.props.p.node
        let img = "http://localhost:8000/"+post.photo
        let prf ="http://localhost:8000/"+post.uploadBy.profilePic.profileThumbs
        //let pageInfo = this.props.pageInfo
        //console.log(pageInfo)
        //this.setState({cursor:pageInfo.endCursor})
        //console.log(this.state)
        return(
            <article className="article">
                    
                    <header className="img_header">
                        <div className="img_header_title">
                        
                            {/*<Link to={this.props.p.uploadBy.username}><h4>{this.props.p.uploadBy.username}</h4></Link>
                            */}
                            
                            <div className="_pt">
                                {/*<Link to={this.props.p.uploadBy.username}><span className="user">{this.props.p.uploadBy.firstName}</span></Link>*/}
                                <img src={prf} alt="prf" className="prf" title={post.uploadBy.username}/>
                                {/*<div>{ctime}</div>*/}
                                <div className="_name">
                                    <Link to={post.uploadBy.username}><span className="user">{post.uploadBy.firstName}</span></Link>
                                    <div className="_time">
                                    <span className="time">{timeAgo.format(new Date(post.createdDate)-60*1000,'time')} ago</span>
                                    {/*<span className="time" >{this.props.p.createdDate}</span>*/}
                                    </div>
                                </div>                            
                            </div>
                            <div className="_info">
                                <div className="caption">
                                    <span>{post.caption}</span>
                                </div>
                            </div>                            
                        </div>                        
                    </header>
                    <Router>
                    
                    <div className="img_content">
                    <a target="_blank" href={img}>
                        <div className="main_img">
                            <img alt="smile" src={img} className="m_img" />                      
                        </div>
                    </a>
                    </div>
                    
                    </Router> 
                    <div className="img_footer">
                    <div className="rating">
                    <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                    </div>
                    <div className="cmt_section">                        
                        <div className="show_comments">
                        {post.comments.edges.map(c=><Comments key={c.node.id} cmt={c}  />)}
                    </div>
                    </div>
                        <div className="comment_box">
                        <form ref={ref=>(this.this=ref)} onSubmit={e=>this.handleSubmit(e)}>
                            <div className="_cmt_btn">
                                <textarea className="form-control" placeholder="Comment here" onChange={(e)=> this.updateInput(e,post.id)} key={post.id}  ></textarea>
                                <input type="submit" value="post"  className="pstbtn" />
                            </div>
                        </form>
                        </div>            
                    </div>
            </article>          
        )
    }
}
//export default Article;


class Article extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hasNextPage :'',
            cursor : '',
            //uid : localStorage.token
        }
    }
    updateStat(pageInfo){
        this.setState({hasNextPage:pageInfo.hasNextPage,cursor:pageInfo.endCursor})
    }
    
/*    componentWillReceiveProps(){
        
        if(this.props.data.loading){
            //return (<div>sdf</div>)
            console.log(this.props)
        }
        console.log(this.props)
    }*/

    loadMore(){
        let { data, location } = this.props
        data.fetchMore({
            query : MoreArticle,
            variables :{
                after:data.allContext.pageInfo.endCursor,
            },
            updateQuery:(prev,next)=>{
                const newEdges = next.fetchMoreResult.allContext.edges
                const pageInfo = next.fetchMoreResult.allContext.pageInfo
                return{
                    allContext : {
                        __typename:prev.allContext.___typename,
                        edges:[...prev.allContext.edges,...newEdges],
                        pageInfo
                    }
                }
            }
        })
    }
    render(){

        //console.log(this.props)
        if(this.props.data.loading){
            return (<div>Loading...</div>)   
        }
        //console.log(this.props)
        //console.log(localStorage)
        //const photos = this.props.data.allPhotos;
        let pageInfo=this.props.data.allContext.pageInfo
        //console.log(pageInfo.hasNextPage)
        /*this.setState((pageInfo)=>{
            return {hasNextPage:pageInfo.hasNextPage,cursor:pageInfo.endCursor};
        })*/

        //console.log(this.props.data.allContext.pageInfo.hasNextPage)
        //this.setState({hasNextPage:pageInfo.hasNextPage,cursor:pageInfo.endCursor})
        const photos = this.props.data.allContext.edges;
        //const pageInfo = this.props.data.allContext.pageInfo
        const mu = this.props;
        //console.log(photos)
        //console.log(this.state)
        //this.updateStat(pageInfo)
        console.log(photos)
        return( 
                <div> 
                 {/* {photos.map(p=><Articles key={p.node.id} p={p} m={mu}/>)}*/}
                <InfiniteScroll
                dataLength={10}
                pullDownToRefreshContent={
                <h3 style={{textAlign: 'center'}}>&#8595; Pull down to refresh</h3>
                }
                releaseToRefreshContent={
                <h3 style={{textAlign: 'center'}}>&#8593; Release to refresh</h3>
                }
                //refreshFunction={}
                
                next = {this.loadMore}
                hasMore = {pageInfo.hasNextPage}
                
                loader = {<h4>Loading|||</h4>}
                endMessage = {
                    <h4>ending</h4>
                }
                />
                {photos.map(p=><Articles key={p.node.id} p={p} m={mu}/>)}
                </div>
        );
    }
}





const MoreArticle = gql`query allPhotos($after:String!){
    allContext(first:10,after:$after) {
        pageInfo{
            hasNextPage
            endCursor
          }
        edges{ 
            __typename
            cursor
            node{
                id
                photo
                createdDate
                caption
                comments(first:5) {
                edges {
                    node {
                    id
                    comment
                    commentTime
                    replycomment{
                        edges{
                            node{
                                id
                                comment
                                commentTime
                                commentBy{
                                    id
                                    username
                                    firstName
                                    lastName
                                }
                            }
                        }
                    }
                    commentBy{
                        id
                        username
                        
                    }
                    }
                }
                }
                uploadBy {
                id
                username
                firstName
                lastName
                profilePic{
                    id
                    profileThumbs
                }
                }
            }
        }
      }
      }`


const queryOptions = {
options: props => ({
    variables: {
    after:props.endCursor
    },
}),
}



const MY_QUERY = gql`query allPhotos{
    allContext(first:10) {
        pageInfo{
            hasNextPage
            endCursor
          }
        edges{ 
            cursor
            node{
                id
                photo
                createdDate
                caption
                comments(first:5) {
                edges {
                    node {
                    id
                    comment
                    commentTime
                    replycomment{
                        edges{
                            node{
                                id
                                comment
                                commentTime
                                commentBy{
                                    id
                                    username
                                    firstName
                                    lastName
                                }
                            }
                        }
                    }
                    commentBy{
                        id
                        username
                        
                    }
                    }
                }
                }
                uploadBy {
                id
                username
                firstName
                lastName
                profilePic{
                    id
                    profileThumbs
                }
                }
            }
        }
      }
      }`

const UpdateComment = gql`mutation create($comment:String!,$photoid:ID!,$userid:ID!){
    postComment(
      comment:$comment
      photoid:$photoid
      uid:$userid
    ) 
    {
        formErrors
        comment {
          id
          comment
          commentTime
          commentBy {
            id
            username
          }
        }
    }
  }`


export default compose(
    graphql(MY_QUERY),
    graphql(UpdateComment)
)(Article)