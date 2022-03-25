import React from "react";

const artistPage = (externalURL) => (
    <a href={externalURL} />
);

const artistInfo = ({
    name,
    imgURL
  }) => (
    <div>
        <img src={imgURL} alt='' /> <h5>{name}</h5>
    </div>
  );

export {artistPage, artistInfo};