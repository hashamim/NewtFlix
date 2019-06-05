import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getShows, getShow } from '../actions/show_actions';
import { genresSelector } from '../reducers/selectors';
import Genre from './genre';

class Browse extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentGenre: null,
            muted: true,
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
    changeMuted() {
        if (this.state.muted) {
            this.setState({ muted: false });
        } else {
            this.setState({ muted: true });

        }
    }
    render(){
        if (this.myRef.current) {
            this.myRef.current.muted = this.state.muted;
        }
        // if(this.props.shows[1] === undefined){
        //     return <div></div>
        // }
        const muteButton = <img onClick={() => this.changeMuted()}
            src={this.myRef.current && !this.state.muted ? window.mute_image : window.volume_image} />;
        const genreRows = this.props.genres.map((genre, ind) => 
            <Genre key={ind} currentGenre={this.state.currentGenre === ind ? true : false} setThisGenre={() => this.setCurrentGenre(ind)} showsContained={genre.show_ids.map((showId)=> this.props.shows[showId])}/>)
        const file = "/Users/hasnainshamim/Downloads/cat_in_the_sun.mp4"
        return <div className="content-main">
            <div className="video-container">
                <video ref={this.myRef} width="100%" autoPlay muted controls src={this.props.shows[1] ? this.props.shows[1].video_url : null} type="video/mp4" > 
                    Your Browser Does Not Support This Video
                </video>
                <div className="video-buttons">
                    <div className="controls-left">
                        <h1>{this.props.shows[1] ? this.props.shows[1].title : null}</h1>
                        <span>
                            <Link className="link-button" to={`/watch/${this.props.shows[1] ? this.props.shows[1].id : null}`}><button>Play</button></Link>
                            <a className="link-button"><button><i className="fas fa-plus fa-lg"></i> My List</button></a>
                        </span>
                        <h2>Watch Now</h2>
                        <p>{this.props.shows[1] ? this.props.shows[1].description : null}</p>
                    </div>
                    <div className="controls-right">
                        {muteButton}
                        <span>{this.props.shows[1] ? this.props.shows[1].maturity_rating : null}</span>
                    </div>
                </div>
            </div>
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