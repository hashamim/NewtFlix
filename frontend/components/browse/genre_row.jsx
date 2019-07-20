import React from 'react';
import ShowRow from '../show_containers/show_row';
import { Link } from 'react-router-dom';

class GenreRow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentRow: 0,
            hovered: false,
        }
        this.transRef = React.createRef();
    }

    moveCarousel(num){
        let ind = this.state.currentRow;
        ind += num;
        if(ind < 0){
            this.transRef.current.style.left = "25vw";
            setTimeout(() => this.setState({ currentRow: 0 }), 300);
        } else if (ind >= this.rows.length){
            this.transRef.current.style.left = `-${(this.rows.length - 1) * 100 + 25}vw`;
            setTimeout(() => this.setState({ currentRow: this.rows.length-1 }), 300);
        } else {
            this.setState({
                currentRow: ind,
            })
        }
    }

    render(){
        this.rows = [];
        let rows = this.props.showsContained.slice();
        while (rows.length > 0) {
            this.rows.push(rows.splice(0, 5));
        }
        if (this.transRef.current) {
            this.transRef.current.style.left = `${-this.state.currentRow * 100}%`;
            this.transRef.current.style.width = `${this.rows.length * 100}%`;
        }
        
        return (
            <>
                <Link to={`/browse/genres/${this.props.id}`} className="genre-title">{this.props.name}<i className="fas fa-chevron-right"></i></Link> {/* Make Clickable */}
                <div className="genre-container" onPointerEnter={()=>this.setState({hovered: true})} onPointerLeave={()=>this.setState({hovered: false})}>
                    {this.state.hovered ? <img className="left-carousel-btn" src={window.left_chevron_image} onClick={()=>this.moveCarousel(-1)}></img> : null}
                    <div className={"genre-slider" + (this.props.currentGenre ? " active" : "")}>
                        <div className="genre-row" ref={this.transRef}>
                            {this.rows.map((row,ind)=>
                            <ShowRow key={ind} showsContained={row} currentRow={this.props.currentGenre} setThisRow={this.props.setThisGenre} unsetThisRow={this.props.unsetThisGenre} />
                            )}
                        </div>
                    </div>
                    {this.state.hovered ? <img className="right-carousel-btn" src={window.right_chevron_image} onClick={() => this.moveCarousel(1)}></img> : null}
                </div>
            </>
        )
    }
}
export default GenreRow;

