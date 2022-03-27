import React from "react";

const AlbumInfo = ({ album, title }) => (
  <div>
    <h3>{title}</h3>
    <h6>{album}</h6>
  </div>
);

const SongInfo = ({ song, artist, cover }) => (
  <div>
    <img src={cover} alt={song} />
    <h6>{song}</h6>
    <h6>{artist}</h6>
    <h6>5</h6>
  </div>
);

export { AlbumInfo, SongInfo };
