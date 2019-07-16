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
 * Routes prevent anonymous users from accessing private routes without logging in, and logged in users from accessing authroization routes without being logged out.
 ```javascript
 const Auth = ({loggedIn, path, component: Component}) => (
    <Route
        path={path}
        render={props => (
            loggedIn ?
                <Redirect to='/browse' /> :
                <Component {...props} />
        )
        }
    />
);

const Private = ({ loggedIn, path, component: Component }) => (
    <Route 
        path={path}
        render={props => (
            loggedIn ?
                <Component {...props} /> :
                <Redirect to='/' />
        )
        }
    />
);
```
  * Components are linked to via React-Routes that are accessed through the main entry file of the app. 
  ```javascript
        <Switch>
            <PrivateRoute path="/watch/:show_id" component={Watch} />
            <PrivateRoute path="/browse" component={Main} />
            <AuthRoute path="/" component={Splash}/>
        </Switch>
 ```

