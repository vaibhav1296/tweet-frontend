import axios from "axios"
export const login = (userDetails)=>{
    return (dispatch)=>{
        axios({
            method:`POST`,
            url:`https://vaibhav-assignment.herokuapp.com/user/login`,
            data:{
                ...userDetails
            }
        })
        .then(res=>{
            dispatch({
                type:`LOGIN`,
                payload:res.data
            })
        })
        .catch(err=>{
            dispatch({
                type:`LOGIN_ERR`,
                payload:err.response.data.status
            })    
        })
    }
}
export const register = (userDetails)=>{
    return (dispatch)=>{
        axios({
            method:`POST`,
            url:`https://vaibhav-assignment.herokuapp.com/user/register`,
            data:{
                ...userDetails
            }
        })
        .then(res=>{
            dispatch({
                type:`REGISTER`,
                payload:res.data
            })
        })
        .catch(err=>{
            dispatch({
                type:`REGISTER_ERR`,
                payload:err.response.data.status
            })    
        })
    }
}


export const getAllUserData = ()=>{
    const token = localStorage.getItem(`user_token`)
    return (dispatch)=>{
        axios({
            method:`GET`,
            url:`https://vaibhav-assignment.herokuapp.com/user/all`,
            headers: {
                authorization: `bearer ${token}`,
            },
        })
        .then(res=>{
            dispatch({
                type:`ALL_USER`,
                payload:res.data
            })
        })
        .catch(err=>{
            dispatch({
                type:`ALL_USER_ERR`,
                payload:err.response.data.status
            })
        })
    }
}

export const getUserFeed = ()=>{
    const token = localStorage.getItem(`user_token`)
    return (dispatch)=>{
        axios({
            method:`GET`,
            url:`https://vaibhav-assignment.herokuapp.com/user/feed`,
            headers: {
                authorization: `bearer ${token}`,
            },
        })
        .then(res=>{
            dispatch({
                type:`USER_FEED`,
                payload:res.data
            })
        })
        .catch(err=>{
            dispatch({
                type:`USER_FEED_ERR`,
                payload:err.response.data.status
            })
        })
    }
}

export const addLike = (postId)=>{
    const token = localStorage.getItem(`user_token`)
    return (dispatch)=>{
        axios({
            method:`POST`,
            url:`https://vaibhav-assignment.herokuapp.com/user/like/${postId}`,
            headers: {
                authorization: `bearer ${token}`,
            },
        })
        .then(res=>{
            dispatch({
                type:`POST_LIKE`,
                payload:res.data
            })
        })
        .catch(err=>{
            dispatch({
                type:`POST_LIKE_ERR`,
                payload:err.response.data.status
            })
        })
    }
}

export const profileData = (userId)=>{
    const token = localStorage.getItem(`user_token`)
    const currentUserId = localStorage.getItem(`user_id`)
    let url= userId===currentUserId?`https://vaibhav-assignment.herokuapp.com/user/profile`:`https://vaibhav-assignment.herokuapp.com/user/profile/${userId}?userId=${currentUserId}`    
    return (dispatch)=>{
        axios({
            method:`GET`,
            url,
            headers: {
                authorization: `bearer ${token}`,
            },
        })
        .then(res=>{
            dispatch({
                type:`PROFILE_DATA`,
                payload:res.data
            })
        })
        .catch(err=>{
            dispatch({
                type:`PROFILE_DATA_ERR`,
                payload:err.response.data.status
            })
        })
    }
}
export const followUser = (id)=>{
    const token = localStorage.getItem(`user_token`)
    const currentUserId = localStorage.getItem(`user_id`)
    const url = `https://vaibhav-assignment.herokuapp.com/user/follow/${id}?userId=${currentUserId}`
    return (dispatch)=>{
        axios({
            method:`PUT`,
            url,
            headers: {
                authorization: `bearer ${token}`,
            },
        })
        .then(res=>{
            dispatch({
                type:`FOLLOW_USER`,
                payload:res.data
            })
        })
        .catch(err=>{
            dispatch({
                type:`FOLLOW_USER_ERR`,
                payload:err.response.data.status
            })
        })
    }
}

export const createPost = (postData)=>{
    const token = localStorage.getItem(`user_token`)
    return (dispatch)=>{
        axios({
            method:`POST`,
            url:`https://vaibhav-assignment.herokuapp.com/user/post`,
            data:{
                ...postData
            },
            headers: {
                authorization: `bearer ${token}`,
            },
        })
        .then(res=>{
            dispatch({
                type:`NEW_POST`,
                payload:res.data
            })
        })
        .catch(err=>{
            dispatch({
                type:`NEW_POST_ERR`,
                payload:err.response.data.status
            })
        })
    }
}

export const logout = ()=>{
    const token = localStorage.getItem(`user_token`)
    return (dispatch)=>{
        axios({
            method:`DELETE`,
            url:`https://vaibhav-assignment.herokuapp.com/user/logout`,
            headers: {
                authorization: `bearer ${token}`,
            },
        })
        .then(res=>{
            dispatch({
                type:`LOGOUT`,
                payload:res.data
            })
        })
        .catch(err=>{
            dispatch({
                type:`LOGOUT_ERR`,
                payload:err.response.data.status
            })
        })
    }
}

export const resetError = ()=>{
    return (dispatch)=>{
        dispatch({
            type:"RESET_ERR",
            payload:null
        })
    }
}

export const resetFeedState = ()=>{
    return (dispatch)=>{
        dispatch({
            type:"RESET_FEED",
            payload:null
        })
    }
}


export const resteNewPostState = ()=>{
    return (dispatch)=>{
        dispatch({
            type:"RESET_NEW_POST",
            payload:null
        })
    }
}

export const clearAllStates = ()=>{
    return (dispatch)=>{
        dispatch({
            type:"RESET_ALL_STATE",
            payload:null
        })
    }
}