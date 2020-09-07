import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./index.css";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
        
        this.addItem = this.addItem.bind(this);
        this.deleteItems = this.deleteItems.bind(this);
    }

    addItem(e) {
        if(this._inputElement.value !== "") {
            var newItem = {
                desc : this._inputElement.value,
                id : Date.now()
            };

            this.setState((prevState) => {
                return {
                    items : prevState.items.concat(newItem)
                }
            });

            this._inputElement.value = "";
        }

        console.log(this.state.items);
        e.preventDefault();
    }

    deleteItems(id) {
        var filteredItems = this.state.items.filter(function (item) {
            return (item.id !== id);
        });

        this.setState({
            items : filteredItems,
        });
    }
    
    render() {
        return (
            <div className="container center">
                <div className="row">
                    <div className="col-lg-5 left">
                        <h1 className="title-left">Hi Samantha</h1>
                        <p className="subtitle-left">Welcome back to the workspace, we missed You!</p>
                        <div className="form">
                            <form onSubmit={this.addItem}>
                                <input className="bg-dark" ref={(a) => this._inputElement = a} 
                                    placeholder="Search Task or Project...">
                                </input>
                            </form>
                        </div>
                        <p className="title-projects">Projects</p>
                    </div>
                    <div className="col-lg-6 right">
                        <div className="content">
                            <h1 className="title-right">Cyber Punk</h1>
                            <p className="subtitle-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            <p className="title-today">Today</p>
                            <hr className="break-title" />
                            <TodoItems 
                            entries={this.state.items} 
                            delete={this.deleteItems}/>
                            <p className="title-upcoming">Upcoming</p>
                            <hr className="break-title" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default TodoList;
