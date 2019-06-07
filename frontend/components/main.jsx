import React from 'react';
import { connect } from 'react-redux';
import { getShows } from '../actions/show_actions';
import { NavLink, Link, Switch, Route, withRouter } from 'react-router-dom';
import Browse from './browse';
import { logout } from '../actions/session_actions';
import GenrePage from './genre_page';
import MyList from './my_list';
import { queryShows } from '../actions/show_actions';
import SearchPage from './search_page';
//Component
class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            atTop: true,
            searchVal: "",
        }
        this.handleSearch = this.handleSearch.bind(this);
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
    handleSearch(e){
        this.setState({searchVal: e.target.value});
        this.props.search(e.target.value);
        console.log(e.target.value);
    }
    componentWillUnmount(){
        window.onscroll = null;
    }
    render(){
        return (
            <>
                <div className={"priv-header" + (this.state.atTop ? " at-top" : "")}>
                    <div className="priv-header-left">
                        <Link to="/browse" className="priv-logo-container"><img className="priv-nflogo" src={window.netflixLogo}></img></Link>
                        <div className="priv-nav-bar">
                            <NavLink to="/browse" activeClassName="active">Home</NavLink>
                            <NavLink to={`/browse/genres/${window.tv_genre}`} activeClassName="active">All Shows</NavLink>
                            <NavLink to="/browse/my-list" activeClassName="active">My List</NavLink>
                        </div>
                    </div>
                    <div className="priv-header-resources">
                        <div className="header-search-bar" onFocus={() => this.props.history.push("/browse/search")} onChange={this.handleSearch}>
                            <i className="fas fa-search"></i>
                            <input type="text" placeholder="Enter Movie, TV Show, Genre, or Actor" ></input>
                        </div>
                        <div className="profile-dropdown">
                            <img src={window.profiles.green} onClick={this.props.logout}/>
                        </div>

                    </div>
                </div>
                <Switch>
                    <Route path="/browse/search" exact render={()=> <SearchPage shows={this.props.searchShows}/>} />
                    <Route path="/browse/genres/:genreId" exact component={GenrePage} />
                    <Route path="/browse/my-list" component={MyList} />
                    <Route component={Browse} />
                </Switch>
            </>
        )
    }
}
const msp = (state) => ({
    searchShows: state.entities.shows,
})
const mdp = (dispatch) => ({
    logout: () => dispatch(logout()),
    search: (queryStr) => dispatch(queryShows(queryStr))
})
export default withRouter(connect(msp,mdp)(Main));