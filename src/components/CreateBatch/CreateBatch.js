import React from "react";
import { connect } from "react-redux";

//This is the Create Batch page and will have the user able to:
// Create a Batch
// Name a Batch
// Input temps and time
// Submit the data to the database and be alerted if they are
// Unsuccessful ADD to Database AND Successful ADD to the Database.

class CreateBatch extends Component {
  state = {
    beer_style: "",
    beer_name: "",
    batch_number: "",
    hlt_temp: "",
    mash_in_temp: "",
    mash_out_temp: "",
    boil_time: "",
    notes: ""
  };

  handlePost = event => {
    event.preventDefault();
    console.log("Submit Button has been Clicked");
    this.props.dispatch({
      type: "POST_ITEMS",
      payload: this.state
    });
  };

//   handleChangeBatch = event => {
//     this.setState({
//       beer_style: event.target.value,
//       beer_name: event.target.value,
//       batch_number: event.target.value,
//       hlt_temp: event.target.value,
//       mash_in_temp: event.target.value,
//       mash_out_temp: event.target.value,
//       boil_time: event.target.value,
//       notes: event.target.value
//     });
//   };

  handleChangeBeerStyle = event => {
    this.setState({
      beer_style: event.target.value
    });
  };

  handleChangeBeerName = event => {
    this.setState({
      beer_name: event.target.value
    });
  };

  handleChangeBatchNumber = event => {
    this.setState({
      batch_number: event.target.value
    });
  };

  handleChangeHotLiquor = event => {
    this.setState({
      hlt_temp: event.target.value
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
      boil_time: event.target.value
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
  }

  handleDelete(id, user_id) {
    console.log(id);
    console.log(user_id);
    this.props.dispatch({
      type: "DELETE_USER_BATCH",
      payload: { id: id, user_id: user_id }
    });
  }

  render() {
    let batchTable = this.props.reduxStore.batchReducer.map(batch => {
      return (
        <tr>
          <td>
            {batch.beer_style}
            {batch.beer_name}
            {batch.batch_number}
            {batch.hlt_temp}
            {batch.mash_in_temp}
            {batch.mash_out_temp}
            {batch.boil_time}
            {batch.notes}
          </td>
          <button onClick={() => this.handleDelete(item.id, item.user_id)}>
            Delete
          </button>
        </tr>
      );
    });
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Beer Style:</th>
              <th>Beer Name:</th>
              <th>Batch Number:</th>
              <th>Batch HLT Temp:</th>
              <th>Batch MASH-IN Temp:</th>
              <th>Batch MASH-OUT Temp:</th>
              <th>Batch BOIL Time:</th>
              <th>Batch Notes:</th>
            </tr>
          </thead>
          <tbody>{batchTable}</tbody>
        </table>
        <form onSubmit={this.handlePost}>
          <input
            onChange={this.handleChangeBeerStyle}
            type="text"
            placeholder="Choose from the Styles"
          />
          <input
            onChange={this.handleChangeBeerName}
            type="text"
            placeholder="Name the Beer / Batch"
          />
          <input
            onChange={this.handleChangeBatchNumber}
            type="text"
            placeholder="Give your batch a number"
          />
          <input
            onChange={this.handleChangeHotLiquor}
            type="text"
            placeholder="Please log the HLT Temp"
          />
          <input
            onChange={this.handleChangeMashIn}
            type="text"
            placeholder="Please log the Mash-In Temp"
          />
          <input
            onChange={this.handleChangeMashOut}
            type="text"
            placeholder="Please log the Mash-In Temp"
          />
          <input
            onChange={this.handleChangeBoilTime}
            type="text"
            placeholder="Please log the Boil Time"
          />
          <input
            onChange={this.handleChangeNotes}
            type="text"
            placeholder="Please log any notes"
          />
          {/* <input onChange={this.handleChangeBatch}></input> */}
          <button type="submit">Submit to Brew Log</button>
        </form>
      </div>
    );
  }
};

const mapStateToProps = reduxStore => {
    return{
        reduxStore
    };
};

export default connect(mapStateToProps)(CreateBatch);