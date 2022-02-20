import { useEffect, useState } from "react"
import Navbar from "./Navbar"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import ErrorMessage from "./ErrorMessage"
import { bindActionCreators } from "redux"
import {userActions} from '../state/index'

function Login(){
    const [postState, setPostState] = useState({title:null, description:null})
    const [popUpState, setPopUpState] = useState({showPopUp:false, message:null})
    const state = useSelector(state=> state)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {createPost, resetError,resteNewPostState,resetFeedState} = bindActionCreators(userActions, dispatch)
    useEffect(()=>{
        if(!state.auth.isLoggedIn){
            navigate('/login')
        }
    },[state.auth.isLoggedIn])
    useEffect(()=>{
        resetFeedState()
        if(state.common.newPost){
            navigate('/feed')
            resteNewPostState()
        }
        if(state.common.error !== null){
            setPopUpState({
                showPopUp:true,
                message:state.common.error
            })
            resetError()
        }
    },[state.common.newPost, state.common.error])

    const cancelPopUp = ()=>{
        setPopUpState({
            showPopUp:false,
            message:null
        })
    }
    const handleOnChange = (e)=>{
        cancelPopUp()
        setPostState({
            ...postState,
            [e.target.id]:e.target.value
        })
    }

    const handleSubmit = ()=>{
        if((postState.title === null || postState.title === undefined)|| postState.title.length === 0){
            setPopUpState({
                message:"Please enter an title",
                showPopUp:true
            })
        }else if((postState.description === null || postState.description === undefined)){
            setPopUpState({
                message:"Please enter description",
                showPopUp:true
            })
        }else{
            createPost({
                title:postState.title,
                description:postState.description,
            })

        }
        

    }
    return (
        <div>
            <Navbar/>
            {popUpState.showPopUp?<ErrorMessage message={popUpState.message} cancelPopUp = {cancelPopUp}/>:''}
            <div className="headingBox">
                <p>New Post</p>
            </div>
            <div className="formContainer">
                <div class="mb-3 formDiv">
                    <label for="title" class="form-label">Title:</label>
                    <input type="text" class="form-control" id="title" aria-describedby="titleHelp" onChange={handleOnChange}/>
                </div>
                <div class="mb-3 formDiv">
                    <label for="description" class="form-label">Description:</label>
                    <input type="text" class="form-control" id="description" aria-describedby="descriptionHelp" onChange={handleOnChange}/>
                </div>
                <div class="mb-3 buttonDiv">
                    <div className="submitButton" onClick={handleSubmit}>Submit</div>
                </div>
                
            </div>
        </div>
    )
}


export default Login