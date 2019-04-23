import React from "react";
import { Root, Routes } from "react-static";
import { Router } from "@reach/router";
import NavBar from "./components/NavBar";

import "./app.css";

function App() {
  return (
    <Root>
      <NavBar />
      <div className="content">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
    </Root>
  );
}

export default App;
