import React from 'react';
import PhotoList from './PhotoList'
import NotFound from './NotFound';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

class Router extends React.Component {
    render() {
        return(
            <BrowserRouter>
                    <Switch>
                    <Route exact path="/" component={PhotoList} />
                    <Route path="/cats" component={PhotoList} />
                    <Route path="/dogs" component={PhotoList} />
                    <Route path="/computers" component={PhotoList} />
                    <Route component={NotFound} />
                    </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;