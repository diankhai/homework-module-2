import React from "react";
//ga bisa import data from external URL
// import data from "https://gist.githubusercontent.com/aryapradipta9/4085f18a47101f10f685a6140385b2bf/raw/e32426bc2d954274e984b03c601f14c08eb47a0b/all-sample.js";
import data from "./components/Data";
import { SongInfo } from "./components/album";

const Search = (accessToken,e) => {
  //`https://api.spotify.com/v1/search?q=artist:queen&type=track&limit=20`
  // console.log(e);
  return fetch(`https://api.spotify.com/v1/search?q=artist:${e}&type=track&limit=20`, {headers: {
      Authorization: `Bearer ${accessToken}`
  }
  }).then(response => {
    return response.json();
  })
  .then(jsonResponse => {
    if (!jsonResponse.tracks){
        return [];
    } 
    let lists = jsonResponse.tracks.items.map(track => 
      // <SongInfo  key={track.id} song={track.name} artist={track.artists.name} cover={track.album.images[0].url} />
      ({
        id: track.id,
        name: track.name,
        artist: track.artists.name,
        album: track.album.name,
        uri: track.uri,
        cover:track.album.images[0].url
      })
    );
    return lists;
  });
};

let items={};
const getObj = (obj) => {
  if (obj){
    items=obj;
  } else {
    return items;
  }
}

export {Search, getObj};

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
    let items = (this.props.data);
    let track = <div></div>;
    if (items){
      track = items.map((track) => 
      <SongInfo  key={track.id} song={track.name} artist={track.artist} cover={track.cover} uri={track.uri}/>
    )};
    return (
      <div className="tracklist">
        {track}
      </div>
    );
  }
}

export default Tracklist;
