import React from 'react';
import Show from './show';
class Genre extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentShow: null, //used for collapsing div
        }
    }

    render(){
        
        return (
            <>
                <h1 className="genre-title">{this.props.name}</h1> {/* Make Clickable */}
                <div className={`row-container ${this.props.currentGenre ? "active" : ""}`} onClick={this.props.setThisGenre}>
                    {this.props.showsContained.map((show, ind) => <Show key={ind} {...show} setParentGenre={this.props.setThisGenre}/>)}
                </div>
                <div className="collapsable">

                </div>
            </>
        )
    }
}
export default Genre;