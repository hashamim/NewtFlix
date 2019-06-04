import React from 'react';
import { connect } from 'react-redux';
import { getShows } from '../actions/show_actions';
import { NavLink, Link, Switch, Route, withRouter } from 'react-router-dom';
import Browse from './browse';
//Component
class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            atTop: true,
        }

    }
    componentDidMount(){
        window.onscroll = () => {
            if (window.pageYOffset <= 10) {
                this.setState({atTop: true})
            } else if(this.state.atTop === true){
                this.setState({atTop: false})
            }
        };
    }
    componentWillUnmount(){
        window.onscroll = null;
    }
    render(){
        return (
            <div>
                <div className={"priv-header" + (this.state.atTop ? " at-top" : "")}>
                    <Link to="/browse" className="priv-logo-container"><img className="priv-nflogo" src={window.netflixLogo}></img></Link>
                    <div className="priv-nav-bar">
                        <NavLink to="/browse" activeClassName="active">Home</NavLink>
                        <NavLink to="/browse/genres" activeClassName="active">Genres</NavLink>
                        <NavLink to="/browse/my-list" activeClassName="active">My List</NavLink>
                    </div>
                    <div className="priv-header-resources">
                        <div className="header-search"></div>
                        <div className="header-profile"></div>
                    </div>
                </div>
                <Switch>
                    <Route component={Browse} />
                </Switch>
            </div>
        )
    }
}

export default Main;