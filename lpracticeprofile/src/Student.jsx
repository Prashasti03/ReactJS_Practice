export default function Student(props){
    return(
        <>
            <h3>Student Name: {props.info.name}</h3>
            <h3>Address: {props.info.address}</h3>
            <h3>Mobile No: {props.info.mob}</h3>
        </>
    )
}