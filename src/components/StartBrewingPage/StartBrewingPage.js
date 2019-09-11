import React, { Component } from "react";
import { connect } from "react-redux";

class StartBrewingPage extends Component {
    render(){
        return (
          <div>
            <button>To Brew Log</button>
            <p>HEY THIS IS THE HOME PAGE : START BREWING!</p>
            <button>To Create Batch</button>
            {/* <button
              className={props.className}
              onClick={() => props.dispatch({ type: "LOGOUT" })}
            >
              Log Out
            </button> */}
          </div>
        );
    }
};





const mapStateToProps = reduxStore => {
  return {
    reduxStore
  };
};

export default connect(mapStateToProps)(StartBrewingPage);