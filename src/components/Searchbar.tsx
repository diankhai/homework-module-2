import { getParamValues } from "./spotifyAuth";
import React, { useRef } from "react";
import {Search, getObj} from "./Tracklist";
import { SongInfo } from "./album";
import { Obj } from "reselect/es/types";

interface TracksT {
    data:string;
}
interface detail {
    id: string;
    name: string;
    artist: string;
    album: string;
    uri: string;
    cover: string;
    child_items?: detail[];
}

class Tracklist extends React.Component<TracksT> {
render() {
    let items = (this.props.data);
    let track= <div></div>;
    if (items){
        //USING ITEM AS ANY BECAUSE STILL GET ERROR WHEN MAPPING THE OBJECT ITEMS.//
    track= (items as any).map((track:detail) => <SongInfo  key={track.id} song={track.name} artist={track.artist} cover={track.cover} uri={track.uri}/>
    )};
    return (
    <div className="tracklist">
        {track}
    </div>
    );
}
}

const authEndpoint = "https://accounts.spotify.com/authorize";
const clientId = "de080cb8483748199cea3244c39496cd";
let scope = "playlist-modify-private";
const redirUri="http://localhost:3000/";

class Searchbar extends React.Component {
    state = {
        artistName:'',
        token:'',
        tracks:'',
        tracksave:[],
        node:''
    };
    
    handleURL = () => {
        var $link=$(`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirUri}&scope=${scope}&response_type=token&show_dialog=true`);
        window.location.href = $link.attr('data-href')!;
    };

    handleChange = (event:any) => {
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
    
    getRef = () => {
       const node=useRef<HTMLFormElement>(null);
       this.setState({node:node});
    }

    render(){
        this.getRef;
        return(
            <>
                {/* <button onClick={this.handleURL} className="accessBtn">Authorization</button> */}
                <h4>Select Tracks</h4>
                 <form ref={this.state.node} onSubmit={this.getToken}> 
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