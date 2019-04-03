import React, { Component } from 'react';
import Component1 from './functional/component1';
import Container1 from './containers/container1';



class App extends Component {

  render() {
    return (
      <div>
        React
      {/*nested ternary expression*/}
        {false
          ? false ? <div>Condition 1 </div> : <div> Condition 2 </div>
          : true ? <div>Condition 3 </div> : <div> Condition 4 </div>
        }
      </div>
      )
  }
}
    // if(false) {
    //   return (
    //     <div className="App">
    //       React
    //       Condition 1
    //     </div>
    // )}
    // else {
    //   return (
    //     <div className="App">
    //       React
    //       Condition 2
    //     </div>
    // )}
//   }
// }















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
// }


// const Appinstance = new App()

// console.log(Appinstance)




export default App;
