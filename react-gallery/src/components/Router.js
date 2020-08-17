import React from 'react';
import Photo from './Photo'
import NotFound from './NotFound';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

class Router extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <div className="photo-container">
                    <Switch>
                    <Route exact path="/" component={Photo} />
                    <Route path="/cats" component={Photo} />
                    <Route path="/dogs" component={Photo} />
                    <Route path="/computers" component={Photo} />
                    <Route component={NotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default Router;