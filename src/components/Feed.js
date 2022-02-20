import Navbar from "./Navbar"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { bindActionCreators } from "redux"
import { userActions } from "../state"
import UserCard from "./UserCard"
import PostCard from "./PostCard"
import ErrorMessage from './ErrorMessage'

function Feed(){
    const navigate = useNavigate()
    const [feedState, setFeedState] = useState({allUserData:null, userFeed:null})
    const [popUpState, setPopUpState] = useState({showPopUp:false, message:null})
    const dispatch = useDispatch()
    const state = useSelector(state=> state)
    const {getAllUserData, getUserFeed, followUser, addLike,resetFeedState,resetError} = bindActionCreators(userActions, dispatch)
    useEffect(()=>{
        if(!state.auth.isLoggedIn){
            navigate('/login')
        }
        if(state.common.error !== null){
            setPopUpState({
                showPopUp:true,
                message:state.common.error
            })
            resetError()
        }
    },[state.auth.isLoggedIn, state.common.error])
    useEffect(()=>{
        if(state.common.allUserData !== null && state.common.userFeed){
            setFeedState({
                allUserData:state.common.allUserData,
                userFeed:state.common.userFeed
            })
        }else{
            getAllUserData()
            getUserFeed()
        }

    },[state.common.allUserData, state.common.userFeed])
    const viewProfile = (id)=>{
        navigate('/profile', {state:{id}})
    }
    const handleLike = (postId)=>{
        addLike(postId)
        navigate('/feed')
        resetFeedState()
    }
    const cancelPopUp = ()=>{
        setPopUpState({
            showPopUp:false,
            message:null
        })
    }
    const follow = (id)=>{
        followUser(id)
        navigate('/feed')
        resetFeedState()
    }
    return (
        <div>
            <Navbar/>
            {popUpState.showPopUp?<ErrorMessage message={popUpState.message} cancelPopUp = {cancelPopUp}/>:''}
            <div className="headingBox">
                <p>Feed</p>
            </div>
            <div className="feedContainer">
                <div className="row">
                <div className="col-md-3">
                    <div className="userListDiv">
                    {
                        feedState.allUserData!==null?feedState.allUserData.map(user=>{
                            return (
                                <UserCard key={user.id} userData={user} follow={follow}/>
                            )
                        }):''
                    }
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="postListDiv">
                        {
                            feedState.userFeed!==null?feedState.userFeed.map(data=>{
                                return (
                                    <PostCard key={data.postId} postData={data} handleLike={handleLike} />
                                )
                            }):''
                        }
                    </div>
                </div>
                </div>
            </div>
            
        </div>
    )
}

export default Feed