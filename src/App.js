import React, { useState } from "react";
import Home from "./pages/Home";
import Container from "@material-ui/core/Container"

function App() {

  
  return (
    <div>
      <Container maxWidth="lg">
        <Home/>
      </Container>
    </div>
  );
}


export default App;
