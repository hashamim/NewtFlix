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
        const shows = (this.props.shows.allIds.length > 0) ? this.props.list : [];
        debugger
        return <div className="show-page-container">
            <div className="genre-page-header">
                <h1>{this.props.list ? this.props.list.name : null}</h1>
            </div>
            <ShowsGroup shows={shows} />

        </div>
    }
}

const msp = (state, ownProps) => {
        
    return {
        list: state.entities.user.showIds.slice(),
        shows: state.entities.shows,
    }
}

const mdp = (dispatch, ownProps) => ({
    fetchShows: () => dispatch(getShows()),
})

export default withRouter(connect(msp, mdp)(MyList));