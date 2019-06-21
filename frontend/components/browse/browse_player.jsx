import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getShow } from '../../actions/show_actions';
import { createListItem, destroyListItem } from '../../actions/list_actions';


class BrowsePlayer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            muted: true,
        }
        this.updateList = this.updateList.bind(this);
        this.myRef = React.createRef();
        this.checkVideoInView = this.checkVideoInView.bind(this);
    }
    componentDidMount(){
        this.props.fetchShow();
        window.addEventListener("scroll", this.checkVideoInView);
        window.addEventListener("focus", this.checkVideoInView);
        window.addEventListener("blur", this.checkVideoInView);
    }
    componentWillUnmount(){
        window.removeEventListener("scroll", this.checkVideoInView);
        window.removeEventListener("focus", this.checkVideoInView);
        window.removeEventListener("blur", this.checkVideoInView);
    }
    checkVideoInView(focusEvent){
        if(this.myRef.current === undefined){
            return;
        }
        const videoPlayer = document.getElementById("top-video");
        if(focusEvent.type === "scroll" || focusEvent.type === "focus"){
            if (videoPlayer && (window.pageYOffset / videoPlayer.clientHeight > 0.5)){
                if(!this.myRef.current.paused){
                    this.myRef.current.pause();
                }
            } else {
                if (this.myRef.current.paused){
                    this.myRef.current.play();
                }
            }
        } else if (focusEvent.type === "blur"){
            this.myRef.current.pause();
        }
    }
    changeMuted() {
        if (this.state.muted) {
            this.setState({ muted: false });
        } else {
            this.setState({ muted: true });

        }
    }
    updateList(){
        if (this.props.isAdded){
            this.props.removeFromList();
        } else {
            this.props.addToList();
        }
    }
    render(){
        if (this.myRef.current) {
            this.myRef.current.muted = this.state.muted;
        }
        const muteButton = <img onClick={() => this.changeMuted()}
            src={this.myRef.current && !this.state.muted ? window.volume_image : window.mute_image} />;
        return <div className="video-container" id="top-video">
            <video ref={this.myRef} width="100%" autoPlay src={this.props.show ? this.props.show.video_url : null} type="video/mp4" >
                Your Browser Does Not Support This Video
                </video>
            <div className="video-buttons">
                <div className="controls-left">
                    <h1>{this.props.show ? this.props.show.title : null}</h1>
                    <span>
                        <Link className="link-button" to={`/watch/${this.props.show ? this.props.show.id : null}`}><button><i className="fas fa-play"></i>Play</button></Link>
                        <a className="link-button">
                            <button onClick={this.updateList}>
                                <i className={(this.props.isAdded ? "fas fa-check" : "fas fa-plus") + " fa-lg"}></i> 
                                My List
                            </button>
                        </a>
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

const msp = (state,ownProps) => {
    return{
    show: state.entities.shows[ownProps.showId],
    isAdded: state.entities.user.showIds.includes(parseInt(ownProps.showId)),
}}

const mdp = (dispatch,ownProps) => {
    return {
        fetchShow: ()=> dispatch(getShow(ownProps.showId)),
        addToList: () => dispatch(createListItem(ownProps.showId)),
        removeFromList: () => dispatch(destroyListItem(ownProps.showId)),
    }
}

export default connect(msp,mdp)(BrowsePlayer);