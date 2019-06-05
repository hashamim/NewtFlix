import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getShow } from '../actions/show_actions';


class Watch extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            controlsActive: false,
        }
        this.myRef = React.createRef();
    }
    componentDidMount(){
        this.props.fetchShow(this.props.match.params.show_id);
    }
    autoPlayVideo(){
        if(this.myRef.current.paused){
        console.log(this.myRef.current.muted = false);
        }
    }
    setActive(){
        if(this.intervalId){
            clearInterval(this.intervalId);
        }
        this.tick = true;
        this.setState({ controlsActive: true });
        this.intervalId = setInterval(() => this.unSetActive(), 1000);
    }
    unSetActive(){
        debugger
        if(this.tick === false){
        this.setState({controlsActive: false});
        clearInterval(this.intervalId);
        } else {
            this.tick = false;
        }
    }
    render(){
        let player = undefined;
        if (this.myRef.current){
            player = this.myRef.current  
        }
        return (
            <div className="watch-video-container">
                <video
                    ref={this.myRef} 
                    width="100%"
                    controls
                    src={this.props.show ? this.props.show.video_url : null} 
                    type="video/mp4" 
                >
                    Your Browser Does Not Support This Video
                </video>
                <div className="video-controls" onPointerMove={() => this.setActive()}>
                    {this.state.controlsActive ? <><i className="fas fa-arrow-left fa-2x"></i> <span>Back to Browse</span></> : null}
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