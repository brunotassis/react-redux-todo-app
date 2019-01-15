import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Grid from '../Template/grid';
import IconButton from '../Template/iconButton'
import { markAsDone, markAsPending, remove } from '../../actions/todoActions';

const TodoList = props => {
    const renderRows = () => {
        const list = props.list || [];

        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton styles="success" icon="check"
                        small onClick={ () => props.markAsDone(todo) } hide={todo.done} />
                    <IconButton styles="warning" icon="undo"
                        small onClick={ () => props.markAsPending(todo) } hide={!todo.done} />
                    <IconButton styles="danger" icon="trash"
                        small onClick={ () => props.remove(todo) } />
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

const mapStateToProps = state => ({
    list: state.todo.list
});

const mapDispatchToProps = dispatch => bindActionCreators({
    markAsDone,
    markAsPending,
    remove
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
