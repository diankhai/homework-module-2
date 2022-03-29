const authEndpoint = "https://accounts.spotify.com/authorize";
const clientId = "de080cb8483748199cea3244c39496cd";
let scope = "playlist-modify-private";

const redirURL = `${authEndpoint}?client_id=${clientId}$scope=${scope}$response_type=token`;

export { redirURL };
