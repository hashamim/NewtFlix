import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { getShow } from '../../actions/show_actions';

const SLIDER_SEGMENTS = 1000
class Watch extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            pointerActive: false,
            controlsActive: false,
            currentSec: 0,
            paused: false,
            volume: 25,
        }
        this.player = React.createRef();
        this.unSetActive = this.unSetActive.bind(this);
        this.handleSeek = this.handleSeek.bind(this);
        this.handleVolume = this.handleVolume.bind(this);
    }
    componentDidMount(){
        this.props.fetchShow(this.props.match.params.show_id);
        this.player.current.volume = this.state.volume / 50;
        this.play();
    }
    componentWillUnmount(){
        clearTimeout(this.timer);
        clearInterval(this.seekUpdateInterval);
    }
    autoPlayVideo(){
        if(this.player.current.paused){
        }
    }
    setActive(){
        clearTimeout(this.timer);
        this.timer = setTimeout(this.unSetActive,1000);
        if(this.state.pointerActive === false){
            this.setState({pointerActive: true})
        }
    }
    unSetActive() {
        this.setState({ pointerActive: false });
    }

    play(){
        this.player.current.play();
        this.setState({paused: false});
        this.seekUpdateInterval = setInterval(()=>{
            this.setState({currentSec: this.player.current.currentTime});
            if(this.player.current.currentTime === this.player.current.duration){
                this.setState({paused: true});
            }},
            this.player.current.duration / SLIDER_SEGMENTS * 1000)
    }
    pause() {
        this.player.current.pause();
        this.setState({paused: true});
    }
    handleSeek(e){
        debugger
        this.setState({ currentSec: e.target.value / SLIDER_SEGMENTS * this.player.current.duration});
        this.player.current.currentTime = e.target.value / SLIDER_SEGMENTS * this.player.current.duration;
    }
    handleVolume(e){
        this.setState({volume: e.target.value})
        this.player.current.volume = e.target.value/50;
    }
    seekForward(e){
        this.setState({currentSec: Math.min(this.state.currentSec + 5, this.duration)},
            ()=> this.player.current.currentTime = this.state.currentSec);
    }

    seekBackward(e) {
        this.setState({ currentSec: Math.max(this.state.currentSec - 5, 0) },
            () => this.player.current.currentTime = this.state.currentSec);
    }
    fullScreen() {
        this.player.current.requestFullscreen();
    }
    goNext() {
        this.setState({currentSec: this.duration},() => this.player.current.currentTime = this.duration)
    }
    render(){
        if(this.player.current){
            this.duration = this.player.current.duration;
        }
        const playButton = this.state.paused ?
            <i className="fas fa-play" onClick={()=>this.play()}></i> :
            <i className="fas fa-pause" onClick={()=>this.pause()}></i>
        const volumeDown = <i className="fas fa-volume-down"></i>;
        const volumeUp = <i className="fas fa-volume-up"></i>;
        const volumeMuted = <i className="fas fa-volume-mute"></i>;
        let volumeButton;
        if (this.player.current){
            if(this.player.current.volume === 0){
                volumeButton = volumeMuted;
            } else if(this.player.current.volume <= 0.5){
                volumeButton = volumeDown;
            } else {
                volumeButton = volumeUp;
            }
        }
        return (
            <div className="watch-video-container" >
                <video
                    ref={this.player} 
                    width="100%"
                    src={this.props.show ? this.props.show.video_url : null} 
                    type="video/mp4" 
                >
                    Your Browser Does Not Support This Video
                </video>
                <div className={"controls-container"} 
                    onPointerMove={() => this.setActive()}
                >
                    <div className={"hidden-controls" + ((this.state.pointerActive || this.state.controlsActive) ? "" : " hidden")}>
                        <Link to="/browse"><i className="fas fa-arrow-left fa-2x"></i> <span>Back to Browse</span></Link>
                        <div className="bottom-controls">
                            <div className="play-bar">
                                <input type="range" min="0" max={SLIDER_SEGMENTS} className="seek-bar" value={this.state.currentSec / this.duration * SLIDER_SEGMENTS} onChange={this.handleSeek}/>
                            </div>
                            <div className="player-controls" onPointerLeave={()=>{document.getElementById("volume-input").blur()}}>
                                <div className="left-controls" >
                                    {playButton}
                                    <i className="fas fa-undo-alt" onClick={()=> this.seekBackward()}></i>
                                    <i className="fas fa-redo-alt" onClick={()=>this.seekForward()}></i>
                                    <div className="volume-control">
                                        {volumeButton}
                                        <input type="range" min="0" max="50" className="volume-dropdown" id="volume-input"
                                            value={this.state.volume}
                                            onChange={this.handleVolume}/>
                                    </div>
                                    <span>{this.props.show ? this.props.show.title : null}</span>
                                </div>
                                <div className="right-controls">
                                    <i className="fas fa-step-forward" onClick={()=>this.goNext()}></i>
                                    <i className="fas fa-closed-captioning"></i>
                                    <i className="fas fa-compress" onClick={()=>this.fullScreen()}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
//react-redux
const msp = (state, ownProps) => {
    return {
        show: state.entities.shows[ownProps.match.params.show_id],
    }
}

const mdp = (dispatch, ownProps) => ({
    fetchShow: (id) => dispatch(getShow(id)),
})

export default connect(msp,mdp)(Watch);