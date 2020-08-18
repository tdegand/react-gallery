import React from 'react';
import Image from './Image';

//Photo Component to render the APi call for each photo.
const PhotoList = props => {
    
    const catResults = props.cats;
    let cats = catResults.map(cat =>
        <Image 
            url={'https://farm' + cat.photo.farm + '.staticflickr.com/' + cat.photo.server + '/' + cat.photo.id + '_' + cat.photo.secret +'.jpg'}
        />
    );
    // const dogResults = props.dogs;
    // const computerResults = props.computers;

    return(
        <ul>
            {cats}
        </ul>
    )
}

export default PhotoList;