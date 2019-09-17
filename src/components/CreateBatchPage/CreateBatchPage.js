import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

//This is the Create Batch page and will have the user able to:
// Create a Batch
// Name a Batch
// Input temps and time
// Submit the data to the database and be alerted if they are
// Unsuccessful ADD to Database AND Successful ADD to the Database.

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

  handlePost = event => {
    event.preventDefault();
    console.log("Submit Button has been Clicked");
    this.props.dispatch({
      type: "POST_INFO",
      payload: this.state
    });
    this.setState ({
    style_id: "",
    beer_name: "",
    batch_name: "",
    temp_hlt: "",
    temp_mash_in: "",
    temp_mash_out: "",
    time_boil: "",
    notes: ""
    })
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
            // defaultValue={this.props.reduxStore.batchReducer.beer_name}
            // onChange={event => this.setState({ title: event.target.value })
            onChange={this.handleChangeBeerName}
            type="text"
            placeholder="Name the Beer / Batch"
            fullWidth
          />
          {/* <p>Name your Beer: </p> */}
          {/* <label for="sel1">Name your Beer: </label>
          <input
            class="batchForm"
            onChange={this.handleChangeBeerName}
            type="text"
            placeholder="Name the Beer / Batch"
          /> */}
          <br></br>

          <TextField
            label="Batch Number:"
            // defaultValue={this.props.reduxStore.batchReducer.beer_name}
            // onChange={event => this.setState({ title: event.target.value })
            onChange={this.handleChangeBatchNumber}
            type="text"
            placeholder="Give your batch a number"
            fullWidth
          />
          {/* <p>Give the batch a number: </p> */}
          {/* <label for="sel1">Give the batch a number: </label>
          <input
            class="batchForm"
            onChange={this.handleChangeBatchNumber}
            type="text"
            placeholder="Give your batch a number"
          /> */}
          <br></br>

          <TextField
            label="Hot Liquor Tank Temp:"
            // defaultValue={this.props.reduxStore.batchReducer.beer_name}
            // onChange={event => this.setState({ title: event.target.value })
            onChange={this.handleChangeHotLiquor}
            type="text"
            placeholder="Please log the HLT Temp"
            fullWidth
          />
          {/* <p>Hot-Liquor-Tank-Temp: </p> */}
          {/* <label for="sel1">Hot-Liquor-Tank Temp: </label>
          <input
            class="batchForm"
            onChange={this.handleChangeHotLiquor}
            type="text"
            placeholder="Please log the HLT Temp"
          /> */}
          <br></br>

          <TextField
            label="Mash-In Temp:"
            // defaultValue={this.props.reduxStore.batchReducer.beer_name}
            // onChange={event => this.setState({ title: event.target.value })
            onChange={this.handleChangeMashIn}
            type="text"
            placeholder="Please log the Mash-In Temp"
            fullWidth
          />
          {/* <p>Mash-In-Temp: </p> */}
          {/* <label for="sel1">Mash-In-Temp: </label>
          <input
            class="batchForm"
            onChange={this.handleChangeMashIn}
            type="text"
            placeholder="Please log the Mash-In Temp"
          /> */}
          <br></br>

          <TextField
            label="Mash-Out Temp:"
            // defaultValue={this.props.reduxStore.batchReducer.beer_name}
            // onChange={event => this.setState({ title: event.target.value })
            onChange={this.handleChangeMashOut}
            type="text"
            placeholder="Please log the Mash-Out Temp"
            fullWidth
          />
          {/* <p>Mash-Out-Temp: </p> */}
          {/* <label for="sel1">Mash-Out-Temp: </label>
          <input
            class="batchForm"
            onChange={this.handleChangeMashOut}
            type="text"
            placeholder="Please log the Mash-Out Temp"
          /> */}
          <br></br>

          <TextField
            label="Boil Time:"
            // defaultValue={this.props.reduxStore.batchReducer.beer_name}
            // onChange={event => this.setState({ title: event.target.value })
            onChange={this.handleChangeBoilTime}
            type="text"
            placeholder="Please log the Boil Time"
            fullWidth
          />
          {/* <p>Boil Time: </p> */}
          {/* <label for="sel1">Boil Time: </label>
          <input
            class="batchForm"
            onChange={this.handleChangeBoilTime}
            type="text"
            placeholder="Please log the Boil Time"
          /> */}
          <br></br>

          <TextField
            label="Notes:"
            // defaultValue={this.props.reduxStore.batchReducer.beer_name}
            // onChange={event => this.setState({ title: event.target.value })
            onChange={this.handleChangeNotes}
            type="text"
            placeholder="Please log any notes"
            fullWidth
          />
          {/* <p>Please leave detailed notes: </p> */}
          {/* <label for="sel1">Please leave detailed notes: </label>
          <input
            class="batchForm"
            onChange={this.handleChangeNotes}
            type="text"
            placeholder="Please log any notes"
          /> */}
          <br></br>
          <Button id="submitBtn" type="submit">Submit to Brew Log</Button>
        </form>
        <br></br>
        <Button id="logBookBtn" onClick={this.toLogBook}>GO TO LOG BOOK</Button>
        <br></br>
        <Button id="homePageBtn" onClick={this.toHome}>GO TO HOME PAGE</Button>
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

export default connect(mapStateToProps)(CreateBatchPage);