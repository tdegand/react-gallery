//stateless component
import React from 'react';
import { NavLink } from 'react-router-dom';

// Displays the Top level navigation
class Nav extends React.Component{
    render() {
        return(
            <nav className="main-nav">
                <ul>
                <li>
                    <NavLink to='/cats'>Cats</NavLink>
                </li>
                <li>
                    <NavLink to='/dogs'>Dogs</NavLink>
                </li>
                <li>
                    <NavLink to='/computers'>Computers</NavLink>
                </li>
                </ul>
            </nav>
        )
          }
    }

export default Nav;