import axios from "axios";
import React from "react";
import { ArtistClass, SongClass } from "./components";

const apiURL =
  "https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json";

const artistIMG = "https://picfiles.alphacoders.com/296/thumb-1920-296736.jpg";

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
    let artistArr = { ...artist[0] };
    artist = { ...artistArr[0] }.name;
    let artistURL = { ...artistArr[0] }.external_urls;
    artistURL = { ...artistURL }.spotify;
    let cover = new Array(albumObj.images);
    let coverURL = { ...cover[0] };
    coverURL = { ...coverURL[0] }.url;
    return (
      <div className="wrapper">
        <img src={coverURL} alt="" />
        <div className="text">
          <SongClass title={items.name} album={album} />
          <ArtistClass name={artist} img={artistIMG} link={artistURL} />
        </div>
      </div>
    );
  }
}

export default Detail;
