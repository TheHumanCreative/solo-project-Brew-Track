import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class StartBrewingPage extends Component {
 toCreateBatch = id => {
   this.props.history.push(`/create`); // brings the user to logbook
 };

 toHome = () => {
   this.props.history.push(`/`); // brings the user to home
 };

 toLogBook = id => {
   this.props.history.push('/logbook');
 };

render(){
  return(
  <div>
    <p>START BREWING</p>
    <Button onClick={this.toLogBook}>GO TO LOG BOOK</Button>
    <br>
    </br>
    <Button onClick={this.toCreateBatch}>GO TO CREATE BATCH</Button>
    <br>
    </br>
    <Button onClick={this.toHome}>GO TO HOME PAGE</Button>
  </div>
);
}}

const mapStateToProps = reduxStore => {
  return{
    reduxStore
  };
};

export default connect(mapStateToProps)(StartBrewingPage);
