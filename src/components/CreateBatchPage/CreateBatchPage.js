import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
// import { Grid } from "@material-ui/core";


//This is the Create Batch page and will have the user able to:
// Create a Batch
// Name a Batch
// Input temps and time
// Submit the data to the database and be alerted if they are
// Unsuccessful ADD to Database AND Successful ADD to the Database.

const styles = {
  header: {
    backgroundColor: "#282c34",
    minHeight: "20vh",
    display: "flex", // is fine as there is not a dash.
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
    "&:hover": {
      // change to both KEY and the
      textDecoration: "underline",
      color: "red"
    }
  },
  Button: {
    background: "brown",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    display: "center",
  }
};

class CreateBatchPage extends Component {
  state = {
    style_id: "",
    beer_name: "",
    batch_name: "",
    temp_hlt: "",
    temp_mash_in: "",
    temp_mash_out: "",
    time_boil: "",
    notes: ""
  };

  componentDidMount() {
    this.props.dispatch({
      type: "FETCH_BATCH_INFO"
    });

    this.props.dispatch({
      type: "FETCH_STYLES_INFO"
    });
  };

  handlePost = event => {
    event.preventDefault();
    console.log("Submit Button has been Clicked");
    this.props.dispatch({
      type: "POST_INFO",
      payload: this.state
    });
  };

  // handleStylePost = event =>{
  //   event.preventDefault();
  //   console.log("Styles has been added to Beer Batch.");
  //   this.props.dispatch({
  //     type: "POST_STYLES",
  //     payload: this.state
  //   });
  // };

  handleChangeBeerType = event => {
    this.setState({
      style_id: event.target.value
    });
  };

  handleChangeBeerName = event => {
    this.setState({
      beer_name: event.target.value
    });
  };

  handleChangeBatchNumber = event => {
    this.setState({
      batch_name: event.target.value
    });
  };

  handleChangeHotLiquor = event => {
    this.setState({
      temp_hlt: event.target.value
    });
  };

  handleChangeMashIn = event => {
    this.setState({
      temp_mash_in: event.target.value
    });
  };

  handleChangeMashOut = event => {
    this.setState({
      temp_mash_out: event.target.value
    });
  };

  handleChangeBoilTime = event => {
    this.setState({
      time_boil: event.target.value
    });
  };

  handleChangeNotes = event => {
    this.setState({
      notes: event.target.value
    });
  };

  toLogBook = id => {
    this.props.history.push(`/logbook`); // brings the user to logbook
  };

  toHome = () => {
    this.props.history.push(`/`); // brings the user to home
  };

  render() {
    return (
      <div>
        <form id="table1" onSubmit={this.handlePost}>
          <div class="form-group">
            <label for="sel1">Beer Style:</label>
            {/* <select class="form-control" id="sel1"> */}
            <select
              // onSubmit={this.handleStylePost}
              className="form-control"
              onChange={this.handleChangeBeerType}
            >
              <option value="">None</option>
              {this.props.reduxStore.styleReducer.map(style => {
                return (
                  <option key={style.id} value={style.id}>
                    {style.beer_type}
                  </option>
                );
              })}
            </select>
          </div>
          <TextField
            label="Name of the Beer:"
            onChange={this.handleChangeBeerName}
            type="text"
            placeholder="Name the Beer / Batch"
            fullWidth
          />
          <br></br>
          <TextField
            label="Batch Number:"
            onChange={this.handleChangeBatchNumber}
            type="text"
            placeholder="Give your batch a number"
            fullWidth
          />
          <br></br>
          <TextField
            label="Hot Liquor Tank Temp:"
            onChange={this.handleChangeHotLiquor}
            type="text"
            placeholder="Please log the HLT Temp"
            fullWidth
          />
          <br></br>
          <TextField
            label="Mash-In Temp:"
            onChange={this.handleChangeMashIn}
            type="text"
            placeholder="Please log the Mash-In Temp"
            fullWidth
          />
          <br></br>
          <TextField
            label="Mash-Out Temp:"
            onChange={this.handleChangeMashOut}
            type="text"
            placeholder="Please log the Mash-Out Temp"
            fullWidth
          />
          <br></br>
          <TextField
            label="Boil Time:"
            onChange={this.handleChangeBoilTime}
            type="text"
            placeholder="Please log the Boil Time"
            fullWidth
          />
          <br></br>
          <TextField
            label="Notes:"
            onChange={this.handleChangeNotes}
            type="text"
            placeholder="Please log any notes"
            fullWidth
          />
          <br></br>
          <br></br>
          <Button
            variant="contained"
            color="secondary"
            onClick={this.toLogBook}
            type="submit"
          >
            Submit to Brew Log
          </Button>
        </form>
        <br></br>
        <Button className={this.props.classes.Button} onClick={this.toLogBook}>
          GO TO LOG BOOK
        </Button>
        <br></br>
        <Button className={this.props.classes.Button} onClick={this.toHome}>
          GO TO HOME PAGE
        </Button>
        <br></br>
      </div>
    );
  }
};

const mapStateToProps = reduxStore => {
    return{
        reduxStore
    };
};

export default connect(mapStateToProps)(withStyles(styles)(CreateBatchPage));