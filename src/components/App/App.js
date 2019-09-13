import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import {connect} from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import UserPage from '../UserPage/UserPage';
import StartBrewingPage from '../StartBrewingPage/StartBrewingPage';
import EditBatchPage from '../EditBatchPage/EditBatchPage';
import CreateBatchPage from '../CreateBatchPage/CreateBatchPage';
import LogBookPage from '../LogBookPage/LogBookPage';


import './App.css';


class App extends Component {
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            {/* <Route exact path="/logbook" component={LogBookPage} /> */}
            {/* <Route exact path="/start" component={StartBrewingPage} /> */}
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <ProtectedRoute exact path="/home" component={UserPage} />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            {/* <ProtectedRoute exact path="/info" component={InfoPage} /> */}
            {/* If none of the other routes matched, we will show a 404. */}
            <Route exact path="/start" component={StartBrewingPage} />
            {/* <ProtectedRoute exact path="/start" component={StartBrewingPage} />
            This route is for the start page of the application */}
            <ProtectedRoute exact path="/create" component={CreateBatchPage} />
            {/* This route is for the create page of the application*/}
            <Route exact path="/edit" component={EditBatchPage} />
            {/* This route is for the edit page of the application*/}
            <Route exact path="/logbook" component={LogBookPage} />
            {/* This route is for the view all logs page of the application*/}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );}
}



export default connect()(App);
