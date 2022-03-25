import React from "react";

const songInfo = (props) => (
    <h3>{props.title}</h3>
);


const albumInfo = ({
    album,
    song
  }) => (
    <div>
        {song}
        <h6>{album}</h6>
    </div>
  );

export {songInfo, albumInfo};