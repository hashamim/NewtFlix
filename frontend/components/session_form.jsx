import React from 'react';
import { Link } from 'react-router-dom';
const SIGNUP_TEXT = "Sign Up"; ////MAKE SURE THIS MATCHES IN signup_form_component.js
class SessionForm extends React.Component{
    //props needed:
    /*
    {
        action: dispatches proper session action,
        formtype: login or signup,
    }
    */
    constructor(props){
        super(props);
        this.state = {
            profile: "",
            email: "",
            password: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.action(this.state);
    }
    handleChange(field){
        return (e) =>
        {
            this.setState({
                [field]: e.target.value,
            })
        }
    }
    demoLogin(e){
        e.preventDefault();
        this.props.action({email: "email@example.com", password: "password"});
    }

    render(){
        const errorClassName = this.props.errors.length > 0 ? "input-error" : "";
        debugger
        const profile = this.props.formType === SIGNUP_TEXT ?
            (
                <label >
                    <input 
                        type="text" 
                        className="profile" 
                        onChange={this.handleChange('profile')} 
                        value={this.state.profile}
                        placeholder="Enter Profile Name"
                    />
                </label>
            ) :
            "";
        const demoLogin = <button className="demo-login" onClick={this.demoLogin}>Log In to the Demo</button>;
        const formTypeString = this.props.formType === SIGNUP_TEXT ? "Sign Up" : "Sign In";
        const altSession = (this.props.formType === SIGNUP_TEXT ?
            <span>Already Have an Account? <Link to="/login">Sign In</Link>.</span> :
            <span>New to NetFlix? <Link to="/signup">Sign Up</Link>.</span>
        );
        return (
            <>
                <div className="session-background-filter"></div>
                <div className="session-form-container">
                    <form className="session-form" onSubmit={this.handleSubmit}>
                        <h1>{formTypeString}</h1>
                        {profile}
                        <label>
                            <input
                                type="text"
                                className={errorClassName}
                                onChange={this.handleChange('email')}
                                value={this.state.email}
                                placeholder="Enter Email Address"
                            />
                        </label>
                        <label>
                            <input
                                type="password"
                                className={"password " + errorClassName}
                                onChange={this.handleChange('password')}
                                value={this.state.password}
                                placeholder="Enter Password"
                            />
                        </label>
                        <button>{formTypeString}</button>
                    </form>
                    {demoLogin}
                    {altSession}
                </div>
            </>
        )
    }
}

export default SessionForm;