//stateless component
import React from 'react';

//Renders a not found message if users navigates to URL that does not exist
class NotFound extends React.Component{
    render() {
        return(
            <div className="not-found">
                <h3>404:Page could not be found</h3>
                <p>You search did not return any results. Please try again.</p>
            </div>
                
        )   
    }
}

export default NotFound;