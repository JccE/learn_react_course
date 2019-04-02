import React, { Component } from 'react';

class Container1 extends Component {
  constructor(props){
    // lets us access props in parent classes
    super(props)

    // user defined.
    this.state = {
      stateprop1: "Inital state, bitches",
      stateprop2: 5
    }
  }

// correct
  changeState = () => (
    this.setState( {stateprop2: this.state.stateprop2 + 1,
      stateprop1: this.state.stateprop1 + "L" }
    ))

  changeState2 = () => (
    this.setState( {stateprop1: this.state.stateprop1 + "L"}
    ))


// // same as
//   changeState = () => (
//     this.setState((prevState, props) => ({
//       stateprop2: prevState.stateprop2 + 1})
//     ))

  render() {
    return (
        <div>

      {/*React merges state */}
          <button onClick={() => this.changeState()}> Change State </button>
          <button onClick={() => this.changeState2()}> Change State 2</button>
          {this.state.stateprop2}
          <br/>
          {this.props.nickname}
          <br/>
          {this.state.stateprop1}
        </div>
      )
  }
}


export default Container1;
