import React, { useState } from "react";
import Home from "./pages/Home";
import Breadcrumb from "./components/Breadcrumb";
import Header from "./components/Header";
import {Container, Box} from "@material-ui/core/"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Projects from "./pages/Projects";
import Detail from "./pages/Detail";
import Skills from "./pages/Skills";
import Footer from "./components/Footer"

function App() {

  
  return (
      <Router basename="/material-portfolio">
        <Container maxWidth="lg">
          <Header/>
          <Box component="span">
          <Breadcrumb/>
          </Box>
          <Switch>  
          <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/skills/">
                <Skills />
              </Route>
              <Route exact path="/projects/:id">
                <Detail />
              </Route>
              <Route exact path="/projects/">
                <Projects />
              </Route>
            </Switch>
          <Footer/>
        </Container>
      </Router>
  );
}


export default App;
