import React from "react";
import { Root, Routes } from "react-static";
import { Router } from "@reach/router";
import CssBaseline from "@material-ui/core/CssBaseline";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Root>
      <CssBaseline />
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
