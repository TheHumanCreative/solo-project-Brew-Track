import React, { Component } from "react";
import { connect } from "react-redux";



//This is the Create Batch page and will have the user able to:
// Create a Batch
// Name a Batch
// Input temps and time
// Submit the data to the database and be alerted if they are
// Unsuccessful ADD to Database AND Successful ADD to the Database.

class CreateBatchPage extends Component {
  state = {
    beer_type: '',
    beer_name: '',
    batch_name: '',
    temp_hlt: '',
    mash_in_temp: '',
    mash_out_temp: '',
    time_boil: '',
    notes: '',
  };

  handlePost = event => {
    event.preventDefault();
    console.log("Submit Button has been Clicked");
    this.props.dispatch({
      type: "POST_INFO",
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
  };

  handleDelete(id, user_id) {
    console.log('this is the id to be DELETED:',id);
    console.log('this is the user who will be DELETED', user_id);
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
            {batch.id}
          </td>
             <td>
            {batch.user_id}
          </td>
            <td>
            {batch.beer_id}
          </td>
          <td>
            {batch.beer_type}
          </td>
          <td>
            {batch.batch_name}
          </td>
          <td>
            {batch.temp_hlt}°
          </td>
          <td>
            {batch.temp_mash_in}°
          </td>
          <td>
            {batch.temp_mash_out}°
          </td>
          <td>
            {batch.time_boil}min
          </td>
          <td>
            {batch.notes}
          </td>
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
        {/* <div>{JSON.stringify(this.props.reduxStore.batchReducer)}</div> */}
        {/* <table>
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
        </table> */}
        <form id="table1" onSubmit={this.handlePost}>
          {/* <p>Please Pick from a Beer Style: </p>
          <input
            onChange={this.handleChangeBeerType}
            type="text"
            placeholder="Choose from the Type"
          /> */}
          <div class="form-group">
            <label for="sel1">Beer Style:</label>
            <select class="form-control" id="sel1">
              {/* <option value="0"></option>
              this.props.reduxStore.batchReducer.map(batch)
                <option key=id value=id>{beer_type}</option> */}
              <option>Altbier</option>
              <option>Amber Ale</option>
              <option>American Lager</option>
              <option>American Pale Ale</option>
              <option>Barley Wine</option>
              <option>Berliner Weisse</option>
              <option>Bière de Garde</option>
              <option>Bitter</option>
              <option>Blonde Ale</option>
              <option>Bock</option>
              <option>Brown Ale</option>
              <option>California Common / Steam Beer</option>
              <option>Cream Ale</option>
              <option>Dortmunder Export</option>
              <option>Doppelbock</option>
              <option>Dubbel</option>
              <option>Dunkel</option>
              <option>Dunkelweizen</option> 
              <option>Eisbock</option>
              <option>English Porter</option>
              <option>Flanders Red Ale</option>
              <option>Golden / Summer Ale</option>
              <option>Gose</option>
              <option>Gueuze</option>
              <option>Grodziskie</option>
              <option>Hefeweizen</option>
              <option>Helles</option>
              <option>Helles Bock</option>
              <option>India Pale Ale</option>
              <option>Irish Red Ale</option>
              <option>Irish Stout</option>
              <option>Kellerbier</option>
              <option>Kölsch</option>
              <option>Lager</option>
              <option>Lambic</option>
              <option>Maibock</option>
              <option>Mārzienbier / Oktoberfestbier</option>
              <option>Mild Ale</option>
              <option>Old Ale</option>
              <option>Oud Bruin</option>
              <option>Pale Ale</option>
              <option>Pale Lager</option>
              <option>Pilsener/Pilsner/Pils</option>
              <option>Porter</option>
              <option>Quadrupel</option>
              <option>Red Ale</option>
              <option>Roggenbier</option>
              <option>Rye Beer</option>
              <option>Saison</option>
              <option>Shchwarzbier</option>
              <option>Scotch Ale</option>
              <option>Stout</option>
              <option>Vienna Lager</option>
              <option>Witbier</option>
              <option>Wheat beer</option>
              <option>Weissbier</option>
              <option>Weizenbock</option>
              <option>Trappist Beer</option>
              <option>Tripel</option>
            </select>
          </div>
          <p>Name your Beer: </p>
          <input
            onChange={this.handleChangeBeerName}
            type="text"
            placeholder="Name the Beer / Batch"
          />
          <p>Give the batch a number: </p>
          <input
            onChange={this.handleChangeBatchNumber}
            type="text"
            placeholder="Give your batch a number"
          />
          <p>Hot-Liquor-Tank-Temp: </p>
          <input
            onChange={this.handleChangeHotLiquor}
            type="text"
            placeholder="Please log the HLT Temp"
          />
          <p>Mash-In-Temp: </p>
          <input
            onChange={this.handleChangeMashIn}
            type="text"
            placeholder="Please log the Mash-In Temp"
          />
          <p>Mash-Out-Temp: </p>
          <input
            onChange={this.handleChangeMashOut}
            type="text"
            placeholder="Please log the Mash-In Temp"
          />
          <p>Boil Time: </p>
          <input
            onChange={this.handleChangeBoilTime}
            type="text"
            placeholder="Please log the Boil Time"
          />
          <p>Please leave detailed notes: </p>
          <input
            onChange={this.handleChangeNotes}
            type="text"
            placeholder="Please log any notes"
          />
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

export default connect(mapStateToProps)(CreateBatchPage);