import { useEffect, useState } from "react"
import Navbar from "./Navbar"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import ErrorMessage from "./ErrorMessage"
import { bindActionCreators } from "redux"
import {userActions} from '../state/index'

function Register(){
    const [registerState, setRegisterState] = useState({name:null, email:null, password:null,gender:null,age:null})
    const [popUpState, setPopUpState] = useState({showPopUp:false, message:null})
    const auth = useSelector(state=> state.auth)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, resetError} = bindActionCreators(userActions, dispatch)
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
        setRegisterState({
            ...registerState,
            [e.target.id]:e.target.value
        })
    }

    const handleSubmit = ()=>{
        if((registerState.name === null || registerState.name === undefined)|| registerState.name.length === 0){
            setPopUpState({
                message:"Please enter a name",
                showPopUp:true
            })
        }else if((registerState.email === null || registerState.email === undefined)|| registerState.email.length === 0){
            setPopUpState({
                message:"Please enter an email",
                showPopUp:true
            })
        }else if((registerState.password === null || registerState.password === undefined)){
            setPopUpState({
                message:"Please enter password",
                showPopUp:true
            })
        }else if((registerState.gender === null || registerState.gender === undefined)){
            setPopUpState({
                message:"Please select a gender",
                showPopUp:true
            })
        }else if((registerState.age === null || registerState.age === undefined)){
            setPopUpState({
                message:"Please enter age",
                showPopUp:true
            })
        }else if(registerState.password.length<8 || registerState.password.length>15){
            setPopUpState({
                message:"Password length must be from 8 to 15 characters",
                showPopUp:true
            })
        }else if(Number(registerState.age)<18 || Number(registerState.age)>60){
            setPopUpState({
                message:"Age must be from 18 to 60 years",
                showPopUp:true
            })
        }else{
            register({
                name:registerState.name,
                email:registerState.email,
                password:registerState.password,
                gender:registerState.gender,
                age:Number(registerState.age)
            })

        }
        

    }

    return (
        <div>
            <Navbar/>
            {popUpState.showPopUp?<ErrorMessage message={popUpState.message} cancelPopUp = {cancelPopUp}/>:''}
            <div className="headingBox">
                <p>Register</p>
            </div>
            <div className="formContainer">
                <div class="mb-3 formDiv">
                    <label for="name" class="form-label">Name:</label>
                    <input type="name" class="form-control" id="name" aria-describedby="nameHelp" onChange={handleOnChange}/>
                </div>
                <div class="mb-3 formDiv">
                    <label for="email" class="form-label">Email:</label>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" onChange={handleOnChange}/>
                </div>
                <div class="mb-3 formDiv">
                    <label for="password" class="form-label">Password:</label>
                    <input type="password" class="form-control" id="password" aria-describedby="passwordHelp" onChange={handleOnChange}/>
                    <div id="passwordHelp" class="noteText">Enter a password of length from 8 to 15 characters</div>
                </div>
                <div className=" mb-3 formDiv">
                    <select id="gender" class="form-select" aria-label="Default select example" onChange={handleOnChange}>
                        <option selected>Please select a gender</option>
                        <option value="male">male</option>
                        <option value="female">female</option>
                        <option value="lgbtq">lgbtq</option>
                    </select>
                </div>
                <div class="mb-3 formDiv">
                    <label id="age" for="age" class="form-label">Age:</label>
                    <input type="number" class="form-control" id="age" aria-describedby="ageHelp" onChange={handleOnChange}/>
                    <div id="passwordHelp" class="noteText">Age must be from 18 to 60.</div>
                </div>
                <div class="mb-3 buttonDiv">
                    <div className="submitButton" onClick={handleSubmit}>Submit</div>
                </div>
                
            </div>
        </div>
    )
}


export default Register