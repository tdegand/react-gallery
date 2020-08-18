import React from 'react';

const Image = props => {
    return(
        <li>
            <img src= {`https://farm${this.props.farm}.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`} alt="" />
        </li>
    )
}

export default Image