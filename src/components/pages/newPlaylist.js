import React, { useState } from "react";
import Searchbar from "../Searchbar";
import { getParamValues } from "../spotifyAuth";
import { Datas } from "../album";
import { useSelector, useDispatch } from "react-redux";
import { saveToken } from "../../redux/action";

class NewPlaylist extends React.Component {
    // const [songs,setSongs] = useState();
    state = {
      title:'',
      desc:''
    }

    getToken = () => {
      let response = getParamValues(window.location.hash);
      const token = response.access_token
      dispatchEvent(saveToken(token));
    }

    submit=()=>{
       this.getToken();
       let access_token = useSelector((state) => state.value);
      let user_id = "de080cb8483748199cea3244c39496cd";
      let tracks = Datas();
      console.log(tracks);
      const headers= {
        'Authorization': 'Bearer ' + access_token
      }
      return fetch('https://api.spotify.com/v1/me', {headers: headers})
       .then(response => response.json())
       .then(jsonResponse => {
         user_id = jsonResponse.id;
         return fetch(`https://api.spotify.com/v1/users/${user_id}/playlists`, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify({ 
            name: this.state.title,
            description:this.state.desc,
            public : false }),
        }) })
      .then((response) => response.json())
      .then((jsonResponse) => {
        const playlistID = jsonResponse.id;
        fetch(
          `https://api.spotify.com/v1/users/${user_id}/playlists/${playlistID}/tracks`,
          {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({ uris: tracks }),
          }
        );
        alert("Creating Playlist Success!");
      });
    }

    titleOnChange=(event)=>{
      this.setState({title: event.target.value});
    }

    descOnChange=(event)=>{
      this.setState({desc: event.target.value});
    }

    render(){
        return (
          <div className="main">
            <div className="wrapper">
              <form useref="form" onSubmit={this.submit} className="form-p">
                  <h3>Create a New Playlist</h3>
                  <p>Title</p>
                  <input type="text" onChange={this.titleOnChange} className="form-c"/><br/>
                  <p>Description</p>
                  <textarea onChange={this.descOnChange} /><br/>
                  <button className="form-c" type="submit">Submit</button>
              </form>
            </div>

            <Searchbar />
          </div>
          );
    }
};

export default NewPlaylist;
