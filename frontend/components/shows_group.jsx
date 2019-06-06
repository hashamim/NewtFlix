import React from 'react';
import ShowRow from './show_row';
class ShowsGroup extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentRow: null,
        }
    }
    setCurrentRow(ind){
        this.setState({currentRow: ind});
    }
    render(){
        const shows = this.props.shows.slice();
        const showRows = []
        while (shows.length > 0) {
            showRows.push(shows.splice(0, 5));
        }
        return <div className="genre-shows-list">
            {showRows.map((row, ind) => <ShowRow key={ind} showsContained={row} currentRow={this.state.currentRow === ind ? true : false} setThisRow={() => this.setCurrentRow(ind)} unsetThisRow={() => this.setCurrentRow(null)} />)}
        </div>
    }
}

export default ShowsGroup