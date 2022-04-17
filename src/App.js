import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";
import "./styles.css";
import Header from "./components/Header";
import NewPlaylist from "./components/pages/newPlaylist";
import Login from "./components/pages/loginpage";
import { getParamValues } from "./components/spotifyAuth";

export default function App() {
  let isLogin = false;
  let response = getParamValues(window.location.hash);
  const token = response.access_token;
    if (token){
      isLogin=true;
    }
  const PrivateRoute = ({ children }) => {
    return isLogin ? children : <Navigate to="/" />;
  }
  return (
    <Router>
    <div className="App">
      <div className="heading">
      <h4>MusicApp</h4>
      <nav>
        <ul>
          <li><Link to="/">Login</Link></li>
          <li><Link to="/create-playlist">New Playlist</Link></li>
        </ul>
      </nav>
      </div>
    
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/create-playlist" element={<PrivateRoute>
                                                    <NewPlaylist/>
                                                  </PrivateRoute>} />
      </Routes>
      </div>
    </Router>
  );
}
