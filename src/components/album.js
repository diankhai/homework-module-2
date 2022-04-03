import React, { useState } from "react";

const AlbumInfo = ({ album, title }) => (
  <div>
    <h3>{title}</h3>
    <h6>{album}</h6>
  </div>
);

const SongInfo = ({ song, artist, cover }) => {
  const [label, setLabel] = useState('Select');

  return(
  <div className="track">
    <img className="track-cover" src={cover} alt={song} />
    <h6>{song}</h6>
    <h6>{artist}</h6>
    <button onClick={() => {
      if (label=='Select'){
        setLabel("Deselect")
      }else{
        setLabel("Select")
    }}}>{label}</button>
  </div>
  );
};

export { AlbumInfo, SongInfo };
