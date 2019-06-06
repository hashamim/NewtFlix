import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getShow } from '../actions/show_actions';

class BrowsePlayer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            muted: true,
        }
        this.myRef = React.createRef();
    }
    componentDidMount(){
        debugger
            this.props.fetchShow();
    }
    changeMuted() {
        if (this.state.muted) {
            this.setState({ muted: false });
        } else {
            this.setState({ muted: true });

        }
    }
    render(){
        debugger
        if (this.myRef.current) {
            this.myRef.current.muted = this.state.muted;
        }
        const muteButton = <img onClick={() => this.changeMuted()}
            src={this.myRef.current && !this.state.muted ? window.volume_image : window.mute_image} />;
        return <div className="video-container">
            <video ref={this.myRef} width="100%" autoPlay muted controls src={this.props.show ? this.props.show.video_url : null} type="video/mp4" >
                Your Browser Does Not Support This Video
                </video>
            <div className="video-buttons">
                <div className="controls-left">
                    <h1>{this.props.show ? this.props.show.title : null}</h1>
                    <span>
                        <Link className="link-button" to={`/watch/${this.props.show ? this.props.show.id : null}`}><button>Play</button></Link>
                        <a className="link-button"><button><i className="fas fa-plus fa-lg"></i> My List</button></a>
                    </span>
                    <h2>Watch Now</h2>
                    <p>{this.props.show ? this.props.show.description : null}</p>
                </div>
                <div className="controls-right">
                    {muteButton}
                    <span>{this.props.show ? this.props.show.maturity_rating : null}</span>
                </div>
            </div>
        </div>
    }
}

const msp = (state,ownProps) => ({
    show: state.entities.shows[ownProps.showId],
})

const mdp = (dispatch,ownProps) => {
    debugger
    return {
    fetchShow: ()=> dispatch(getShow(ownProps.showId)),
}}

export default connect(msp,mdp)(BrowsePlayer);