# [NewtFlix](http://newtflix.herokuapp.com "NewtFlix")

Newtflix is meant to be a production level clone of Netflix. It implements many of the features found on the actual Netflix website such as:
* show blocks that autoplay video on hover and have basic controls that allow the user to add the video to their list or mute and unmute the hovered video

![show blocks](screenshots/show_block_gif.gif)
* ability to query the database for partial matches of either show title, genre, or casted actors

![search page](screenshots/search_gif.gif)
* A list of shows attached to each user that updates dynamically
* A signup page that renders errors on submit
* videos that are stored in a remote aws server
* A browse page that allows users to browse shows by genre

![browse page](screenshots/browse_page_gif.gif)

* A custom video player built on top of HTML5's video tag

![search page](screenshots/watch_gif.gif)

## How it Works
Newtflix uses a React frontend to render html elements and React-Redux to store data in the frontend. React-Router allows the user to quickly navigate to different elements of the site. The backend uses Rails with a Postgress database

## Key Features
 * Like the actual NetFlix site, Movies and TV Shows are laid out in groups of rows that contain individual interactive elements. Each block updates information in conjunction with get requests made to the server and get just enough information to be presented to the user and then request more information from the server when interacted with by the user, allowing for modular code.
 * Video previews autoplay in various locations of the site. Users can autoplay previews by hovering show blocks.
 * The watch page for each video has custom video controls that allow the user to do all the basic things they would do in any other video player
 * Search is done through the search bar on the main nav bar rather than on any specific page. As a result of this, the Main component handles search and decides whether to render the search page and also whether to snap back to the browse page based on the contents of the search bar.
 * Show components, the most common components found in the app are self contained and only need to have their id passed in in order to retrieve their data from Redux state The mapStateToProps function is created for each component (using the reselect library) in order to allow the use of memoization in order to prevent unnecessary re-renders.
 ```javascript
 //show.jsx
 const makeMsp = () => {
    let selectGenre = makeSelectGenre();
    const msp = (state,ownProps) => {
        return {
            showData: state.entities.shows[ownProps.id],
            genres: selectGenre(state, ownProps),
            isAdded: state.entities.user.showIds.includes(parseInt(ownProps.id)),
        }
    }
    return msp;
};
```
```javascript
//selectors.jsx
export const makeSelectGenre = () => {

    return createSelector(
    [getShowGenres, getGenreNames],
    (showGenreIds=[], genres) => {
        return showGenreIds.map( id => ({
            id,
            name: genres[id].name,
        }))
    }
)}
```
 * Search is done through the search bar on the main nav bar rather than on any specific page. As a result of this, the *Main* component handles search and decides whether to render the search page and also whether to snap back to the browse page based on the contents of the search bar.
 ```
 handleSearch(e){
        if(this.state.searchVal === ""){                  //if the previous state was empty go to search page
            this.props.history.push("/browse/search");
        }
        this.setState({searchVal: e.target.value});
        if (e.target.value === "") {                    // if the new state is empty go back to browse page
            this.props.history.push("/browse");
            return
        }
        this.props.search(e.target.value);      //dispatch action to rerender search slice of state
    }
```
* The search is done dynamically while the user is typing, each keystroke sends a GET request to the backend API endpoint (I realize this may not be scalable and in the future will implement a timeout limiting the number of times a user keystroke sends a request during a period of time). Once the request is complete, the response is packaged into a Redux action and passed through the reducer.

* The query is passed to all tables in the database using a series of left outer joins on all relevant tables:
```
@shows = Show
                .joins("LEFT OUTER JOIN show_genres ON show_genres.show_id = shows.id")
                .joins("LEFT OUTER JOIN genres ON show_genres.genre_id = genres.id")
                .joins("LEFT OUTER JOIN castings ON castings.show_id = shows.id")
                .joins("LEFT OUTER JOIN actors ON castings.actor_id = actors.id")
                .where("UPPER(genres.name) LIKE UPPER(:query) OR UPPER(actors.name) LIKE UPPER(:query) OR UPPER(shows.title) LIKE UPPER(:query)", query: str)
```
* The relevant shows are passed back to the front end to be added to state and a list of those shows is passed to the ui slice of state for display on the search page.
