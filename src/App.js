import React, { Component } from 'react';

import './App.css';


// explains a few ways of putting styles into react



class App extends Component {


  render() {
    const name = "Jimmy"
    return (
      <div className="App">
         <button>Button 1</button><br/>
         React <br/><br/>
         {name}
      </div>
    );
  }

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
