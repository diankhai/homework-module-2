import axios from "axios";
import React from "react";
// import { Artist, Song } from "./components";

const apiURL =
  "https://gist.githubusercontent.com/aryapradipta9/4085f18a47101f10f685a6140385b2bf/raw/e32426bc2d954274e984b03c601f14c08eb47a0b/all-sample.js";

class Tracklist extends React.Component {
  state = {};

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios
      .get(apiURL)
      .then(({ data }) => {
        this.setState({ data });
      })
      .catch((err) => {
        this.setState({ error: err.message });
      });
  }

  mapData() {}

  render() {
    return (
      <div className="wrapper">
        <h1>hallo</h1>
      </div>
    );
  }
}

export default Tracklist;
