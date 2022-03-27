import React from "react";

// const  image = (props) => <div>Hello, {props.name}</div>;

const Page = (props) => (
    <a href={props.imgURL}><img href={props.externalURL} /></a>
);

const Info = (props) => (
    <div>
        <a href={props.link}><img href={props.img} /></a>
        <h5>{props.name}</h5>
    </div>
  );

export {Page, Info};