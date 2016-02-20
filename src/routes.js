import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './components/content/home';
import About from './components/content/about';

const routes = (
<Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="about" component={About}/>
</Route>
);

export default routes;
