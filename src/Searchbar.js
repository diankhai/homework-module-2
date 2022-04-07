import { getParamValues } from "./components/spotifyAuth";
import React from "react";
// import { IsEmpty } from "react-lodash";
import Tracklist, {Search, getObj} from "./Tracklist"


const authEndpoint = "https://accounts.spotify.com/authorize";
const clientId = "de080cb8483748199cea3244c39496cd";
let scope = "playlist-modify-private";
const redirUri="http://localhost:3000/";

// const redirURL = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirUri}&scope=${scope}&response_type=token&show_dialog=true`;  

class Searchbar extends React.Component {
    state = {
        artistName:'',
        token:'',
        tracks:'',
        tracksave:[],
    };
    
    handleURL = () => {
        window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirUri}&scope=${scope}&response_type=token&show_dialog=true`;
    };

    handleChange = (event) => {
        this.setState({artistName: event.target.value});
    }

    getToken = () => {
        let response = getParamValues(window.location.hash);
        // let expiryTime = new Date().getTime() + response.expires_in * 1000;
        this.setState({ token:response.access_token });
        let tracks = Search(this.state.token,this.state.artistName);
        tracks.then(
            function(value){
                const list = value;
                getObj(list);
        });
        setTimeout(() => {  let obj = getObj(null);
            this.setState({tracks:obj});
        }, 1000);
    }

    render(){
        return(
            <>
                {/* <button onClick={this.handleURL} className="accessBtn">Authorization</button> */}
                <h4>Select Tracks</h4>
                <form useref="form" onSubmit={this.getToken}> 
                    {/* <h6>Find Track</h6> */}
                    <input onChange = {this.handleChange} value = {this.state.artistName} placeholder="Type Artist Name..." />
                    <button type="submit">Find</button>
                </form>
                <Tracklist data={this.state.tracks} />
            </>
        );
    };
}

export default Searchbar;