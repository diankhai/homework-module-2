import "./styles.css";
import Header from "./Header";
import Detail from "./Detail";
import NewPlaylist from "./newPlaylist";
import Tracklist from "./Tracklist";
import Searchbar from "./Searchbar";
import {Navigation} from "./router/navigation"


export default function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <section id="top" className="main">
        {/* <Detail /> */}
        <NewPlaylist />
      </section>

      {/* <section id="searchbar" className="section2">
        
      </section> */}
    </div>
  );
}
