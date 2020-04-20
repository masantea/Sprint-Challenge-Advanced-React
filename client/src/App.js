import React from "react";
import axios from "axios";
import "./App.css";

import PlayerList from "./components/PlayerList";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      players: [],
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/players`)
      .then((res) => this.setState({ ...this.state, players: res.data }))
      .catch((err) => console.log(err));
  }

  render() {
    console.log(this.state.players);

    return (
      <div className="App">
        <h1>Women's World Cup</h1>

        <PlayerList playerFromState={this.state.players} />
      </div>
    );
  }
}

export default App;
