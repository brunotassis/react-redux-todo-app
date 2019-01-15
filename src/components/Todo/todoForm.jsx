import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { add, changeDescription, search, clear } from './../../actions/todoActions.js'

import Grid from '../Template/grid';
import IconButton from '../Template/iconButton';

class TodoForm extends Component {
    constructor(props) {
        super(props);

        this.keyHandler = this.keyHandler.bind(this);
    }

    componentWillMount() {
        this.props.search();
    }

    keyHandler(e) {
        const { add, search, description, clear } = this.props;

        if (e.key === 'Enter') {
            e.shiftKey ? search() : add(description);
        } else if (e.key === 'Escape') {
            clear();
        }
    }

    render() {
        const { add, search, description } = this.props;

        return (
            <div role='form' className='todoForm row'>
                <Grid cols="12 9 10">
                    <input type="text"
                        id="description"
                        className="form-control"
                        onKeyUp={this.keyHandler}
                        onChange={this.props.changeDescription}
                        value={this.props.description} />
                </Grid>

                <Grid cols="12 3 2">
                    <IconButton styles='primary'
                        icon='plus' onClick={() => add(description)} />
                    <IconButton styles='info'
                        icon='search' onClick={search} />
                    <IconButton styles='default'
                        icon='close' onClick={this.props.clear} />
                </Grid>
            </div>
        )
    }
};

const mapStateToProps = state => ({
    description: state.todo.description
});

const mapDispatchToProps = dispatch => bindActionCreators({
    add,
    changeDescription,
    search,
    clear
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)
