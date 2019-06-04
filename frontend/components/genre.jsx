import React from 'react';
import Show from './show';
class Genre extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentShow: null,
        }
    }

    render(){
        
        return (
            <div className={`genre-container ${this.props.currentGenre ? "active" : ""}`} onClick={this.props.setThisGenre}>
                {this.props.showsContained.map((show, ind) => <Show key={ind} {...show}/>)}
            </div>
        )
    }
}
export default Genre;