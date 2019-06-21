import React from 'react';
import { AuthRoute } from '../../utils/route_utils';
import LoginForm from './login_form_container';
import SignupForm from './signup_form_container';
import { Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import { connect } from 'react-redux';
const Splash = (props) => {
    const bgStyle = {
        backgroundImage: `url("${window.formBackground}")`
    }
    const headerButton = props.match.isExact ? <button><Link to="/login">Sign In</Link></button> : null;
    return <div className="auth-container">
        <div className="auth-header">
            <Link to="/" className="a-nflogo">
                <img className="img-nflogo" src={window.netflixLogo} />
            </Link>
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
                        <a onClick={props.demoLogin}>
                            <button>TRY THE DEMO</button>
                        </a>

                    </div>
                    <span>
                        Have an account? <Link to="/login">Sign In</Link>
                    </span>
                    <div className="splash-footer">
                        <a href="https://github.com/hashamim" aria-label="github" data-balloon-pos="up">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://linkedin.com/in/hasnainshamim" aria-label="linkedin" data-balloon-pos="up">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <div aria-label="copy email to clipboard" data-balloon-pos="up">
                            <i className="fas fa-at" onClick={() => {
                                const copyText = document.getElementById("copy-text");
                                copyText.style.display = "initial"
                                copyText.select();
                                document.execCommand("copy");
                                copyText.style.display = "none";
                                }}>
                                    
                            </i>
                            <input style={{display: "none"}} type="text"id="copy-text" value="hashamim@gmail.com" readOnly/>
                        </div>
                    </div>
                </div>
            </>

        </Switch>
    </div>
}

const mdp = (dispatch) => ({
    demoLogin: () => dispatch(login({email: "email@example.com", password: "password"})),
});

export default connect(null,mdp)(Splash);