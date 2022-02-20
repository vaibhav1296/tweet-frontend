import { NavLink } from "react-router-dom"
function UserCard(props){
    return (
        <div className="userBox d-flex-column justify-content-center align-items-center m-1">
            <div className="userCard">
                <div>Name: </div>
                <div>{props.userData.name}</div>
            </div>
            <div className="userCard">
                <div>Email:: </div>
                <div>{props.userData.email}</div>
            </div>
            <div className="userCard">
                <div>Age: </div>
                <div>{props.userData.age}</div>
            </div>
            <div className="userCard">
                <div>Gender: </div>
                <div>{props.userData.gender}</div>
            </div>
            {
                !props.userData.isFollowed?<div className="d-flex justify-content-center align-items-center m-1 p-1"><div className="followButton" onClick={()=> props.follow(props.userData.id)}>Follow</div></div>:<div className="d-flex justify-content-center align-items-center m-1 p-1"><div className="followButton ">Following</div></div>
            }
        </div>
    )
}
export default UserCard