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
    width: "100%",
    minHeight: "20vh",
    display: "flex", // is fine as there is not a dash.
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    // fontSize: "calc(10px + 2vmin)",
    color: "white"
   
  },
  Button: {
    background: "brown",
    color: "white",
    border: "1px solid black",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      // change to both KEY and the
      // textDecoration: "underline",
      color: "black",
    }
  },
  main: {
    backgroundImage: "url('./images/homebrewery.jpg')",
    backgroundSize: "100%",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    height: "2000px",
  },
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
        <main className={this.props.classes.main}>
        <Grid
          container
          justify={"space-evenly"}
          spacing={12}
          alignItems={"center"}
        >
          <Grid
            container
            justify={"space-evenly"}
            spacing={12}
            alignItems={"center"}
          >
            <b>
              <header className={this.props.classes.header}>
                START BREWING
              </header>
            </b>
          </Grid>
          <br></br>
          <Grid>
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

          <Grid>
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

          <Grid>
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
        </main>
      </div>
  );
}}

const mapStateToProps = reduxStore => {
  return{
    reduxStore
  };
};

export default connect(mapStateToProps)(withStyles(styles)(StartBrewingPage));
