import React from 'react';
import Grid from '../Template/grid';

export default props => (
    <div className='todoList row'>
        <Grid cols='12 12 12 12'>
            <ul>
                {props.list.map((item, key) => {
                    return (

                        <li key={key}>{item}</li>
                    )
                })}
            </ul>
        </Grid>
    </div>
);