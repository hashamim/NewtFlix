import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getShows, getShow } from '../actions/show_actions';
import { genresSelector } from '../reducers/selectors';

class Browse extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.fetchShows();
        this.props.fetchShow(1);
    }
    //http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4
    
    render(){
        debugger
        if(this.props.shows[1] === undefined){
            return <div></div>
        }
        const file = "/Users/hasnainshamim/Downloads/cat_in_the_sun.mp4"
        debugger
        return <div className="content-main">
            <img src={this.props.shows[1].title_card_url} />
            <video width="1280" height="720" controls> 
                <source src={this.props.shows[1].video_url} type="video/mp4"/>
                Your Browser Does Not Support This Video
            </video>
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