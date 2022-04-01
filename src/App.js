import "./styles.css";
import Header from "./Header";
import Detail from "./Detail";
import Tracklist from "./Tracklist";
import Searchbar from "./Searchbar";
import {Navigation} from "./router/navigation"


export default function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <section id="top" className="main">
        <Detail />
        <h4><a href="#searchbar">See more ...</a></h4>
        <Tracklist />
      </section>
      <section id="searchbar" className="section2">
        <Searchbar />
      </section>
    </div>
  );
}
