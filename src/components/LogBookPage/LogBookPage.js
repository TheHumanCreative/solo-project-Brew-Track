import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const styles = {
  table: {
    border: "10px solid black",
    width: "100%",
    backgroundColor: "tan",
    opacity: "0.9",
    // minHeight: "20vh",
    // display: "flex", // is fine as there is not a dash.
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(5px + 2vmin)",
    color: "black"
   
  },
  tr: {
    border: "3px solid black",
  },
  td: {
    border: "3px solid black",
    justifyContent: "center",
    alignItems: "center"
  },
  Button: {
    background: "brown",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    display: "center"
  },
  main: {
    backgroundImage: "url('./images/mileshops.jpg')",
    backgroundSize: "100%",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    height: "900px"
  }
};

class LogBookPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: "FETCH_BATCH_INFO"
    });
  };

  toCreateBatch = id => {
    this.props.history.push(`/create`); // brings the user to logbook
  };

  toHome = () => {
    this.props.history.push(`/`); // brings the user to home
  };

  handleEdit = id => {
    console.log(id);
    this.props.history.push(`/edit/${id}`);
  };

  handleDelete = (
    id,
    user_id,
    beer_id,
    beer_type,
    batch_name,
    temp_hlt,
    temp_mash_in,
    temp_mash_out,
    time_boil,
    notes
  ) => {
    console.log("this is the id to be DELETED:", id);
    console.log("this is the user who will be DELETED", user_id);
    this.props.dispatch({
      type: "DELETE_USER_BATCH",
      payload: {
        id: id,
        user_id: user_id,
        beer_id: beer_id,
        beer_type: beer_type,
        batch_name: batch_name,
        temp_hlt: temp_hlt,
        temp_mash_in: temp_mash_in,
        temp_mash_out: temp_mash_out,
        time_boil: time_boil,
        notes: notes,
      }
    });
  };

  render() {
    console.log(this.props.reduxStore.batchReducer);
    
    let batchTable = this.props.reduxStore.batchReducer.map(batch => {
      return (
        <tr>
          <td >{batch.id}</td>
          {/* <td >{batch.user_id}</td> */}
          <td >{batch.beer_name}</td>
          <td >{batch.beer_type}</td>
          <td >{batch.batch_name}</td>
          <td >{batch.temp_hlt}°</td>
          <td >{batch.temp_mash_in}°</td>
          <td >{batch.temp_mash_out}°</td>
          <td >{batch.time_boil}min</td>
          <td >{batch.notes}</td>
          <td>
            <Button
              variant="contained"
              color="secondary"
              onClick={() =>
                this.handleDelete(
                  batch.id,
                  batch.user_id,
                  batch.beer_id,
                  batch.beer_type,
                  batch.batch_name,
                  batch.temp_hlt,
                  batch.temp_mash_in,
                  batch.temp_mash_out,
                  batch.time_boil,
                  batch.notes
                )
              }
            >
              Delete
            </Button>
          </td>
          <td>
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.handleEdit(batch.id)}
            >
              Edit
            </Button>
          </td>
        </tr>
      );
    });

    return (
      <main className={this.props.classes.main}>
        <div>
          <div>
            <p>
              <table className={this.props.classes.table}>
                <tr className={this.props.classes.tr}>
                  {/* <th>Beer id</th> */}
                  {/* <th>User id</th> */}
                  <th>Beer Name</th>
                  <th>Beer Style</th>
                  <th>Batch Number</th>
                  <th>HLT Temp</th>
                  <th>Mash In Temp</th>
                  <th>Mash Out Temp</th>
                  <th>Boil Time</th>
                  <th>Notes</th>
                  {/* <th>Delete</th>
                  <th>Edit</th> */}
                </tr>
                <tbody>{batchTable}</tbody>
              </table>
            </p>
          </div>
          <br></br>
          <Grid
            container
            justify={"space-evenly"}
            spacing={12}
            alignItems={"center"}
          >
            <Button
              className={this.props.classes.Button}
              onClick={this.toCreateBatch}
            >
              GO TO CREATE BATCH
            </Button>
            <br></br>
            <Button 
              className={this.props.classes.Button} 
              onClick={this.toHome}
            >
              GO TO HOME PAGE
            </Button>
          </Grid>
          <br></br>
        </div>
      </main>
    );
  }
}

const mapStateToProps = reduxStore => {
  return {
    reduxStore
  };
};

export default connect(mapStateToProps)(withStyles(styles)(LogBookPage));
