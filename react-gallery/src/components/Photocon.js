import React from 'react';
import Photo from './Photo'

class PhotoCon extends React.Component{
    render(){
        return(
            <div class="photo-container">
                <h2>Results</h2>
                <Photo />
                
            </div>
        )
    }
}

export default PhotoCon;