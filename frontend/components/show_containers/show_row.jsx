import React from 'react';
import Show from './show';

class ShowRow extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            currentShow: null, //used for collapsing div
        }
    }
    render() {
        
        return (
            <>
                <div className={`row-container ${this.props.currentRow ? "active" : ""}`} >
                    {this.props.showsContained.map((id, ind) => <Show key={ind} id={id} setParentRow={this.props.setThisRow} unsetParentRow={this.props.unsetThisRow}/>)}
                </div>
                <div className="collapsable">

                </div>
            </>
        )
    }
}

export default ShowRow;