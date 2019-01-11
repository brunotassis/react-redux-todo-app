import React from 'react';
import Grid from '../Template/grid';
import IconButton from '../Template/iconButton';

export default props => (
    <div role='form' className='todoForm row'>
        <Grid cols="12 9 10">
            <input type="text"
                id="description"
                className="form-control"
                onChange={props.handleChange}
                value={props.description}/>
        </Grid>

        <Grid cols="12 3 2">
            <IconButton styles='primary btn-block' icon='plus' onClick={props.handleAdd} />
        </Grid>
    </div>
);