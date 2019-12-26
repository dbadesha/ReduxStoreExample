import React, { Component } from "react";
import { connect } from "react-redux";

/**
 * App Component Show the Age up and down
 * @author dbadesha
 */
class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>
          Age:<span>{this.props.age} </span>
        </h1>
        <button onClick={this.props.onAgeUp}>Age Up</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    age: state.age
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAgeUp: () => dispatch({ type: "AGE_UP" }),
    onAgeDown: () => dispatch({ type: "AGE_DOWN" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
