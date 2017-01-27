import React from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

import App      from '../components/App'
import Home     from '../components/home/Home';
import About    from '../components/about/About';
import Gallery  from '../components/gallery/Gallery';

export default (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="fine-art" component={Gallery}/>
            <Route path="graphic-design" component={Gallery}/>
            <Route path="about" component={About}/>
        </Route>
    </Router>
);
