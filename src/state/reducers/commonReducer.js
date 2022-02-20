let initialState = {
    allUserData:null,
    error:null,
    userFeed:null,
    profileData:null,
    newPost:null
}


export const commonReducer = (state=initialState, action)=>{
    switch(action.type){
        case 'ALL_USER':
            return {
                ...state,
                allUserData:action.payload.data
            }
        case "ALL_USER_ERROR":
            return {
                ...state,
                error:action.payload.message

            }
        case "USER_FEED":
            return {
                ...state,
                userFeed:action.payload.data
            }
        case "USER_FEED_ERR":
            return {
                ...state,
                error:action.payload.message

            }
        case "POST_LIKE":
            return {
                ...state,
            }
        case "POST_LIKE_ERR":
            return {
                ...state,
            }
        case "RESET_FEED":
            return {
                ...state,
                allUserData:null,
                userFeed:null
            }
        case "PROFILE_DATA":
            return {
                ...state,
                profileData:action.payload.data
            }
        case "PROFILE_DATA_ERR":
            return {
                ...state,
                error:action.payload.message
            }
        case 'FOLLOW_USER':
            return {
                ...state
            }
        case 'FOLLOW_USER_ERR':
            return {
                ...state
            }
        case "NEW_POST":
            return {
                ...state,
                newPost:action.payload.data

            }
        case "NEW_POST_ERR":
            return {
                ...state,
                error:action.payload.message
    
            }
        case 'RESET_NEW_POST':
            return {
                ...state,
                newPost:null
            }
        case 'RESET_ALL_STATE':
            return {
                allUserData:null,
                error:null,
                userFeed:null,
                profileData:null,
                newPost:null
            }
        default:
            return{
                ...state
            }
    }
}