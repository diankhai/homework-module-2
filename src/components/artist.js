import React from "react";

// const  image = (props) => <div>Hello, {props.name}</div>;

const Info = ({ name, imgURL, externalURL }) => (
  <div>
    <a href={externalURL}>
      <img src={imgURL} alt="" />
    </a>
    <h5>{name}</h5>
  </div>
);

export { Info };
