import React from 'react';
import ShowRow from '../show_containers/show_row';
import { Link } from 'react-router-dom';

const GenreRow = (props) => {
    return (
        <>
            <Link to={`/browse/genres/${props.id}`} className="genre-title">{props.name}<i className="fas fa-chevron-right"></i></Link> {/* Make Clickable */}
            <ShowRow showsContained={props.showsContained} currentRow={props.currentGenre} setThisRow={props.setThisGenre} unsetThisRow={props.unsetThisGenre}/>
        </>
    )
}
export default GenreRow;

