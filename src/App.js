import React from "react";
import NookPhoneHome from "./pages/nookphone/nookphone__home";
import NookPhoneSuspect from "./pages/nookphone/nookphone__suspect";
import NookPhoneInstaNook from "./pages/nookphone/nookphone__instanook";

import {BrowserRouter, Switch,Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={NookPhoneHome} />
            <Route path="/suspect" exact component={NookPhoneSuspect}/>
            <Route path="/instanook" exact component={NookPhoneInstaNook}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
