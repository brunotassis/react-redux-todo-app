import React, { Component } from 'react';

class Grid extends Component{
    toCssClass(numbes){
        let colClass = '';
        const cols = numbes ? numbes.split(' ') : [];

        if(cols[0]) colClass += `col-xs-${cols[0]} `;
        if(cols[1]) colClass += `col-sm-${cols[1]} `;
        if(cols[2]) colClass += `col-md-${cols[2]} `;
        if(cols[3]) colClass += `col-lg-${cols[3]}`;

        return colClass;
    }

    render(){
        const gridClass = this.toCssClass(this.props.cols || 12);

        return(
            <div className={gridClass}>
                {this.props.children}
            </div>
        )
    }
}

export default Grid;
