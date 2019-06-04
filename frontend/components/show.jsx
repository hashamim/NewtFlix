import React from 'react';
import { getShow } from '../actions/show_actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
class Show extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hovered: false,
            muted: true,
        }
        this.myRef = React.createRef();
        this.changeToHovered = this.changeToHovered.bind(this);
        this.changeToUnHovered = this.changeToUnHovered.bind(this);
    }
    componentDidMount(){
        this.props.fetchGenres();
    }
    changeToHovered(){
        this.setState({ hovered: true })
        console.log("hovered")
    }
    changeToUnHovered(){
        // this.setState({ hovered: false })
        console.log("unnnnhovered")
    }
    changeMuted(){
        debugger
        if(this.state.muted){
            this.setState({muted: false});
        } else {
            this.setState({ muted: true });

        }
    }
    render(){
        const muteButton = <img onClick={()=>this.changeMuted()}
            src={this.myRef.current && this.state.muted ? window.volume_image : window.mute_image} />;
        let player = null;
        if(this.myRef.current){
            this.myRef.current.muted = this.state.muted;
        }
        const genresRender = this.props.genre_ids.map((genre_id,ind) => <li key={ind}>{this.props.genres[genre_id].name}</li>)
        const hoveredElements = <>
            <video className="show-video-player" 
                width="100%" 
                height="100%"
                ref={this.myRef}
                autoPlay
                muted
                src={this.props.video_url ? this.props.video_url : null}
                >
                Your Browser Does Not Support This Video
            </video>
            <div className="show-interface" onClick={divClick}>
                <div className="show-quick-interface">
                    <div className="show-info">
                        <Link to={`/watch/${this.props.id}`}>
                            <img className="play-icon" src={window.play_image} />
                        </Link>
                        <h1>{this.props.title}</h1>
                        <span><h1>{this.props.maturity_rating}</h1></span>
                        <ul>{genresRender}</ul>
                    </div>
                    <div className="show-actions">
                        {muteButton}
                        <img src={window.mute_image} />
                        <img src={window.volume_image} />
                        <img src={window.add_image} />
                        <img src={window.add_image} />
                    </div>
                </div>
                <div className="show-dropdown">

                </div>
            </div>
        </>
        return (
            <div className={"show-container" + (this.state.hovered ? " hovered" : "")} onPointerEnter={this.changeToHovered} onPointerLeave={this.changeToUnHovered}>
                <img className="title-card" src={this.props.title_card_url} />
                {this.state.hovered ? hoveredElements : null}
            </div>
        )
    }
}

const msp = (state) => ({
    genres: state.entities.genres,
});

const mdp = (dispatch, ownProps) => ({
    fetchGenres: () => dispatch(getShow(ownProps.id))
})

export default connect(msp,mdp)(Show);
