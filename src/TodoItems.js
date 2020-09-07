import React, { Component } from "react";
import Flip from "react-flip-move";

class TodoItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
        
        this.CreateTask = this.CreateTask.bind(this);
    }

    componentDidMount() {
        fetch('http://demo7617443.mockable.io/todolist/')
          .then(response => response.json())
          .then(data => this.setState({ items: data }))
    }

    delete(id) {
        this.props.delete(id);
    }
    
    CreateTask(item) {
        return <li onClick={() => this.delete(item.id)} 
                id={item.id}> {item.desc} </li>
    }
    render() {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.CreateTask);
        return (
            <ul>
                <Flip duration={250} easing="ease-out">
                    {listItems} 
                </Flip>
            </ul>
        );
    }
}

export default TodoItems;