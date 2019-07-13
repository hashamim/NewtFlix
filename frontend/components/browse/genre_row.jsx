import React from 'react';
import ShowRow from '../show_containers/show_row';
import { Link } from 'react-router-dom';

// const GenreRow = (props) => {
//     return (
//         <>
//             <Link to={`/browse/genres/${props.id}`} className="genre-title">{props.name}<i className="fas fa-chevron-right"></i></Link> {/* Make Clickable */}
//             <ShowRow showsContained={props.showsContained} currentRow={props.currentGenre} setThisRow={props.setThisGenre} unsetThisRow={props.unsetThisGenre}/>
//         </>
//     )
// }
class GenreRow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentRow: 0,
            hovered: false,
        }
    }

    moveCarousel(num){
        let ind = this.state.currentRow;
        ind += num;
        if(ind < 0){
            ind = this.rows.length - 1;
        } else if (ind >= this.rows.length){
            ind = 0;
        }
        this.setState({
            currentRow: ind,
        })
    }

    render(){
        this.rows = [];
        let rows = this.props.showsContained.slice();
        while (rows.length > 0) {
            this.rows.push(rows.splice(0, 5));
        }
        return (
            <>
                <Link to={`/browse/genres/${this.props.id}`} className="genre-title">{this.props.name}<i className="fas fa-chevron-right"></i></Link> {/* Make Clickable */}
                <div className="genre-container" onPointerEnter={()=>this.setState({hovered: true})} onPointerLeave={()=>this.setState({hovered: false})}>
                    {this.state.hovered ? <img className="left-carousel-btn" src={window.left_chevron_image} onClick={()=>this.moveCarousel(-1)}></img> : null}
                    {/* <div className="genre-row"> */}
                        <ShowRow showsContained={this.rows[this.state.currentRow] ? this.rows[this.state.currentRow] : []} currentRow={this.props.currentGenre} setThisRow={this.props.setThisGenre} unsetThisRow={this.props.unsetThisGenre} />
                    {/* </div> */}
                    {this.state.hovered ? <img className="right-carousel-btn" src={window.right_chevron_image} onClick={() => this.moveCarousel(1)}></img> : null}
                </div>
            </>
        )
    }
}
export default GenreRow;

