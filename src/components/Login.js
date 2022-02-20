import { useEffect, useState } from "react"
import Navbar from "./Navbar"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import ErrorMessage from "./ErrorMessage"
import { bindActionCreators } from "redux"
import {userActions} from '../state/index'

function Login(){
    const [loginState, setLoginState] = useState({email:null, password:null})
    const [popUpState, setPopUpState] = useState({showPopUp:false, message:null})
    const auth = useSelector(state=> state.auth)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {login, resetError} = bindActionCreators(userActions, dispatch)
    useEffect(()=>{
        if(auth.isLoggedIn){
            localStorage.setItem('user_token', auth.token)
            localStorage.setItem('user_id', auth.userId)
            navigate('/feed')
        }
        if(auth.error !== null){
            setPopUpState({
                showPopUp:true,
                message:auth.error
            })
            resetError()
        }
    },[auth.isLoggedIn, auth.error])

    const cancelPopUp = ()=>{
        setPopUpState({
            showPopUp:false,
            message:null
        })
    }
    const handleOnChange = (e)=>{
        cancelPopUp()
        setLoginState({
            ...loginState,
            [e.target.id]:e.target.value
        })
    }

    const handleSubmit = ()=>{
        if((loginState.email === null || loginState.email === undefined)|| loginState.email.length === 0){
            setPopUpState({
                message:"Please enter an email",
                showPopUp:true
            })
        }else if((loginState.password === null || loginState.password === undefined)){
            setPopUpState({
                message:"Please enter password",
                showPopUp:true
            })
        }else if(loginState.password.length<8 || loginState.password.length>15){
            setPopUpState({
                message:"Password length must be from 8 to 15 characters",
                showPopUp:true
            })
        }else{
            login({
                email:loginState.email,
                password:loginState.password,
            })

        }
        

    }
    return (
        <div>
            <Navbar/>
            {popUpState.showPopUp?<ErrorMessage message={popUpState.message} cancelPopUp = {cancelPopUp}/>:''}
            <div className="headingBox">
                <p>Login</p>
            </div>
            <div className="formContainer">
                <div class="mb-3 formDiv">
                    <label for="email" class="form-label">Email:</label>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" onChange={handleOnChange}/>
                </div>
                <div class="mb-3 formDiv">
                    <label for="password" class="form-label">Password:</label>
                    <input type="password" class="form-control" id="password" aria-describedby="passwordHelp" onChange={handleOnChange}/>
                    <div id="passwordHelp" class="noteText">Enter a password of length from 8 to 15 characters</div>
                </div>
                <div class="mb-3 buttonDiv">
                    <div className="submitButton" onClick={handleSubmit}>Submit</div>
                </div>
                
            </div>
        </div>
    )
}


export default Login