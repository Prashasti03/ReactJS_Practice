import { Component } from "react";

// 

class ClassComponent extends Component{

    constructor(){
        super();
        this.name = 'Aarti';
        this.state = {department:'Training', designation:'CAH'}
    }

    change=()=>{
        this.setState({designation: 'Center Academic Head'})
    }
    render(){
        return(
            <>
                <h1>Hello from Class Component</h1>
                <h3>My name is: {this.name}</h3>
                <h3>Department: {this.state.department}</h3>
                <h3>Designation: {this.state.designation}</h3>
                <button onClick={this.change}>Click</button>
            </>
        )
    }
}

export default ClassComponent;