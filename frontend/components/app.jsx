import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {AuthRoute, PrivateRoute } from '../utils/route_utils';
import Splash from './authentication/splash';
import Main from './main';
import Watch from './watch/watch';


const Dummy = () => (
    <h1>We OUT</h1>
)
export default (props) => {
    return (
        <Switch>
            <PrivateRoute path="/watch/:show_id" component={Watch} />
            <PrivateRoute path="/browse" component={Main} />
            <AuthRoute path="/" component={Splash}/>
        </Switch>
    )
}
