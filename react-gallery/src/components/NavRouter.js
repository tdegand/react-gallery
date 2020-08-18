//stateless component
import React from 'react';



// Displays the Top level navigation
class Nav extends React.Component{
    render() {
        return(
            <nav className="main-nav">
                <ul>
                <li><a href='/cats'>Cats</a></li>
                <li><a href='/dogs'>Dogs</a></li>
                <li><a href='/computers'>Computers</a></li>
                </ul>
            </nav>
        )
    }
}

export default Nav;