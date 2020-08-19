import React from 'react';

const Image = props => {
    return(
        //Returns the image with a src using the provided props to generate the URL
        <li>
            <img src= {`https://farm${props.farm}.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`} alt={props.title} />
        </li>
    )
}

export default Image