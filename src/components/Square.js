import React from 'react';

function Square(props) {
    return (
      <button className="btn btn-default" 
      onClick={props.onClick}>
        {props.value}
      </button>
    );
  }

  export default Square;