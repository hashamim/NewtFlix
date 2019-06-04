import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getShow } from '../actions/show_actions';


class Watch extends React.Component{
    constructor(props){
        super(props);
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
    render(){
        let player = undefined;
        if (this.myRef.current){
            player = this.myRef.current  
        }
        return (
            <div className="test-div" onPointerEnter={() => console.log("POINTER DIV ENTERR")}>
                <video
                    ref={this.myRef} 
                    width="100%" 
                    controls muted={true}
                    src={this.props.show ? this.props.show.video_url : null} 
                    type="video/mp4" 
                    onFocus={()=> console.log("Focused!!!")} 
                    onBlur={()=> console.log("Blurreddd!!!")} 
                    onPointerEnter={() => this.autoPlayVideo()}
                    onPointerLeave={() => console.log("POINTER LEFFTT!!")}>
                    Your Browser Does Not Support This Video
                </video>
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