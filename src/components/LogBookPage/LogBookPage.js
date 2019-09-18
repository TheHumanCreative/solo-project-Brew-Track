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
    // minHeight: "20vh",
    // display: "flex", // is fine as there is not a dash.
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(5px + 2vmin)",
    color: "black",
    // "&:hover": {
    //   // change to both KEY and the
    //   textDecoration: "underline",
    //   color: "white"
    // }
  },
  tr: {
    border: "3px solid black"
  },
  td: {
    border: "3px solid black",
    justifyContent: "center",
    alignItems: "center"
  }
};

class LogBookPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: "FETCH_BATCH_INFO"
    });
  }

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
        notes: notes
      }
    });
  };

  render() {
    console.log(this.props.classes);
    let batchTable = this.props.reduxStore.batchReducer.map(batch => {
      return (
        <tr>
          <td className={this.props.classes.td}>{batch.id}</td>
          <td className={this.props.classes.td}>{batch.user_id}</td>
          <td className={this.props.classes.td}>{batch.beer_name}</td>
          <td className={this.props.classes.td}>{batch.beer_type}</td>
          <td className={this.props.classes.td}>{batch.batch_name}</td>
          <td className={this.props.classes.td}>{batch.temp_hlt}°</td>
          <td className={this.props.classes.td}>{batch.temp_mash_in}°</td>
          <td className={this.props.classes.td}>{batch.temp_mash_out}°</td>
          <td className={this.props.classes.td}>{batch.time_boil}min</td>
          <td className={this.props.classes.td}>{batch.notes}</td>
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
      <div>
        <div>
          <p>
            <table className={this.props.classes.table}>
              <tr className={this.props.classes.tr}>
                <th>Beer id</th>
                <th>User id</th>
                <th>Beer Name</th>
                <th>Beer Style</th>
                <th>Batch Number</th>
                <th>HLT Temp</th>
                <th>Mash In Temp</th>
                <th>Mash Out TEMP</th>
                <th>Boil Time</th>
                <th>Notes</th>
                <th>Delete</th>
                <th>Edit</th>
              </tr>
              <tbody>{batchTable}</tbody>
            </table>
          </p>
        </div>
        <br></br>
        <Grid container spacing={8} alignItems={"center"}>
        <Grid item xs={6}><Button onClick={this.toCreateBatch}>GO TO CREATE BATCH</Button></Grid>
        <Grid item xs={6}><Button onClick={this.toHome}>GO TO HOME PAGE</Button></Grid> 
        </Grid>
        <br></br>
      </div>
    );
  }
}

const mapStateToProps = reduxStore => {
  return {
    reduxStore
  };
};

export default connect(mapStateToProps)(withStyles(styles)(LogBookPage));
