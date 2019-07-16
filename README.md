# NewtFlix

Newtflix is meant to be a production level clone of Netflix. It implements many of the features found on the actual Netflix website such as:
* show blocks that autoplay video on hover and have basic controls that allow the user to add the video to their list or mute and unmute the hovered video
* ability to query the database for partial matches of either show title, genre, or casted actors
* A list of shows attached to each user that updates dynamically
* A signup page that renders errors on submit
* videos that are stored in a remote aws server
* A browse page that allows users to browse shows by genre
Check out the website at http://newtflix.herokuapp.com/#/browse

## How it Works
Newtflix uses a React frontend to render html elements and React-Redux to store data in the frontend. React-Router allows the user to quickly navigate to different elements of the site. The backend uses Rails with a Postgress database

## Key Features
 * Like the actual NetFlix site, Movies and TV Shows are laid out in groups of rows that contain individual interactive elements. Each block updates information in conjunction with get requests made to the server and get just enough information to be presented to the user and then request more information from the server when interacted with by the user, allowing for modular code.
 * Video previews autoplay in various locations of the site. Users can autoplay previews by hovering show blocks.
 * The watch page for each video has custom video controls that allow the user to do all the basic things they would do in any other video player
 * Components are interlinked to through react-routes that quickly allow subcomponents to take the user to different main pages.
 

