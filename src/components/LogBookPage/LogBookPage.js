import React, { Component } from 'react';
import { connect } from 'react-redux';

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
  
  render() {
    let batchTable = this.props.reduxStore.batchReducer.map(batch => {
      return (
        <tr>
          <td>{batch.id}</td>
          <td>{batch.user_id}</td>
          <td>{batch.beer_id}</td>
          <td>{batch.beer_type}</td>
          <td>{batch.batch_name}</td>
          <td>{batch.temp_hlt}°</td>
          <td>{batch.temp_mash_in}°</td>
          <td>{batch.temp_mash_out}°</td>
          <td>{batch.time_boil}min</td>
          <td>{batch.notes}</td>
          <td>
            <button onClick={() => this.handleDelete(batch.id, batch.user_id)}>
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
                <th>beer_id</th>
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
