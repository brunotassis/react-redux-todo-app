import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import Todo from '../components/Todo';
import About from '../components/About';
import Menu from '../components/Template/menu';

import reducers from '../reducers';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers, devTools);

export default props => (
    <Provider store={store}>
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
    </Provider>
);
