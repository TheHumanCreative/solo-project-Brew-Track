import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from "@material-ui/core/Button";
// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

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

  handleDelete(
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
  ) {
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
  }

  render() {
    let batchTable = this.props.reduxStore.batchReducer.map(batch => {
      return (
        <tr>
          <td>{batch.id}</td>
          <td>{batch.user_id}</td>
          {/* <td>{batch.beer_id}</td> */}
          <td>{batch.beer_type}</td>
          <td>{batch.batch_name}</td>
          <td>{batch.temp_hlt}°</td>
          <td>{batch.temp_mash_in}°</td>
          <td>{batch.temp_mash_out}°</td>
          <td>{batch.time_boil}min</td>
          <td>{batch.notes}</td>
          <td>
            <button onClick={() => this.handleDelete(batch.id, batch.user_id, batch.beer_id, batch.beer_type, batch.batch_name, batch.temp_hlt, batch.temp_mash_in, batch.temp_mash_out, batch.time_boil, batch.notes)}>
              Delete
            </button>
          </td>
        </tr>
      );
    });
    return (
      <div>
        <div>
          <p>
            <table>
              <tr>
                <th>beer.id</th>
                <th>user_id</th>
                {/* <th>beer_id</th> */}
                <th>beer_type</th>
                <th>batch_name</th>
                <th>HLT TEMP</th>
                <th>MASH-IN TEMP</th>
                <th>MASH-OUT TEMP</th>
                <th>BOIL TIME</th>
                <th>NOTES</th>
                <th>DELETE</th>
              </tr>
              <tbody>{batchTable}</tbody>
            </table>
          </p>
        </div>
        <br>
        </br>
        <Button onClick={this.toCreateBatch}>GO TO CREATE BATCH</Button>
        <br>
        </br>
        <Button onClick={this.toHome}>GO TO HOME PAGE</Button>
        <br>
        </br>
      </div>
    );
  }
}

const mapStateToProps = reduxStore => {
  return {
    reduxStore
  };
};

export default connect(mapStateToProps)(LogBookPage);
