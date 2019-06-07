import React from 'react';
import ShowsGroup from '../show_containers/shows_group';

class SearchPage extends React.Component{
    constructor(props){ //this.props.query_string
        super(props);
    }
    render(){
        const showList = this.props.shows ? Object.values(this.props.shows) : []

        return <div className="genre-page-container">
            <ShowsGroup shows={showList} />
        </div>
    }
}

export default SearchPage;