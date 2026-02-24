import { Component } from "react";

class ErrorBoundary extends Component{
    constructor(props){
        super(props)
        this.state={
            hasError:false
        }
    }
    static getDerivedStateFromError(){
        return {hasError:true}
    }
    componentDidCatch(){

    }
    render(){
        if(this.state.hasError==true){
            return "Value should not be less than 0."
        }
        return(
            <>
                {this.props.children}
            </>
        )
    }
}

export default ErrorBoundary;