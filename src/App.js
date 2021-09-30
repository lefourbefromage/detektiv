import React from "react";
import "animate.css";
import JQDesktop from "./pages/jqdesktop/jqdesktop.js";
import NookPhoneHome from "./pages/nookphone/nookphone__home";
import NookPhoneReminders from "./pages/nookphone/nookphone__reminders";
import NookPhoneSuspects from "./pages/nookphone/nookphone__suspects";
import NookPhoneInstaNook from "./pages/nookphone/nookphone__instanook";
import NookPhoneWeather from "./pages/nookphone/nookphone__weather";
import NookPhoneMessages from "./pages/nookphone/nookphone__messages";

import {BrowserRouter, Switch,Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/jqdesktop" exact component={JQDesktop} />
            <Route path="/" exact component={NookPhoneHome} />
            <Route path="/reminders" exact component={NookPhoneReminders}/>
            <Route path="/suspects" exact component={NookPhoneSuspects}/>
            <Route path="/instanook" exact component={NookPhoneInstaNook}/>
            <Route path="/weather" exact component={NookPhoneWeather}/>
            <Route path="/messages" exact component={NookPhoneMessages}/>

        </Switch>
    </BrowserRouter>
  );
}

export default App;
