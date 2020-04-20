import React from "react";

import Player from "./Player";

class PlayerList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.playerFromState.map((player) => (
          <Player
            name={player.name}
            country={player.country}
            searches={player.searches}
          />
        ))}
      </div>
    );
  }
}

export default PlayerList;
