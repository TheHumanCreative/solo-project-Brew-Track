import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
//This is the Create Batch page and will have the user able to:
// Create a Batch
// Name a Batch
// Input temps and time
// Submit the data to the database and be alerted if they are
// Unsuccessful ADD to Database AND Successful ADD to the Database.

class EditBatchPage extends Component {
  state = {
    beer_type: "",
    beer_name: "",
    batch_name: "",
    temp_hlt: "",
    mash_in_temp: "",
    mash_out_temp: "",
    time_boil: "",
    notes: ""
  };

  handlePost = event => {
    event.preventDefault();
    console.log("Submit Button has been Clicked");
    this.props.dispatch({
      type: "POST_INFO",
      payload: this.state
    });
  };

  handleStylePost = event =>{
    event.preventDefault();
    console.log("Styles has been added to Beer Batch.");
    this.props.dispatch({
      type: "POST_STYLES",
      payload: this.state
    });
  };

  handleChangeBeerType = event => {
    this.setState({
      beer_type: event.target.value
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
      mash_in_temp: event.target.value
    });
  };

  handleChangeMashOut = event => {
    this.setState({
      mash_out_temp: event.target.value
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

  componentDidMount() {
    this.props.dispatch({
      type: "FETCH_BATCH_INFO"
    });

    this.props.dispatch({
      type: "FETCH_STYLES_INFO"
    });
  }

  // handleDelete(user_id, id) {
  //   console.log("this is the id to be DELETED:", id);
  //   console.log("this is the user who will be DELETED", user_id);
  //   this.props.dispatch({
  //     type: "DELETE_USER_BATCH",
  //     payload: { id: id, user_id: user_id }
  //   });
  // }

  toLogBook = id => {
    this.props.history.push(`/logbook`); // brings the user to logbook
  };

  toHome = () => {
    this.props.history.push(`/`); // brings the user to home
  };

  render() {
   
    return (
      <div>
        <form
          id="table1"
          onSubmit={this.handlePost}
          
        >
          <div class="form-group">
            <label for="sel1">Beer Style:</label>
            {/* <select class="form-control" id="sel1"> */}
            <select
              onSubmit={this.handleStylePost}
              className="form-control"
              onChange={this.handleChangeBeerType}
            >
              <option value="">None</option>
              {this.props.reduxStore.styleReducer.map(style => {
                return (
                  <option key={style.id} value={style.beer_type}>
                    {style.beer_type}
                  </option>
                );
              })}
            </select>
          </div>
          {/* <p>Name your Beer: </p> */}
          <label for="sel1">Name your Beer: </label>
          <input
            class="batchForm"
            onChange={this.handleChangeBeerName}
            type="text"
            placeholder="Name the Beer / Batch"
          />
          <br></br>
          {/* <p>Give the batch a number: </p> */}
          <label for="sel1">Give the batch a number: </label>
          <input
            class="batchForm"
            onChange={this.handleChangeBatchNumber}
            type="text"
            placeholder="Give your batch a number"
          />
          <br></br>
          {/* <p>Hot-Liquor-Tank-Temp: </p> */}
          <label for="sel1">Hot-Liquor-Tank Temp: </label>
          <input
            class="batchForm"
            onChange={this.handleChangeHotLiquor}
            type="text"
            placeholder="Please log the HLT Temp"
          />
          <br></br>
          {/* <p>Mash-In-Temp: </p> */}
          <label for="sel1">Mash-In-Temp: </label>
          <input
            class="batchForm"
            onChange={this.handleChangeMashIn}
            type="text"
            placeholder="Please log the Mash-In Temp"
          />
          <br></br>
          {/* <p>Mash-Out-Temp: </p> */}
          <label for="sel1">Mash-Out-Temp: </label>
          <input
            class="batchForm"
            onChange={this.handleChangeMashOut}
            type="text"
            placeholder="Please log the Mash-In Temp"
          />
          <br></br>
          {/* <p>Boil Time: </p> */}
          <label for="sel1">Boil Time: </label>
          <input
            class="batchForm"
            onChange={this.handleChangeBoilTime}
            type="text"
            placeholder="Please log the Boil Time"
          />
          <br></br>
          {/* <p>Please leave detailed notes: </p> */}
          <label for="sel1">Please leave detailed notes: </label>
          <input
            class="batchForm"
            onChange={this.handleChangeNotes}
            type="text"
            placeholder="Please log any notes"
          />
          <br></br>
          <button type="submit">Submit to Brew Log</button>
        </form>
        <br>
        </br>
        <Button onClick={this.toLogBook}>GO TO LOG BOOK</Button>
        <br>
        </br>
        <Button onClick={this.toHome}>GO TO HOME PAGE</Button>
        <br>
        </br>
      </div>
    );
  }
};

const mapStateToProps = reduxStore => {
    return{
        reduxStore
    };
};

export default connect(mapStateToProps)(EditBatchPage);