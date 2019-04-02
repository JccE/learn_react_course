import React, { Component } from 'react';
import Component1 from './functional/component1';
import Container1 from './containers/container1';

class App extends Component {

  render() {

    return (
      <div className="App">
        React
        <Container1 nickname="Jim" />
        <Component1 name='jimmy' age={24}/>
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
