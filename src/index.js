import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import TodoList from './TodoList';
 
var destination = document.querySelector("#container")
 
ReactDOM.render(
    <div>
        <TodoList/>
    </div>,
    destination
);