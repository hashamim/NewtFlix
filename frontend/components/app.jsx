import React from 'react';
import LoginForm from './login_form_container';
import { Switch, Route } from 'react-router-dom';
import SignupForm from './signup_form_container';
import {AuthRoute, PrivateRoute } from '../utils/route_utils';
import Splash from './splash';
import Main from './main';
const Dummy = () => (
    <h1>We OUT</h1>
)
export default (props) => {
    return (
        <Switch>
            <PrivateRoute path="/browse" component={Main} />
            <AuthRoute path="/" component={Splash}/>
        </Switch>
    )
}
