//import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Weather APP</h1>
        <Weather />
        <small>
          <a href="https://github.com/Chmasha/newprojectr">Open-source code</a>
          {" by Mariia Chorna "}
        </small>
      </header>
    </div>
  );
}

export default App;
