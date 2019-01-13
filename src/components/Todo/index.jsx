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

        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleClear = this.handleClear.bind(this);

        this.handleDelete = this.handleDelete.bind(this);
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this);

        this.refresh();
    }

    refresh(description = ''){
        const search = description ? `&description__regex=/${description}/` : '';

        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(response => {
                console.log(response.data);
                const list = response.data;
                this.setState({list, description});
            });
    }

    handleSearch(){
        this.refresh(this.state.description);
    }

    handleClear(){
        this.refresh();
    }

    handleChange(e){
        this.setState({
            ...this.state,
            description: e.target.value
        });
    }

    handleAdd(){
        if(this.state.description !== ''){
            const description = this.state.description

            axios.post(URL, { description }).then(() => {
                this.refresh();
            }).catch(err => {
                console.error(err);
            });
        }else{
            alert('Escreva algo no campo de tarefas.');
        }
    }

    handleDelete(todo){
        let id = todo._id;
        axios.delete(`${URL}/${id}`).then(resp => {
            this.refresh(this.state.description);
        }).catch(err => {
            console.error(err);
        });
    }

    handleMarkAsDone(todo){
        let id = todo._id;
        axios.put(`${URL}/${id}`, { ...todo, done: true }).then(resp => {
            this.refresh(this.state.description);
        }).catch(err => {
            console.error(err);
        });
    }

    handleMarkAsPending(todo){
        let id = todo._id;
        axios.put(`${URL}/${id}`, { ...todo, done: false }).then(resp => {
            this.refresh(this.state.description);
        }).catch(err => {
            console.error(err);
        });
    }

    render(){
        return(
            <div>
                <PageHeader name="Tarefas" small="Cadastro" />

                <TodoForm
                    handleAdd={this.handleAdd}
                    handleChange={this.handleChange}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear}
                    description={this.state.description} />

                <TodoList
                    list={this.state.list}
                    handleDelete={this.handleDelete}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending} />
            </div>
        )
    }
}