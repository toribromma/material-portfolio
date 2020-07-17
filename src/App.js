import React, { useState } from "react";
import Home from "./pages/Home";
import Breadcrumb from "./components/Breadcrumb";
import {Container} from "@material-ui/core/"

function App() {

  
  return (
    <div>
      <Container maxWidth="lg">
        <Breadcrumb/>
        <Home/>
      </Container>
    </div>
  );
}


export default App;
