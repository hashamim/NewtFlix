import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getShows, getShow } from '../../actions/show_actions';
import { genresSelector, selectBrowseShows } from '../../reducers/selectors';
import GenreRow from './genre_row';
import BrowsePlayer from './browse_player';

class Browse extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentGenre: null,
            muted: true,
            currentShow: null,
        }
    }
    componentDidMount(){
        this.props.fetchShows().then((dispatchedAction) => this.setState({ currentShow: Math.floor(Math.random() * Object.keys(dispatchedAction.shows).length)}));
    }
    setCurrentGenre(ind){
        this.setState({currentGenre: ind});

    }

    render(){
        const genreRows = this.props.genres.map((genre, ind) => 
            <GenreRow key={ind} name={genre.name} id={genre.id} currentGenre={this.state.currentGenre === ind ? true : false} unsetThisGenre={() => this.setCurrentGenre(null)}setThisGenre={() => this.setCurrentGenre(ind)} showsContained={genre.show_ids}/>)
        return <div className="content-main">
            {(this.state.currentShow !== null) ? <BrowsePlayer showId={Object.keys(this.props.shows)[this.state.currentShow]} /> : <div style={{width: '100vw', height: '75vw'}}></div>}
            {genreRows }
        </div>
    }
}

// React-redux
const msp = (state) => ({
    genres: genresSelector(state),
    shows: state.entities.shows,
});

const mdp = (dispatch) => ({
    fetchShows: () => dispatch(getShows()),
    fetchShow: (id) => dispatch(getShow(id)),
})

export default withRouter(connect(msp, mdp)(Browse));