import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getShows } from '../actions/show_actions';
import { genresSelector } from '../reducers/selectors';

class Browse extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.fetchShows();
    }

    render(){
        debugger
        return <div className="content-main">
            Contents Here
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
})

export default withRouter(connect(msp, mdp)(Browse));