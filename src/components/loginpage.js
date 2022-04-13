// import { render } from "@testing-library/react";
import {Helmet} from "react-helmet";
import React from "react";
import Button from "@mui/material/Button";
import { Global, css } from "@emotion/react";

const authEndpoint = "https://accounts.spotify.com/authorize";
const clientId = "de080cb8483748199cea3244c39496cd";
let scope = "playlist-modify-private";
const redirUri="http://localhost:3000/create-playlist";

class Login extends React.Component {
    handleURL = () => {
        window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirUri}&scope=${scope}&response_type=token&show_dialog=true`;
    };
    render(){
    return(
        <>
            {/* <Global
            styles={css`
            * {
                font-family: Roboto, sans-serif;
            }
            `}
            /> */}
        <Helmet>
        <link rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
        <link rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
        </Helmet>
        <div className="main">
            <div className="wrapper-login">
                <img className="logo" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="" />
                <br />
                <h5>Click the button below to Login!</h5>
                <Button variant="contained" onClick={this.handleURL} className="accessBtn">Authorization</Button>
            </div>
        </div>
        </>
    )}
};

export default Login;