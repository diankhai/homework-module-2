import React from "react";

const AlbumInfo = ({ album, title }) => (
  <div>
    <h3>{title}</h3>
    <h6>{album}</h6>
  </div>
);

export { AlbumInfo };
