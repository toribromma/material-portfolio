import React, { useState } from "react";
import Home from "./pages/Home";
import Breadcrumb from "./components/Breadcrumb";
import Header from "./components/Header";
import {Container} from "@material-ui/core/"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Projects from "./pages/Projects";
function App() {

  
  return (
    <div>
      <Router>
        <Container maxWidth="lg">
          <Header/>
          <Breadcrumb/>
            <Switch>
              <Route exact path={["/"]}>
                <Home/>
              </Route>
              <Route>
                <Projects exact path="/projects"/>
              </Route>
            </Switch>
        </Container>
      </Router>
    </div>
  );
}


export default App;
