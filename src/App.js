import React, { useState } from "react";
import Home from "./pages/Home";
import Breadcrumb from "./components/Breadcrumb";
import Header from "./components/Header";
import {Container} from "@material-ui/core/"

function App() {

  
  return (
    <div>
      <Container maxWidth="lg">
        <Header/>
        <Breadcrumb/>
        <Home/>
      </Container>
    </div>
  );
}


export default App;
