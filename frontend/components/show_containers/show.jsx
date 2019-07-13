import React from 'react';
import { getShow } from '../../actions/show_actions';
import { connect } from 'react-redux';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { createListItem, destroyListItem } from '../../actions/list_actions';
class Show extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hovered: false,
            muted: true,

        }
        this.updateList = this.updateList.bind(this);
        this.myRef = React.createRef();
        this.changeToHovered = this.changeToHovered.bind(this);
        this.changeToUnHovered = this.changeToUnHovered.bind(this);
    }
    componentDidMount(){
    }
    changeToHovered(){
        this.props.fetchGenres();
        this.hoverInterval = setTimeout(()=>{this.setState({ hovered: true });
        this.props.setParentRow();
        }, 250);
    }
    changeToUnHovered(){
        clearInterval(this.hoverInterval);
        this.setState({ hovered: false })
        this.props.unsetParentRow();
    }
    changeMuted(e){
        if(this.state.muted){
            this.setState({muted: false});
        } else {
            this.setState({ muted: true });

        }
    }
    updateList(){
        if(this.props.isAdded){
            this.props.removeFromList()
        } else {
            this.props.addToList()
        }
    }
    divClick(e){
        if(e.target.className === "show-quick-interface" || e.target.className === "show-interface"){
            this.props.history.push(`/watch/${this.props.id}`)
        }
    }
    render(){
        const muteButton = <img onClick={()=>this.changeMuted()}
            src={this.myRef.current && !this.state.muted ? window.volume_image : window.mute_image} />;
        let player = null;
        if(this.myRef.current){
            this.myRef.current.muted = this.state.muted;
        }

        const genresRender = !this.props.show.genre_ids ? null : this.props.show.genre_ids.map((genre_id,ind) => <li key={ind}>{this.props.genres[genre_id].name}</li>)
        const hoveredElements = <>
            <video className="show-video-player" 
                width="100%" 
                height="100%"
                ref={this.myRef}
                autoPlay
                muted
                src={this.props.show.video_url ? this.props.show.video_url : null}
                >
                Your Browser Does Not Support This Video
            </video>
            <div className="show-interface" onClick={(e)=>this.divClick(e)}>
                <div className="show-quick-interface">
                    <div className="show-info">
                        <Link to={`/watch/${this.props.show.id}`}>
                            <img className="play-icon" src={window.play_image} />
                        </Link>
                        <h1>{this.props.show.title}</h1>
                        <span><h1>{this.props.show.maturity_rating}</h1></span>
                        <ul>{genresRender}</ul>
                    </div>
                    <div className="show-actions">
                        {muteButton}
                        <img onClick={this.updateList} src={ this.props.isAdded ? window.check_image : window.add_image} />
                    </div>
                </div>
                <div className="show-dropdown">

                </div>
            </div>
        </>
        return (
            <div className={"show-container" + (this.state.hovered ? " hovered" : "")} onPointerEnter={this.changeToHovered} onPointerLeave={this.changeToUnHovered} >
                <img className="title-card" src={this.props.show.title_card_url} />
                {this.state.hovered ? hoveredElements : null}
            </div>
        )
    }
}

const msp = (state,ownProps) => {
    return {
    genres: state.entities.genres,
    isAdded: state.entities.user.showIds.includes(parseInt(ownProps.show.id)),
}};

const mdp = (dispatch, ownProps) => {
    return {
    fetchGenres: () => dispatch(getShow(ownProps.show.id)),
    addToList: () => dispatch(createListItem(ownProps.show.id)),
    removeFromList: () => dispatch(destroyListItem(ownProps.show.id)),
}}

export default withRouter(connect(msp,mdp)(Show));
