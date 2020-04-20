import React from "react";
import axios from "axios";
import "./App.css";

import PlayerList from "./components/PlayerList";
import { useFetch } from "./components/customHook";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      players: [],
    };
  }

  // componentDidMount() {
  //   axios
  //     .get(`http://localhost:5000/api/players`)
  //     .then((res) => this.setState({ ...this.state, players: res.data }))
  //     .catch((err) => console.log(err));
  // }

  // render() {
  //   console.log(this.state.players);

  //   return (
  //     <div className="App">
  //       <h1>Women's World Cup</h1>

  //       <PlayerList playerFromState={this.state.players} />
  //     </div>
  //   );
  // }

  //custom hook

  async componentDidMount() {

    const [players] = await useFetch('get', `http://localhost:5000/api/players`)

    console.log('data in app', players)

    this.setState({
      ...this.state,
      players:players
    })
  }

  render() {
    console.log('state in app', this.state.players)

    return (
      <div className="App">
        <h1>Women's World Cup</h1>

        <PlayerList playerFromState={this.state.players} />
      </div>
    );
  }
}

export default App;
