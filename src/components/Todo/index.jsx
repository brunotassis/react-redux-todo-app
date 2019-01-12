import React, { Component } from 'react';
import axios from 'axios';

import PageHeader from '../Template/pageHeader';
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component{
    constructor(props){
        super(props);
        this.state = { description: '', list: [] };

        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleChange(e){
        this.setState({
            ...this.state,
            description: e.target.value
        });
    }

    handleAdd(){
        if(this.state.description !== ''){
            let list = this.state.list;
            list.push(this.state.description);
            this.setState({ list, description: '' });
        }else{
            alert('Escreve algo no campo de tarefas.');
        }
    }

    render(){
        return(
            <div>
                <PageHeader name="Tarefas" small="Cadastro" />
                <TodoForm handleAdd={this.handleAdd}
                    handleChange={this.handleChange}
                    description={this.state.description} />

                <hr/>

                <TodoList list={this.state.list}/>
            </div>
        )
    }
}