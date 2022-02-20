import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import ErrorMessage from "./ErrorMessage"
import { bindActionCreators } from "redux"
import {userActions} from '../state/index'
import { useEffect } from 'react'


function Navbar(){
    const auth = useSelector(state=> state.auth)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {logout,clearAllStates} = bindActionCreators(userActions, dispatch)
    useEffect(()=>{
        if(!auth.isLoggedIn){
            clearAllStates()
            localStorage.clear()
        }
    }, [auth.isLoggedIn])
    const logoutFunction = ()=>{
        logout()
    }
    return (
        <div className='navBar'>
            <div className='row'>
            <div className='col-sm-6 pt-3 d-flex justify-content-center align-items-center'>
                <NavLink to="/" className="navLink">Tweet</NavLink>
            </div>
            <div className='col-sm-6'>
                {
                    auth.isLoggedIn?
                    <div className='d-flex justify-content-center align-items-center mt-3'>
                        <div><NavLink to="/post" className="navLink mb-3"> New Post </NavLink>/<NavLink to="" className="navLink" onClick={logoutFunction}> Logout </NavLink></div>
                </div>
                    :<div className='d-flex justify-content-center align-items-center mt-3'>
                        <div><NavLink to="/register" className="navLink mb-3"> Signup </NavLink>/<NavLink to="/login" className="navLink"> Login </NavLink></div>
                </div>
                }
            </div>
        </div>
        </div>
    )
}


export default Navbar