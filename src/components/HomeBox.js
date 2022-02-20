import { NavLink } from "react-router-dom"

function HomeBox(){
    return (
        <div className="container d-flex justify-content-center align-items-center homeBox">
            <div className="d-flex-row justify-content-center align-items-center">
                <div>Please login to see your feed</div>
                <div className="d-flex justify-content-center align-items-center mt-2">
                    <NavLink to="/login" className="navLinkHome">Login</NavLink>
                </div>
            </div>
        </div>
    )
}

export default HomeBox