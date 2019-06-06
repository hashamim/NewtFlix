import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getShows, getShow } from '../actions/show_actions';
import { genresSelector } from '../reducers/selectors';
import GenreRow from './genre_row';
import BrowsePlayer from './browse_player';

class Browse extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentGenre: null,
            muted: true,
        }
    }
    componentDidMount(){
        this.props.fetchShows();
    }
    setCurrentGenre(ind){
        this.setState({currentGenre: ind});

    }

    render(){
        const genreRows = this.props.genres.map((genre, ind) => 
            <GenreRow key={ind} name={genre.name} id={genre.id} currentGenre={this.state.currentGenre === ind ? true : false} unsetThisGenre={() => this.setCurrentGenre(null)}setThisGenre={() => this.setCurrentGenre(ind)} showsContained={genre.show_ids.map((showId)=> this.props.shows[showId])}/>)
        return <div className="content-main">
            {Object.keys(this.props.shows)[0] ? <BrowsePlayer showId={Object.keys(this.props.shows)[0]} /> : null}
            {genreRows}
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