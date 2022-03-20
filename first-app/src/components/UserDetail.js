import React, { Component } from 'react'

export default class UserDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            completed: false,
            id: null,
            title: "",
            userId: null
        }
    }

    componentDidMount(){

        console.log(this.props)
        fetch(`https://jsonplaceholder.typicode.com/todos/${this.props.todoId}`)
        .then(response => response.json())
        .then(json => {
            // returns always new state 
            this.setState({
                completed: json.completed,
                id: json.id,
                title: json.title,
                userId: json.userId
            })
        })
        
    }

    componentDidUpdate(prevProps, prevState){
        console.log("current props",this.props,"prev props means just before this",prevProps)
        if(prevProps.todoId !== this.props.todoId){
            fetch(`https://jsonplaceholder.typicode.com/todos/${this.props.todoId}`)
            .then(response => response.json())
            .then(json => {
                this.setState({...json})
            })
        }
    }

    render() {
        return (
            <div style={{marginTop:'10px', textAlign:"left",
                 display:"flex",
                 marginLeft:400,
                 flexDirection:"column"}}
                >
                <div>id is {this.state.id}</div>
                <div>title is {this.state.title}</div>
                <div>UserId is {this.state.userId}</div>
                <div>Is Completed {this.state.completed}</div>
            </div>
        )
    }
}
