import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { GithubContextProvider } from "./context/context";

ReactDOM.render(
  <React.StrictMode>
    <GithubContextProvider>
      <App />
    </GithubContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
