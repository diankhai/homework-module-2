import { render } from "@testing-library/react";
import React from "react";

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
        <div className="main">
            <div className="wrapper-login">
                <img className="logo" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="" />
                <br />
                <h5>Click the button below to Login!</h5>
                <button onClick={this.handleURL} className="accessBtn">Authorization</button>
            </div>
        </div>
    )}
};

export default Login;