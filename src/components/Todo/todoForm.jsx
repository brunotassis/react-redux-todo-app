import React from 'react';
import Grid from '../Template/grid';
import IconButton from '../Template/iconButton';

export default props => {
    const keyHandler = (e) => {
        if(e.key === 'Enter'){
            e.shiftKey ? props.handleSearch() : props.handleAdd();
        }else if(e.key === 'Escape'){
            props.handleClear();
        }
    }

    return (
        <div role='form' className='todoForm row'>
            <Grid cols="12 9 10">
                <input type="text"
                    id="description"
                    className="form-control"
                    onKeyUp={keyHandler}
                    onChange={props.handleChange}
                    value={props.description} />
            </Grid>

            <Grid cols="12 3 2">
                <IconButton styles='primary'
                    icon='plus' onClick={props.handleAdd} />
                <IconButton styles='info'
                    icon='search' onClick={props.handleSearch} />
                <IconButton styles='default'
                    icon='close' onClick={props.handleClear} />
            </Grid>
        </div>
    )
};