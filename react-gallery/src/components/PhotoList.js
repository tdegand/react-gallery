import React from 'react';
import Image from './Image';

//Photo Component to render the APi call for each photo.

const PhotoList = props => {

        let imageData= props.data.map(data => 
            <Image 
                farm={data.farm}
                server={data.server}
                id={data.id}
                secret={data.secret}
                key={data.id}
            />
        );

    return(
        <ul>
            { imageData }
        </ul>
    )
}

export default PhotoList;