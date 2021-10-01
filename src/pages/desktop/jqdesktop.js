import React, { useState } from 'react';
import LoginForm from './LoginForm';
import LoggedSession from './LoggedSession'


function JQDesktop() {
    const adminUser = {
        password:"qwe"
    }

    const help = "Mon Chien + Année de naissance + Prénom de ma femme"
    const [user, setUser] = useState({password: "", name:"JeanQuete"});
    const [error, setError] = useState("");
    
    const Login = details => {
        if ( details.password === adminUser.password ){
            console.log("Logged In");
            setUser({
                password: details.password,
                name: user.name
            })
        } else {
            setError("Mot de passe incorrect");
        };
    }

    const Logout = () => {
        console.log("Logout");
        setUser({name:"JeanQuete", password: ""});
    }
    return (
        <div className={`session session--jq ${(user.password !== "") ? "session--logged" : ""}`}>
            {(user.password !== "") ? (
                <LoggedSession Logout={Logout} username={user.name}/>
            ): (
                <LoginForm help={help} username={user.name} Login={Login} error={error}/>   
            )}
        </div>
    );
}

export default JQDesktop;
