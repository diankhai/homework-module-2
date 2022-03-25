import React from "react";

// const  image = (props) => <div>Hello, {props.name}</div>;

const Page = (props) => (
    <a href={props.imgURL}><img href={props.externalURL} /></a>
);

const Info = () => (
    <div>
        <a href={this.props.imgURL}><img href={this.props.externalURL} /></a>
        <h5>{this.props.name}</h5>
    </div>
  );

export {Page, Info};