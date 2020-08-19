import React from 'react';
import Image from './Image';

//Photo Component to render the APi call for each photo.

const PhotoList = props => {

        // Generates photo information for the URL
        let imageData= props.data.map(data => 
            <Image 
                farm={data.farm}
                server={data.server}
                id={data.id}
                secret={data.secret}
                key={data.id}
                title={data.title}
            />
        );

    return(
        <div className="photo-container">
            <h3>{props.name}</h3>
            <ul>
                { imageData }
            </ul>
        </div>
    )
}

export default PhotoList;