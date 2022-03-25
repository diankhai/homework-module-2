import React from "react";

const SongInfo = (props) => (
    <h3>{props.title}</h3>
);


const AlbumInfo = ({
    album,
    song
  }) => (
    <div>
        {song}
        <h6>{album}</h6>
    </div>
  );

export {SongInfo, AlbumInfo};