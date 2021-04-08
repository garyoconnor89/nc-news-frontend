import "./App.css";
import Nav from "./Components/Nav";
import { Router } from "@reach/router";
import Topics from "./Components/Topics";
import Homepage from "./Components/Homepage";
import Articles from "./Components/Articles";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Account from "./Components/Account";
import Article from "./Components/Article";
import ErrorDisplayer from "./Components/ErrorDisplayer";

function App() {
  return (
    <main className="main-app">
      <Nav />
      <Router>
        <Homepage path="/" />
        <Topics path="/topics" />
        <Articles path="/articles" />
        <Login path="/login" />
        <Signup path="/signup" />
        <Account path="/account" />
        <Article path="/articles/:article_id" />
        <ErrorDisplayer status="404" msg="Whoops...path not found" default />
      </Router>
    </main>
  );
}

export default App;
