import React from 'react';
import { getShows } from '../../actions/show_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ShowsGroup from '../show_containers/shows_group';

class MyList extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchShows();
    }

    render() {
        debugger
        const shows = (this.props.shows.length > 0) ? this.props.list.slice() : [];
        return <div className="show-page-container">
            <div className="genre-page-header">
                <h1>My List</h1>
            </div>
            <ShowsGroup shows={shows} />

        </div>
    }
}

const msp = (state, ownProps) => {
        
    return {
        list: state.entities.user.showIds,
        shows: state.entities.shows.allIds,
    }
}

const mdp = (dispatch, ownProps) => ({
    fetchShows: () => dispatch(getShows()),
})

export default withRouter(connect(msp, mdp)(MyList));