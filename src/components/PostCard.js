function PostCard(props){
    return (
        <div className="postCard">
            <div className="cardText">
                <p>{props.postData.title}</p>
                <p>{props.postData.description}</p>
                <p className="fw-bold fst-italic text-decoration-underline">Posted by {props.postData.user.name}</p>
            </div>
            <div className="likeButton" onClick={()=> props.handleLike(props.postData.postId)}><span className="likeShape">Likes</span> {props.postData.likes}</div>
        </div>
    )
}

export default PostCard