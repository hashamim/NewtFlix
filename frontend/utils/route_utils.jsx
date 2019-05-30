import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const msp = (state) => ({
    loggedIn: state.session.id,
});

const Auth = ({loggedIn, path, component: Component}) => (
    <Route
        path={path}
        render={props => (
            loggedIn ?
                <Redirect to='/browse' /> :
                <Component {...props} />
        )
        }
    />
);

const Private = ({ loggedIn, path, component: Component }) => (
    <Route 
        path={path}
        render={props => (
            loggedIn ?
                <Component {...props} /> :
                <Redirect to='/login' />
        )
        }
    />
);

export const AuthRoute = withRouter(connect(msp,null)(Auth));
export const PrivateRoute = withRouter(connect(msp,null)(Private));