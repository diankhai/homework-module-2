import React from "react";
//ga bisa import data from external URL
// import data from "https://gist.githubusercontent.com/aryapradipta9/4085f18a47101f10f685a6140385b2bf/raw/e32426bc2d954274e984b03c601f14c08eb47a0b/all-sample.js";
import data from "./components/Data";
import { SongInfo } from "./components/album";

const MapData = ({ items }) => {
  // console.log(items);
  let albumObj = { ...items.album };
  let artist = new Array(albumObj.artists);
  artist = { ...artist[0] };
  artist = { ...artist[0] }.name;
  let cover = new Array(albumObj.images);
  cover = { ...cover[0] };
  cover = { ...cover[0] }.url;
  let title = items.name;
  return <SongInfo song={title} artist={artist} cover={cover} />;
};

class Tracklist extends React.Component {
  render() {
    let tracks = [data];
    tracks = tracks[0];
    // console.log(tracks);
    const track = tracks.map((track) => <MapData items={track} />);
    return (
      <div className="wrapper">
        <h4>See more ...</h4>
        {track}
      </div>
    );
  }
}

export default Tracklist;
