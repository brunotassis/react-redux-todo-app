import React from 'react';
import If from './if'

export default props => (
    <If boolean={!props.hide}>
        <button className={ `btn btn-${props.styles} ${props.small ? 'btn-sm' : '' }` }
            onClick={props.onClick}>
            <i className={ `fa fa-${props.icon}` }></i>
        </button>
    </If>
)