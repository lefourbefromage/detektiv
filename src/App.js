import React from "react";
import Login from "./pages/Login";
import JqDiary from "./pages/Jq-diary";
import {BrowserRouter, Switch,Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/jqdiary" exact component={JqDiary} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
