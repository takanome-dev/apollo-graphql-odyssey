import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import {
  Outlet,
  RouterProvider,
  Link,
  Router,
  Route,
  RootRoute,
} from "@tanstack/router";

import App from "./App";
import "./index.css";
import "./styles/global.css";
import Tracks from "./pages/tracks";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

function Root() {
  return (
    <>
      <div>
        <Link to="/">Home</Link> <Link to="/about">About</Link>
      </div>
      <hr />
      <Outlet />
    </>
  );
}

// Create a root route
const rootRoute = new RootRoute({
  component: Root,
});

// Create an index route
const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Tracks,
});

// Create the route tree using your routes
const routeTree = rootRoute.addChildren([indexRoute]);

// Create the router using your route tree
const router = new Router({ routeTree });

// Register your router for maximum type safety
declare module "@tanstack/router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("root") as HTMLElement;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <ApolloProvider client={client}>
      <React.StrictMode>
        {/* <App /> */}
        <RouterProvider router={router} />
      </React.StrictMode>
    </ApolloProvider>
  );
}

// ReactDOM.createRoot().render(
//   <ApolloProvider client={client}>
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </ApolloProvider>
// );
