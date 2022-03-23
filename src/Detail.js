import axios from "axios";
import React from "react";

const apiURL =
  "https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json";

class Detail extends React.Component {
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
  render() {
    let items = { ...this.state.data };
    let albumObj = { ...items.album };
    let album = albumObj.name;
    let artist = new Array(albumObj.artists);
    artist = { ...artist[0] };
    artist = { ...artist[0] }.name;
    let cover = new Array(albumObj.images);
    let coverURL = { ...cover[0] };
    coverURL = { ...coverURL[0] }.url;
    return (
      <div className="wrapper">
        <img src={coverURL} alt="" />
        <div className="text">
          <h3>{items.name}</h3>
          <h5>{artist}</h5>
          <h6>{album}</h6>
          <button>Select</button>
        </div>
      </div>
    );
  }
}

export default Detail;
