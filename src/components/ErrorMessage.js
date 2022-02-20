function ErrorMessage(props){
    const clickMe = ()=>{
        props.cancelPopUp()
    }
    return (
        <div className="message">
            <div>{props.message}</div>
            <div style={{fontSize:'10px'}} className="popUpCancel" onClick={clickMe}>&#10006;</div>
        </div>
    )
}
export default ErrorMessage