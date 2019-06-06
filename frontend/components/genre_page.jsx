import React from 'react';
import { getShows } from '../actions/show_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import ShowRow from './show_row';
import ShowsGroup from './shows_group';

class GenrePage extends React.Component {
    constructor(props){
        super(props);
        // this.state = {
        //     currentRow: null,
        // }
    }
    componentDidMount(){
        this.props.fetchShows();
    }

    render(){
        const shows = this.props.genre ? this.props.genre.show_ids.map((showId)=>this.props.shows[showId]) : [];

        return <div className="genre-page-container">
            <div className="genre-page-header">
                <h1>{this.props.genre ? this.props.genre.name : null}</h1>
            </div>

            <ShowsGroup shows={shows}/>

        </div>
    }
}

const msp = (state, ownProps) => {
    return {
        genre: state.entities.genres[ownProps.match.params.genreId],
        shows: state.entities.shows,
}}

const mdp = (dispatch, ownProps) => ({
    fetchShows: () => dispatch(getShows()),
})

export default withRouter(connect(msp,mdp)(GenrePage));