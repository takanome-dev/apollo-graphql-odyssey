import { Fragment } from "react";
import { Router } from "@reach/router";
import Tracks from "./pages/tracks";
import Track from "./pages/track";
import Module from "./pages/module";

function App() {
  return (
    <Router primary={false} component={Fragment}>
      <Tracks path="/" />
      <Track path="track/:trackId" />
      <Module path="track/:trackId/module/:moduleId" />
    </Router>
  );
}

export default App;
