import "./App.css";
import Nav from "./Components/Nav";
import { Router } from "@reach/router";
import Topics from "./Components/Topics";

function App() {
  return (
    <main className="main-app">
      <Nav />
      <Router>
        <Topics path="/topics" />
      </Router>
    </main>
  );
}

export default App;
