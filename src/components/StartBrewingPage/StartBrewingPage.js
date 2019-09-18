import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const styles = {
  header: {
    fontSize: "34px",
    border: "10px solid black",
    backgroundColor: "green",
    minHeight: "20vh",
    display: "flex", // is fine as there is not a dash.
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    // fontSize: "calc(10px + 2vmin)",
    color: "white"
    // "&:hover": {
    //   // change to both KEY and the
    //   textDecoration: "underline",
    //   color: "red"
    // }
  },
  Button: {
    border: "1px solid black",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  }
};

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
  return (
    <div>
      <Grid
        container
        justify={"space-evenly"}
        spacing={8}
        alignItems={"center"}
      >
        <Grid item xs>
          <header className={this.props.classes.header}>START BREWING</header>
        </Grid>

        <Grid 
        container 
        justify={"space-evenly"} 
        spacing={40}
        direction={"row"}>
          <Button
            className={this.props.classes.Button}
            variant="contained"
            // color="primary"
            color="green"
            onClick={this.toLogBook}
          >
            GO TO LOG BOOK
          </Button>
        </Grid>

        <Grid container justify={"space-evenly"} spacing={40}>
          <Button
            className={this.props.classes.Button}
            variant="contained"
            // color="primary"
            color="green"
            onClick={this.toCreateBatch}
          >
            GO TO CREATE BATCH
          </Button>
        </Grid>

        <Grid container justify={"space-evenly"} spacing={12}>
          <Button
            className={this.props.classes.Button}
            variant="contained"
            // color="primary"
            color="green"
            onClick={this.toHome}
          >
            GO TO HOME PAGE
          </Button>
        </Grid>
        
      </Grid>
    </div>
  );
}}

const mapStateToProps = reduxStore => {
  return{
    reduxStore
  };
};

export default connect(mapStateToProps)(withStyles(styles)(StartBrewingPage));
