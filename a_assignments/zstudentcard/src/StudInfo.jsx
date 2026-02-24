import './StudInfo.css'

function StudInfo(props) {
    return(
        <>
            <div className="container">
                <img src={props.imgsrc} className="img"></img>
                <h4>{props.name}</h4>
                <h4>{props.rollno}</h4>
                <h4>{props.subject}</h4>
                <h4>{props.marks}</h4>
                <h4>{props.grade}</h4>
                <h4>{props.resultStatus}</h4>
            </div>
        </>
    )
}

export default StudInfo;