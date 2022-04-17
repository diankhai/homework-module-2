const Search = (accessToken,e) => {
  //`https://api.spotify.com/v1/search?q=artist:queen&type=track&limit=20`
  // console.log(e);
  return fetch(`https://api.spotify.com/v1/search?q=artist:${e}&type=track&limit=20`, {headers: {
      Authorization: `Bearer ${accessToken}`
  }
  }).then(response => {
    return response.json();
  })
  .then(jsonResponse => {
    if (!jsonResponse.tracks){
        return [];
    } 
    let lists = jsonResponse.tracks.items.map(track => 
      // <SongInfo  key={track.id} song={track.name} artist={track.artists.name} cover={track.album.images[0].url} />
      ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri,
        cover:track.album.images[0].url
      })
    );
    return lists;
  });
};

let items={};
const getObj = (obj) => {
  if (obj){
    items=obj;
  } else {
    return items;
  }
}

export {Search, getObj};
