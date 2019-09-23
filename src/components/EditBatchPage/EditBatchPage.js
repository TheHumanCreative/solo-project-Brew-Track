import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const styles = {

  Button: {
    background: "brown",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    display: "center"
  },
  main: {
    backgroundImage: "url('./images/startbrewing.jpg')",
    backgroundSize: "100%",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    height: "1000px"
  }
};

class EditBatchPage extends Component {
  componentDidMount() {

    this.fetchbatch();

    this.props.dispatch({
      type: "FETCH_STYLES_INFO"
    });
  }

  fetchbatch = () => {
    let id = this.props.match.params.id;
    this.props.dispatch({
      type: "FETCH_BATCH_ITEM",
      payload: id
    });
  };

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
    };

    console.log("update", update);
    this.props.dispatch({
      type: "UPDATE",
      payload: update
    });
    this.toLogBook();
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
        <main className={this.props.classes.main}>
          <form onSubmit={this.updateBatch}>
            <div class="form-group">
              <label for="sel1">Beer Style: </label>
              <select
                value={this.props.reduxStore.editReducer.style_id}
                onSubmit={this.handleStylePost}
                className="form-control"
                onChange={this.handleChangeBeerType}
              >
                {/* <option value={this.props.reduxStore.editReducer.style_id}>
                  {this.props.reduxStore.editReducer.style_id}
                </option> */}
                {this.props.reduxStore.styleReducer.map(style => {
                  console.log(style);
                  console.log('asdf',this.props.reduxStore.editReducer);
                  
                  return (
                    <option
                      key={style.id}
                      value={style.id}
                      // selected={this.props.reduxStore.editReducer.style_id == style.id}
                    >
                      {style.beer_type}
                    </option>
                  );
                })}
              </select>
            </div>
            <TextField
              label="Edit Beer Name:"
              value={this.props.reduxStore.editReducer.beer_name}
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
              InputLabelProps={{
                shrink: this.props.reduxStore.editReducer.beer_name
              }}
            />
            <TextField
              label="Edit Batch Number:"
              value={this.props.reduxStore.editReducer.batch_name}
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
              InputLabelProps={{
                shrink: this.props.reduxStore.editReducer.batch_name
              }}
            />
            <br></br>
            <TextField
              label="Edit Hot Liquor Tank Temp:"
              value={this.props.reduxStore.editReducer.temp_hlt}
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
              InputLabelProps={{
                shrink: this.props.reduxStore.editReducer.temp_hlt
              }}
            />
            <br></br>
            <TextField
              label="Edit Mash-In Temp:"
              value={this.props.reduxStore.editReducer.temp_mash_in}
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
              InputLabelProps={{
                shrink: this.props.reduxStore.editReducer.temp_mash_in
              }}
            />
            <br></br>
            <TextField
              label="Edit Mash-Out Temp:"
              value={this.props.reduxStore.editReducer.temp_mash_out}
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
              InputLabelProps={{
                shrink: this.props.reduxStore.editReducer.temp_mash_out
              }}
            />
            <br></br>
            <TextField
              label="Edit Time of Boil:"
              value={this.props.reduxStore.editReducer.time_boil}
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
              InputLabelProps={{
                shrink: this.props.reduxStore.editReducer.time_boil
              }}
            />
            <br></br>
            <TextField
              label="Edit Notes:"
              value={this.props.reduxStore.editReducer.notes}
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
              InputLabelProps={{
                shrink: this.props.reduxStore.editReducer.notes
              }}
            />
            <br></br>
            <br></br>
            <Button variant="contained" color="secondary" type="submit">
              Submit to Brew Log
            </Button>
          </form>
          <br></br>
          <Grid
            container
            justify={"space-evenly"}
            spacing={12}
            alignItems={"center"}
          >
            <Button
              className={this.props.classes.Button}
              onClick={this.toLogBook}
            >
              GO TO LOG BOOK
            </Button>
            <br></br>
            <Button className={this.props.classes.Button} onClick={this.toHome}>
              GO TO HOME PAGE
            </Button>
          </Grid>
          <br></br>
        </main>
      </div>
    );
  }
};

const mapStateToProps = reduxStore => {
    return{
        reduxStore
    };
};

export default connect(mapStateToProps)(withStyles(styles)(EditBatchPage));