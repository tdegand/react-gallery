//stateless component
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom'


class Nav extends React.Component{
    render() {
        return(
            <nav class="main-nav">
                <Router>
                    <ul>
                        <li>
                            <Link to='/cats'>Cats</Link>
                        </li>
                        <li>
                            <Link to='/dogs'>Dogs</Link>
                        </li>
                        <li>
                            <Link to='/computers'>Computers</Link>
                        </li>
                    </ul>
                </Router>
                
            </nav>
        )
    }
}

export default Nav;