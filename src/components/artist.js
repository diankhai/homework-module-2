import React from "react";

// const  image = (props) => <div>Hello, {props.name}</div>;

const artistPage = (props) => (
    <a href={props.imgURL}><img href={props.externalURL} /></a>
);

const artistInfo = ({
    name,
    image
  }) => (
    <div>
        {image}
        <h5>{name}</h5>
    </div>
  );

export {artistPage, artistInfo};