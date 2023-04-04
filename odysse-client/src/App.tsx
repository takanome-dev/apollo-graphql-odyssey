import { Fragment, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Router, Link } from "@reach/router";
import Tracks from "./pages/tracks";
import Track from "./pages/track";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router primary={false} component={Fragment}>
      <Tracks path="/" />
      <Track path="track/:trackId" />
      <Module path="track/:trackId/module/:moduleId" />
    </Router>
  );
}

export default App;
