const initialState={
    token:null,
    error:null,
    data:null,
    isLoggedIn:false
}

export const authReducer = (state=initialState, action)=>{
    switch(action.type){
        case "LOGIN":
            return {
                ...state,
                token:action.payload.data.token,
                userId:action.payload.data.userId,
                isLoggedIn:true
            }
        case 'LOGIN_ERR':
            return {
                ...state,
                data:action.payload.message
            }

        case 'REGISTER':
            return {
                ...state,
                token:action.payload.data.token,
                userId:action.payload.data.userId,
                isLoggedIn:true
            }
        case "REGISTER_ERR":
            return {
                ...state,
                error:action.payload.message
            }
        case 'LOGOUT':
            return{
                token:null,
                error:null,
                data:null,
                isLoggedIn:false
            }
        case 'RESET_ERR':
            return {
                ...state,
                error:null
            }

        default:
            return {
                ...state
            }
    }
}