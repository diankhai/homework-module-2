import "./styles.css";
import Header from "./Header";
// import Main from "./Main";
import Detail from "./Detail";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Detail />
      </div>
    </div>
  );
}
