import { useSelector } from "react-redux"
import HomeBox from "./HomeBox"
import Navbar from "./Navbar"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

function Home(){
    const auth = useSelector(state=> state.auth)
    const navigate = useNavigate()
    useEffect(()=>{
        if(auth.isLoggedIn){
            navigate('/feed')
        }
    },[auth.isLoggedIn])
    return (
        <div>
            <Navbar/>
            {
                auth.isLoggedIn?navigate('/feed'):<HomeBox/>
            }
        </div>
    )
}

export default Home