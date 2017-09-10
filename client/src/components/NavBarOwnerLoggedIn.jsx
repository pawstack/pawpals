import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Browse from './Browse';
import ProfileOwner from './ProfileOwner';
import FindMyDog from './FindMyDog';


class NavBarOwnerLoggedIn extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Router>
          <div>
            <IconMenu
              iconButtonElement={
                <IconButton><MoreVertIcon /></IconButton>
              }
              targetOrigin={{horizontal: 'right', vertical: 'top'}}
              anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            >
              <MenuItem
                primaryText="My Profile"
                onTouchTap = {() => console.log('touch1') }
                containerElement={<Link to="/profilepage/owner" />}
              />
              <MenuItem
                primaryText="Browse Walks"
                onTouchTap = {() => console.log('touch2') }
                containerElement={<Link to="/browse" />}
              />
              <MenuItem
                primaryText="Find My Dog"
                containerElement={<Link to='/findmydog' />}
              />
              <MenuItem
                primaryText="History"
              />
              <MenuItem
                primaryText="Sign out"
                href = '/logout'
              />
            </IconMenu>

            <Route exact path="/profilepage/owner" component={ProfileOwner}/>
            <Route exact path="/browse" component={Browse}/>
            <Route exact path="/findmydog" component={FindMyDog}/>

          </div>


        </Router>
      </div>
    );
  }
}



export default NavBarOwnerLoggedIn;