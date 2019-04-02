import React from 'react';

// using () is the same as using {} and calling return
const Component1 = props => (
  <div>
    {props.name}
    <br/>
    {props.age}
  </div>
);

export default Component1;
