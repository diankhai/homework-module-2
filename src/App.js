import "./styles.css";
import Header from "./Header";
import Detail from "./Detail";
import Tracklist from "./Tracklist";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Detail />
        <Tracklist />
      </div>
    </div>
  );
}
