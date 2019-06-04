import React from 'react';

class Show extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hovered: false,
        }
        this.changeToHovered = this.changeToHovered.bind(this);
        this.changeToUnHovered = this.changeToUnHovered.bind(this);
    }
    changeToHovered(){
        this.setState({ hovered: true })
    }
    changeToUnHovered(){
        this.setState({ hovered: false })
    }
    render(){
        debugger
        const hoveredElements = <>
            <video />
            <div className="show-interface"></div>
        </>
        return (
            <div className={"show-container" + (this.state.hovered ? " hovered" : "")} onPointerEnter={this.changeToHovered} onPointerLeave={this.changeToUnHovered}>
                <img className="title-card" src={this.props.title_card_url} />
            </div>
        )
    }
}

export default Show;
