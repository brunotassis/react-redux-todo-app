import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Todo from '../components/Todo';
import About from '../components/About';
import Menu from '../components/Template/menu';

export default props => (
    <BrowserRouter>
        <React.Fragment>
            <Menu />
            <div className="container">
                <Switch>
                    <Route exact path='/todo' component={Todo} />
                    <Route exact path='/about' component={About} />

                    <Redirect from='*' to='/todo' />
                </Switch>
            </div>
        </React.Fragment>
    </BrowserRouter>
);
