import React from 'react';
import { AuthRoute } from '../utils/route_utils';
import LoginForm from './login_form_container';
import SignupForm from './signup_form_container';
import { Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default ({match}) => {
    const bgStyle = {
        backgroundImage: `url("${window.formBackground}")`
    }
    const headerButton = match.isExact ? <button><Link to="/login">Sign In</Link></button> : null;
    return <div className="auth-container">
        <div className="auth-header">
            <a className="a-nflogo">
                <img className="img-nflogo" src={window.netflixLogo} />
            </a>
            {headerButton}
        </div>
        <div className="session-background" style={bgStyle}></div>
        <Switch>
            <AuthRoute path="/login" component={LoginForm} />
            <AuthRoute path="/signup" component={SignupForm} />
            <>
                <div className="splash-background-filter"></div>
                <div className="splash-content">
                    
                    <div className="ctn-main">
                        <h1>
                            See what's next.
                        </h1>
                        <p>
                            WATCH ANYWHERE. CANCEL ANYTIME.
                        </p>
                    </div>
                    <div className="btn-wrapper">
                        <Link to="/signup">
                            <button>TRY 30 DAYS FREE</button>
                        </Link>
                    </div>
                    <span>
                        Have an account? <Link to="/login">Sign In</Link>
                    </span>
                    <div className="icons">

                    </div>
                </div>
            </>

        </Switch>
        <div className="auth-footer">

        </div>
    </div>
}