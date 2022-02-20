function UserDetail(props){
    return (
        <div className="userDetail">
            <div className="d-flex jusitfy-content-around align-items-center">
                <div>Name:</div>
                <div>{props.detail.name}</div>
            </div>
            <div className="row">
                <div>Email:</div>
                <div>{props.detail.email}</div>
            </div>
            <div className="row">
                <div>Age:</div>
                <div>{props.detail.age}</div>
            </div>
            <div className="row">
                <div>Gender:</div>
                <div>{props.detail.gender}</div>
            </div>
            <div className="row">
                {
                    !props.detail.isFollow?<div className="col-md-12 followBox"><div className="followButton" onClick={()=> props.handleFollow(props.details.id)}>Follow</div></div>:""
                }
            </div>
        </div>
    )
}
export default UserDetail