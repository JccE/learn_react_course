import React, { Component } from 'react';

class Container1 extends Component {
  constructor(props){
    // lets us access props in parent classes
    super(props)

    // user defined.
    this.state = {
      stateprop1: "Inital state, bitches"
    }
  }

// correct
  changeState = () => (
    this.setState({ stateprop1: "New State, Hoes"})
    )

  render() {
    return (
        <div>
          <button onClick={() => this.changeState()}> Change State </button>
        {/*dont call set state inline*/}
{/*          <button onClick={() => this.setState({ stateprop1: "Another State, Sluts"})}> Change State </button>*/}
          {this.props.nickname}
          <br/>
          {this.state.stateprop1}
        </div>
      )
  }
}


export default Container1;
