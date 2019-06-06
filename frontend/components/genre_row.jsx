import React from 'react';
import Show from './show';
import ShowRow from './show_row';
import { Link } from 'react-router-dom';

// class Genre extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             currentShow: null, //used for collapsing div
//         }
//     }

//     render(){
        
//         return (
//             <>
//                 <div className={`row-container ${this.props.currentGenre ? "active" : ""}`}>
//                     {this.props.showsContained.map((show, ind) => <Show key={ind} {...show} setParentGenre={this.props.setThisGenre}/>)}
//                 </div>
//                 <div className="collapsable">

//                 </div>
//             </>
//         )
//     }
// }
const GenreRow = (props) => {
    return (
        <>
            <Link to={`/browse/genres/${props.id}`} className="genre-title">{props.name}<i className="fas fa-chevron-right"></i></Link> {/* Make Clickable */}
            <ShowRow showsContained={props.showsContained} currentRow={props.currentGenre} setThisRow={props.setThisGenre} unsetThisRow={props.unsetThisGenre}/>
        </>
    )
}
export default GenreRow;

