import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getShows, getShow } from '../actions/show_actions';
import { genresSelector } from '../reducers/selectors';
import Genre from './genre';

class Browse extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentGenre: null,
        }
        this.myRef = React.createRef();
        // window.myRef = this.myRef;
    }
    componentDidMount(){
        this.props.fetchShows();
        this.props.fetchShow(1);
    }
    setCurrentGenre(ind){
        this.setState({currentGenre: ind});

    }
    render(){
        let player = undefined;
        if(this.myRef.current){
            player = this.myRef.current;
        }
        // if(this.props.shows[1] === undefined){
        //     return <div></div>
        // }
        const genreRows = this.props.genres.map((genre, ind) => 
            <Genre key={ind} currentGenre={this.state.currentGenre === ind ? true : false} setThisGenre={() => this.setCurrentGenre(ind)} showsContained={genre.show_ids.map((showId)=> this.props.shows[showId])}/>)
        const file = "/Users/hasnainshamim/Downloads/cat_in_the_sun.mp4"
        return <div className="content-main">
            {/* <img src={this.props.shows[1].title_card_url} /> */}
            <video ref={this.myRef} width="100%" autoPlay muted controls src={this.props.shows[1] ? this.props.shows[1].video_url : null} type="video/mp4" > 
                Your Browser Does Not Support This Video
            </video>
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