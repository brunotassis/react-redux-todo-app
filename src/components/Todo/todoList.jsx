import React from 'react';
import Grid from '../Template/grid';
import IconButton from '../Template/iconButton'

export default props => {
    const renderRows = () => {
        const list = props.list || [];

        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton styles="success" icon="check"
                        small onClick={ () => props.handleMarkAsDone(todo) } hide={todo.done} />
                    <IconButton styles="warning" icon="undo"
                        small onClick={ () => props.handleMarkAsPending(todo) } hide={!todo.done} />
                    <IconButton styles="danger" icon="trash"
                        small onClick={ () => props.handleDelete(todo) } />
                </td>
            </tr>
        ));
    }

    return (
        <div className='todoList row'>
            <Grid cols='12 12 12 12'>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th className="tableActions">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {renderRows()}
                    </tbody>
                </table>
            </Grid>
        </div>
    )
};