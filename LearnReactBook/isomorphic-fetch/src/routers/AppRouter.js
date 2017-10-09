import React from 'react';
import {
  BrowserRouter, Route, Switch, Link, NavLink
}
from 'react-router-dom';
import Template from '../components/template';
const AppRouter = () => ( < BrowserRouter > < div > < h1 > header component here <
  /h1>

  < Switch >
  < Route path = "/"
  component = {
    Template
  }
  /> </Switch > < /div >  < /BrowserRouter > );
export default AppRouter;
