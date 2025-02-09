import React from "react";
import ReactDOM from "react-dom/client";
// If you’re using Wouter for routing, import { Router } from "wouter";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <Router>  // Uncomment if you’re using Wouter routing
        <App />
      </Router> */}
    <App />
  </React.StrictMode>
);
