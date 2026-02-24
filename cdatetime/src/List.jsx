import batch, { branch, trainer } from "./Details";

function List(){
    return(
        <>
            <h1>This is my list Component</h1>
            {batch}
            {/* <batch/> Only class component or function components are used in <>, this is a variable, therefore can't be used like this*/}
            {trainer}
            {branch}
            {/* variables are inline here, but function and class components are block level components */}
            <ul>
                <li>Tea</li>
                <li>Coffee</li>
                <li>Milk</li>
                <li>Juice</li>
            </ul>
        </>
    )
}

export default List;