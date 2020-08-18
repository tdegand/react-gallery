import React from 'react';
import Image from './Image';

//Photo Component to render the APi call for each photo.
const PhotoList = props => {
    
    // let catData= this.props.cats.map(cat => 
    //     <Image 
    //         farm={cat.photo.farm}
    //         server={cat.photo.server}
    //         id={cat.photo.id}
    //         secret={cat.photo.secret}
    //     />
    // );
    // const dogResults = props.dogs;
    // const computerResults = props.computers;

    return(
        <ul>
            <Image />
        </ul>
    )
}

export default PhotoList;