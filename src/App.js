import React from "react";
import "animate.css";
import JQDesktop from "./pages/desktop/jqdesktop";
import CMDesktop from "./pages/desktop/cmdesktop";
import NookPhoneHome from "./pages/nookphone/nookphone__home";
import NookPhoneReminders from "./pages/nookphone/nookphone__reminders";
import NookPhoneSuspects from "./pages/nookphone/nookphone__suspects";
import NookPhoneInstaNook from "./pages/nookphone/nookphone__instanook";
import NookPhoneWeather from "./pages/nookphone/nookphone__weather";
import NookPhoneMaps from "./pages/nookphone/nookphone__maps";



import {BrowserRouter, Switch,Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/money" exact component={CMDesktop} />
            <Route path="/detective" exact component={JQDesktop} />
            <Route path="/" exact component={NookPhoneHome} />
            <Route path="/maps" exact component={NookPhoneMaps} />
            <Route path="/reminders" exact component={NookPhoneReminders}/>
            <Route path="/suspects" exact component={NookPhoneSuspects}/>
            <Route path="/instanook" exact component={NookPhoneInstaNook}/>
            <Route path="/weather" exact component={NookPhoneWeather}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
