import React from "react";
import { Info } from "./artist";
import { AlbumInfo } from "./album";
import { redirURL } from "./spotifyAuth";

class Artist extends React.Component {
  render() {
    return (
      <div>
        <Info
          name={this.props.name}
          imgURL={this.props.img}
          externalURL={this.props.link}
        ></Info>
        <button className="btn-select">Select</button>
      </div>
    );
  }
}

class Song extends React.Component {
  render() {
    return (
      <AlbumInfo album={this.props.album} title={this.props.title}>
        {/* <SongInfo title={this.props.title} /> */}
      </AlbumInfo>
    );
  }
}

export { Artist, Song };
