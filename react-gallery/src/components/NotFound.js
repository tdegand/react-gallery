//stateless component
import React from 'react';

//Renders a not found message if users naviaget to URL that does not exist
class NotFound extends React.Component{
    render() {
        return(
            <li className="not-found">
                <h3>No Results Found</h3>
                <p>You search did not return any results. Please try again.</p>
            </li>
        )   
    }
}

export default NotFound;