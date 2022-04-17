import { Link } from "react-router-dom";

const Header = () => (
  <div className="heading">
    <h4>MusicApp</h4>
    <ul>
      <li><Link to="/">Login</Link></li>
      <li><Link to="/create-playlist">New Playlist</Link></li>
    </ul>
  </div>
);

export default Header;
