import React from 'react';


class Player extends React.Component{

    constructor(props){
      super(props)
    }

  render (){

  return (
    <div className="player">
      <h1>Name: {this.props.name} </h1>
      <p>Country: {this.props.country} </p>
      <p>Searches: {this.props.searches}</p>
    
    </div>
  );
}
}

export default Player;