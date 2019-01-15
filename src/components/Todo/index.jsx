import React from 'react';

import PageHeader from '../Template/pageHeader';
import TodoForm from './todoForm'
import TodoList from './todoList'

const Todo = props => (
    <div>
        <PageHeader name="Tarefas" small="Cadastro" />
        <TodoForm />
        <TodoList />
    </div>
)

export default Todo;
