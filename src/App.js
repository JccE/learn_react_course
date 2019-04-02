import React, { Component } from 'react';

class App extends Component {

// have a state. set it with an initial value, in this case
// counter with initial of 0
  state = {
    counter: 0
  }

// increment is
  increment = () => (
    this.setState({counter: 5})
    )

  render() {
    return (
      <div className="App">
      <button onClick={() => this.increment()}>Button</button>
        <div>
          Div 1 {this.state.counter}
        </div>
        <div>
          Div 2
        </div>
        <div>
          Div 3
        </div>
      </div>
    );
  }















// import './App.css';
// import * as styles from './styles'


// explains a few ways of putting styles into react
// class App extends Component {

//   render() {


//     return (
//       <div className="App">
//         <div style={styles.styles}>Style</div>
//          <button>Button 1</button>
//          <br/>
//          React
//          <br/>
//          <br/>
//       </div>
//     );
//   }

  // name = "Jimmy"
  // render() {
  //   return (
  //     <div className="App">
  //        React <br/><br/>
  //        {this.name}
  //     </div>
  //   );
  // }
}


const Appinstance = new App()

console.log(Appinstance)




export default App;
