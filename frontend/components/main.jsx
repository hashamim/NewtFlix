import React from 'react';
import { connect } from 'react-redux';
import { getShows } from '../actions/show_actions';
import { NavLink, Link, Switch, Route, withRouter } from 'react-router-dom';
import Browse from './browse/browse';
import { logout } from '../actions/session_actions';
import GenrePage from './genres/genre_page';
import MyList from './my_list/my_list';
import { queryShows } from '../actions/show_actions';
import SearchPage from './search/search_page';
import { searchSelector } from '../reducers/selectors';


//Component
class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            atTop: true,
            searchVal: "",
            searchFocused: false,
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.inputRef = React.createRef();
        this.handleX = this.handleX.bind(this);
        this.focusSearch = this.focusSearch.bind(this);
        this.blurSearch = this.blurSearch.bind(this);
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
    componentWillUnmount() {
        window.onscroll = null;
    }
    focusSearch(e){
        this.setState({ searchFocused: true }, () => this.inputRef.current.focus());
    }
    blurSearch(){
        if(this.state.searchVal === ""){
            this.setState({searchFocused: false});
        }
    }
    handleSearch(e){
        if(this.state.searchVal === ""){
            this.props.history.push("/browse/search");
        }
        this.setState({searchVal: e.target.value});
        if (e.target.value === "") {
            this.props.history.push("/browse");
            return
        }
        this.props.search(e.target.value);
    }
    handleX() {
        // this.setState({searchVal: ""});
        this.handleSearch({target: {value: ""}});
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
                        <div className={"header-search-bar" + (this.state.searchFocused ? " focused" : "")} onClick={this.focusSearch} onBlur={this.blurSearch}>
                            <i className="fas fa-search"></i>
                            <input type="text" placeholder="Title, Person, Genre" value={this.state.searchVal} onChange={this.handleSearch} ref={this.inputRef}></input>
                            <i className="fas fa-times" onClick={this.handleX}></i>
                        </div>
                        <div className="profile-dropdown" aria-label="signout" data-balloon-pos="down">
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
                <div className="main-footer">
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
                        <input style={{ display: "none" }} type="text" id="copy-text" value="hashamim@gmail.com" readOnly />
                    </div>
                </div>
            </>
        )
    }
}
const msp = (state) => ({
    searchShows: searchSelector(state),
})
const mdp = (dispatch) => ({
    logout: () => dispatch(logout()),
    search: (queryStr) => dispatch(queryShows(queryStr))
})
export default withRouter(connect(msp,mdp)(Main));