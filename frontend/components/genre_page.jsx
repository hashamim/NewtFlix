import React from 'react';
import { getShows } from '../actions/show_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ShowRow from './show_row';

class GenrePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentRow: null,
        }
    }
    componentDidMount(){
        this.props.fetchShows();
    }
    setCurrentRow(ind) {
        this.setState({ currentGenre: ind });
    }
    render(){
        const shows = this.props.genre ? this.props.genre.show_ids.slice() : [];
        const showRows = [];
        while(shows.length > 0){
            showRows.push(shows.splice(0,5));
        }
        return <div className="genre-page-container">
            <div className="genre-page-header">
                <h1>{this.props.genre ? this.props.genre.name : null}</h1>
            </div>
            <div className="genre-shows-list">
                {showRows.map((row, ind) => <ShowRow key={ind} showsContained={row.map((showId)=> this.props.shows[showId])} currentRow={this.state.currentRow === ind ? true : false} setThisRow={()=>this.setCurrentRow(ind)} unsetThisRow={()=> this.setCurrentRow(null)}/>)}
            </div>

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