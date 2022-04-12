import React, { useState } from "react";

const AlbumInfo = ({ album, title }) => (
  <div>
    <h3>{title}</h3>
    <h6>{album}</h6>
  </div>
);

let arr = [];
const Datas = (uri) => {
  // const [arr,setArr] = useState([]);
  if(uri){
    arr.push(uri);
  }else{
    return(arr);
  }
}

const SongInfo = ({ song, artist, cover, uri }) => {
  const [label, setLabel] = useState('Select');
  console.log(artist);
  return(
  <div className="track">
    <img className="track-cover" src={cover} alt={song} />
    <div className="track-details">
      <h6>{song}</h6>
      <h6>{artist}</h6>
      <button onClick={() => {
        if (label=='Select'){
          setLabel("Deselect")
          Datas(uri);
        }else{
          setLabel("Select")
      }}}>{label}</button>
    </div>
  </div>
  );
};

export { AlbumInfo, SongInfo, Datas };
