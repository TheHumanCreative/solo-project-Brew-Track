import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class EditBatchPage extends Component {

  componentDidMount() {
    // this.props.dispatch({
    //   type: "FETCH_BATCH_INFO"
      
    // });

      // this.props.dispatch({
      //   type: "FETCH_BATCH_ITEM"
      // });
      this.fetchbatch();


    // this.props.dispatch({
    //   type: "FETCH_STYLES_INFO"
      
    // });
  }


  fetchbatch = () => {
    let id = this.props.match.params.id;
    this.props.dispatch({
      type: "FETCH_BATCH_ITEM",
      payload: id
    });
  }

  // handlePost = event => {
  //   event.preventDefault();
  //   console.log("Submit Button has been Clicked");
  //   this.props.dispatch({
  //     type: "POST_INFO",
  //     payload: this.state
  //   });
  // };

  // handleStylePost = event => {
  //   event.preventDefault();
  //   console.log("Styles has been added to Beer Batch.");
  //   this.props.dispatch({
  //     type: "POST_STYLES",
  //     payload: this.state
  //   });
  // };

  // handleChangeBeerType = event => {
  //   this.setState({
  //     beer_type: event.target.value
  //   });
  // };

  // handleChangeBeerName = event => {
  //   this.setState({
  //     beer_name: event.target.value
  //   });
  // };

  // handleChangeBatchNumber = event => {
  //   this.setState({
  //     batch_name: event.target.value
  //   });
  // };

  // handleChangeHotLiquor = event => {
  //   this.setState({
  //     temp_hlt: event.target.value
  //   });
  // };

  // handleChangeMashIn = event => {
  //   this.setState({
  //     mash_in_temp: event.target.value
  //   });
  // };

  // handleChangeMashOut = event => {
  //   this.setState({
  //     mash_out_temp: event.target.value
  //   });
  // };

  // handleChangeBoilTime = event => {
  //   this.setState({
  //     time_boil: event.target.value
  //   });
  // };

  // handleChangeNotes = event => {
  //   this.setState({
  //     notes: event.target.value
  //   });
  // };

  
  

  updateBatch = event => {
    // event.preventDefault();

    let update = {
      style_id: this.props.reduxStore.editReducer.style_id,
      beer_name: this.props.reduxStore.editReducer.beer_name,
      batch_name: this.props.reduxStore.editReducer.batch_name,
      temp_hlt: this.props.reduxStore.editReducer.temp_hlt,
      temp_mash_in: this.props.reduxStore.editReducer.temp_mash_in,
      temp_mash_out: this.props.reduxStore.editReducer.temp_mash_out,
      time_boil: this.props.reduxStore.editReducer.time_boil,
      notes: this.props.reduxStore.editReducer.notes,
      id: this.props.reduxStore.editReducer.id
    }

    console.log('update', update);
    this.props.dispatch({
      type: "UPDATE",
      payload: update
    });
  };

  toLogBook = () => {
    this.props.history.push(`/logbook`); // brings the user to logbook
  };

  toHome = () => {
    this.props.history.push(`/`); // brings the user to home
  };

  render() {
    return (
      <div>
        <form id="table1" onSubmit={this.updateBatch}>
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
          <TextField
            label="Edit Beer Name:"
            defaultValue={this.props.reduxStore.editReducer.beer_name}
            // onChange={event => this.setState({ title: event.target.value })
            onChange={event =>
              this.props.dispatch({
                type: "UPDATE",
                payload: {
                  propertyName: "beer_name",
                  value: event.target.value
                }
              })
            }
            fullWidth
          />
          {/* <p>Name your Beer: </p> */}
      
          <TextField
            label="Edit Batch Number:"
            defaultValue={this.props.reduxStore.editReducer.batch_name}
            onChange={event =>
              this.props.dispatch({
                type: "UPDATE",
                payload: {
                  propertyName: "batch_name",
                  value: event.target.value
                }
              })
            }
            fullWidth
          />

          
          <br></br>
          <TextField
            label="Edit Hot Liquor Tank Temp:"
            defaultValue={this.props.reduxStore.editReducer.temp_hlt}
            onChange={event =>
              this.props.dispatch({
                type: "UPDATE",
                payload: {
                  propertyName: "temp_hlt",
                  value: event.target.value
                }
              })
            }
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
            label="Edit Mash-In Temp:"
            defaultValue={this.props.reduxStore.editReducer.temp_mash_in}
            onChange={event =>
              this.props.dispatch({
                type: "UPDATE",
                payload: {
                  propertyName: "temp_mash_in",
                  value: event.target.value
                }
              })
            }
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
            label="Edit Mash-Out Temp:"
            defaultValue={this.props.reduxStore.editReducer.temp_mash_out}
            onChange={event =>
              this.props.dispatch({
                type: "UPDATE",
                payload: {
                  propertyName: "temp_mash_out",
                  value: event.target.value
                }
              })
            }
            fullWidth
          />
          {/* <p>Mash-Out-Temp: </p> */}
          {/* <label for="sel1">Mash-Out-Temp: </label>
          <input
            class="batchForm"
            onChange={this.handleChangeMashOut}
            type="text"
            placeholder="Please log the Mash-In Temp"
          /> */}
          <br></br>

          <TextField
            label="Edit Time of Boil:"
            defaultValue={this.props.reduxStore.editReducer.time_boil}
            onChange={event =>
              this.props.dispatch({
                type: "UPDATE",
                payload: {
                  propertyName: "time_boil",
                  value: event.target.value
                }
              })
            }
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
            label="Edit Notes:"
            defaultValue={this.props.reduxStore.editReducer.notes}
            onChange={event =>
              this.props.dispatch({
                type: "UPDATE",
                payload: {
                  propertyName: "notes",
                  value: event.target.value
                }
              })
            }
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
          <Button id="submitBtn" type="submit">
            Submit to Brew Log
          </Button>
        </form>
        <br></br>
        <Button id="logBookBtn" onClick={this.toLogBook}>
          GO TO LOG BOOK
        </Button>
        <br></br>
        <Button id="homePageBtn" onClick={this.toHome}>
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

export default connect(mapStateToProps)(EditBatchPage);