import React from 'react'
import InfiniteScroll from 'react-infinite-scroller';
//import InfiniteScroll from 'react-infinite-scroll-component'; 
import { BrowserRouter as Router, Link } from "react-router-dom"
import './article.css'
import TimeAgo from 'javascript-time-ago'
//import LoadArticle from './LoadArticle'
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
        
        //var ctime = this.props.cmt.node.commentTime
        //let reply = this.props.cmt.node.replycomment.edges

        var ctime = this.props.cmt.commentTime
        let reply = this.props.cmt.replycomment ? this.props.cmt.replycomment.edges : []
        //console.log(this.props)
        return(
            <div className="_cmt_box">
                    <span className="_uname">
                        <Router>  
                        {/*
                            <Link to={this.props.cmt.node.commentBy.username} key={this.props.cmt.node.commentBy.id}><span style={{color:'black',fontWeight:'bold',marginRight:'3px'}}>{this.props.cmt.node.commentBy.username}</span></Link>
                            */
                           <Link to={this.props.cmt.commentBy.username} key={this.props.cmt.commentBy.id}><span style={{color:'black',fontWeight:'bold',marginRight:'3px'}}>{this.props.cmt.commentBy.username}</span></Link>

                        }
                        </Router>
                        <span className="_cmt" style={{fontweight:'normal'}}>
                            {this.props.cmt.comment}
                        </span>
                        <span className="_cmt_time" style={{color:'rgb(83, 83, 83)',fontSize:'12px',fontStyle:'inherit',marginLeft:'2px'}}>
                        {/* :- {ctime.format(new Date(de))}*/}
                        <span>:- {timeAgo.format(new Date(ctime)-60*1000,'time')}</span>
                        </span>
                        <div className="reply">   
                        { 
                            reply.map(c=><ReplayComment key={c.node.id} cmt={c}  />)
                        }
                        </div>
                    </span>
            </div>
        )
    }
}



class Articles extends React.Component{


