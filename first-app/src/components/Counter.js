import React from 'react';
import UserDetail from './UserDetail';


class Counter extends React.Component{

    constructor(props){
        super(props);
        this.state={
            count:1
        }
        this.incrementHandler = this.incrementHandler.bind(this)
        this.decrementHandler = this.decrementHandler.bind(this)
        // console.log("Constructor  is called")
    }
    
    // static getDerivedStateFromProps(props, state){
    //     console.log("getDerivedSTateFromPros",props,state)
    //     return state
    // }

    // use for render optimization
    shouldComponentUpdate(nextProps, nextState, nextContext){
        // console.log("Should component update",nextProps, nextState, nextContext)
        console.log(document,">>>");
        return true;
    }

    // component did mount is called only one time on creation (mounting)
    // componentDidMount(){
    //     console.log("component did mount called")

    //     // eventListenere adding 
    //     // access document here 
    //     // api call here

    //     fetch('https://jsonplaceholder.typicode.com/todos/1')
    //     .then(response => response.json())
    //     .then(json => console.log(json))
        
    // }

    // component did update called on update cycle when component props or state change
    componentDidUpdate(prevProps, prevState){
        document.title="Hello WOrld";
        console.log("component did Update called",prevProps, prevState)
    
    }

    componentWillUnmount(){
        // console.log("component will unmount called")
    }

    incrementHandler(){
        this.setState({count:this.state.count+1})
    }

    decrementHandler(){
        this.setState({count:this.state.count-1})
    }

    // used for rendering (mount in real dom and trigger componentDidMount on creation and component
    // didUpdate on Updation)
    render(){
        console.log("Render is called")
        return(
        <>
            <h1>Counter</h1>
            <h2>{this.state.count}</h2>
            <button onClick={this.incrementHandler}>Increment</button>
            <button onClick={this.decrementHandler}>Increment</button>
            <UserDetail todoId={this.state.count}/>
        </>
        )
    }

}

export default Counter


// every hooks have three different lifecycle creation(Mounting), updation, deletion(Unmounting)

// component will re render in two case
// either props change  or state change