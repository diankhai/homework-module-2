import { getParamValues } from "./components/spotifyAuth";
import React from "react";
import { IsEmpty } from "react-lodash";


const authEndpoint = "https://accounts.spotify.com/authorize";
const clientId = "de080cb8483748199cea3244c39496cd";
let scope = "playlist-modify-private";
const redirUri="http://localhost:3000/";

// const redirURL = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirUri}&scope=${scope}&response_type=token&show_dialog=true`;  

class Searchbar extends React.Component {
    state = {};

    handleURL = () => {
        window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirUri}&scope=${scope}&response_type=token&show_dialog=true`;
    };

    getToken = () => {
        let response = getParamValues(window.location.hash);
        let expiryTime = new Date().getTime() + response.expires_in * 1000;
        this.setState({ token:response.access_token });
        this.setState({ expires_time:response.expiryTime });
        console.log(response);
    }

    render(){
        return(
            <div>
                <button onClick={this.handleURL}>Get Token</button>
                <input type="search"></input>
                <button onClick={this.getToken} type="submit">Find</button>
            </div>
        );
    };
}

export default Searchbar;