    constructor(props){
        super(props);
        
        this.state = {
            inputcomment : '',
            keyset : '',
            comments : []
            //hasNextPage : this.props.pageInfo.hasNextPage,
            //cursor : this.props.pageInfo.endCursor,
            //uid : localStorage.token
        }
        this.updateInput = this.updateInput.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    
    componentDidMount = () => {
      let post=this.props.p.node
      this.setState({comments:post.comments.edges.map(c=><Comments key={c.node.id} cmt={c.node}  />)})
    }
    

    handleSubmit(e){
        e.preventDefault()
        //console.log(this.props)
        //let formData = new FormData(this.form)
        //console.log(formData)
        //console.log(this.state.inputcomment)
        //let el = document.querySelector('.show_comments')
        //el.append(this.state.inputcomment)

        //el.appendChild("jlkjsdlkjlksdf")

       
        this.props.m.mutate({variables:{comment:this.state.inputcomment,photoid:this.state.keyset,userid:localStorage.getItem('userid')}})
        .then(res=>{
            if (res.data.postComment.formErrors == null) {
                //alert("Your Comment is done!")
                //console.log(res)

                let post=res.data.postComment
                //this.setState({comments:post.comment.edges.map(c=><Comments key={c.node.id} cmt={c}  />)})
                //console.log(post)
                this.setState({
                    comments:[...this.state.comments,<Comments key={post.comment.id} cmt={post.comment}  />]
                })
                //this.setState({comments:})
                //this.setState(prevState=>({
                    //comments:[...prevState,res]
                //}))
                //console.log("done")
            }
            else(
                console.log(res.data.createMessage.formErrors)
            )
        })
        .catch(err=>{
            console.log(err+' Network error!')
        })       
    }

    handleClick(){
        //console.log(this.state.keyset)
        //console.log(this.state.inputcomment)
    }
    updateInput(e,key){
        this.setState({inputcomment: e.target.value,keyset:key})
    }

    render(){
        TimeAgo.locale(en)
        const timeAgo = new TimeAgo('en-US')
        let post = this.props.p.node
        
        let server = "http://localhost:8000/"
        //let server = "http://994365fa.ngrok.io/"
        let img = server+post.photo
        let prf =server+post.uploadBy.profilePic.profileThumbs
        
        //let img = "http://2010663b.ngrok.io/"+post.photo
        //let prf = "http://2010663b.ngrok.io/"+post.uploadBy.profilePic.profileThumbs
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
                    <div className="scrl">
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
                            {
                                this.state.comments
                            }
                            {/*       
                            {post.comments.edges.map(c=><Comments key={c.node.id} cmt={c}  />)}
                            */}


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
            hasNextPage :true,
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

    loadItems(){
        setTimeout(()=>{
                //let { data, location } = this.props
                let { data, } = this.props
                //console.log(data.allContext.pageInfo.endCursor)
                //if (data.allContext.pagInfo.hasNextPage){
                    data.fetchMore({
                        query : MoreArticle,
                        variables :{
                            after:data.allContext.pageInfo.endCursor,
                        },
                        updateQuery:(prev,next)=>{
                            console.log(next.fetchMoreResult.allContext.edges)
                            const newEdges = next.fetchMoreResult.allContext.edges
                            const pageInfo = next.fetchMoreResult.allContext.pageInfo
                            this.setState({'hasNextPage':pageInfo.hasNextPage})
                            return{
                                allContext : {
                                    __typename:prev.allContext.___typename,
                                    edges:[...prev.allContext.edges,...newEdges],
                                    pageInfo
                                },
                            }
                        },
                })
            },500);
    }

    handlescroll =() =>{
        //let {data,location} = this.props
        let {data } = this.props
        //console.log("hklhjldkf")
        //if (this.scroller && this.scroller.scrollTop < 100){
            data.fetchMore({
                query:MoreArticle,
                variables:{
                    after:data.allContext.pageInfo.endCursor
                },
                updateQuery:(prev,next)=>{
                    const newEdges = next.fetchMoreResult.allContext.edges
                    const pageInfo = next.fetchMoreResult.allContext.pageInfo
                    return{
                    allContext : {
                        __typename:prev.allContext.___typename,
                        edges:[...prev.allContext.edges,...newEdges],
                        pageInfo
                    },
                }
                }
            })
       // }
    }
    render(){
        //console.log(this.props)
        if(this.props.data.loading){
            return (<div>Loading...</div>)   
        }
        //console.log(this.props)
        //console.log(localStorage)
        //const photos = this.props.data.allPhotos;
        //let pageInfo=this.props.data.allContext.pageInfo
        //console.log(pageInfo.hasNextPage)
        /*this.setState((pageInfo)=>{
            return {hasNextPage:pageInfo.hasNextPage,cursor:pageInfo.endCursor};
        })*/

        //console.log(this.props.data.allContext.pageInfo.hasNextPage)
        //this.setState({hasNextPage:pageInfo.hasNextPage,cursor:pageInfo.endCursor})
        const photos = this.props.data.allContext.edges;
        //const pageInfo = this.props.data.allContext.pageInfo
        const mu = this.props;
        //console.log(photos.length)
        //console.log(photos)
        //console.log(this.state)
        //this.updateStat(pageInfo)
        //console.log(photos)

        //var items=[]
        //items.push(photos.map(p=><Articles key={p.node.id} p={p} m={mu}/>))

        //var loader = <div>Loading</div>
        //var ending = <div>ending</div>
        //console.log("new")
        //console.log(this.count)
        /*
            pullDownToRefreshContent={
                <h3 style={{textAlign: 'center'}}>&#8595; Pull down to refresh</h3>
                }
                releaseToRefreshContent={
                <h3 style={{textAlign: 'center'}}>&#8593; Release to refresh</h3>
                }

        */
       //var item=[]
       //item.push(photos.map(p=><Articles key={p.id} p={p} m={mu} />))
       //console.log(photos)
        return(

                <div>
                 {/* {photos.map(p=><Articles key={p.node.id} p={p} m={mu}/>)}*/}
                 
                {<InfiniteScroll
                    //pageStart = {0}
                    //next = {this.loadMore}
                    //hasMore = {this.state.hasNextPage}
                    //useWindow = {true}
                    //dataLength = {5}
                    hasMore = {this.state.hasNextPage}
                    loadMore = {this.loadItems.bind(this)}
                    loader={<h1 className='loader-section'> Loading.... </h1>}
                    threshold = {1200}
                    //endMessage = {ending}
                    >
                    <div>{photos.map(p=><Articles key={p.id} p={p} m={mu} />)}</div>
                </InfiniteScroll>}
            </div>
        );
    }
}





const MoreArticle = gql`query allPhotos($after:String!){
allContext(first:5,after:$after) {
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
    after:null
    },
}),
}



const MY_QUERY = gql`query allPhotos{
    allContext(first:5) {
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
/*
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

*/

const UpdateComment = gql`mutation create($comment:String!,$photoid:ID!,$userid:ID!){
    postComment(
        comment : $comment
        photoid : $photoid
        uid : $userid
    )
    {
        formErrors
        comment{
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
    `



export default compose(
    graphql(MY_QUERY,queryOptions),
    graphql(UpdateComment)
)(Article)