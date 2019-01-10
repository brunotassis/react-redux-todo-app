import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import React from 'react';
import Todo from './components/Todo';
import About from './components/About';
import Menu from './components/Template/menu';


export default props => (
  <div className='container'>
    <Menu />
    <Todo />
    <About />
  </div>
)
