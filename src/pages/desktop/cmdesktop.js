import React, { useState } from 'react';
import LoginForm from './LoginForm';
import LoggedSession from './LoggedSession'

function CMDesktop() {
    const adminUser = {
        password:"argent"
    }

    const help = "Rouge Vert Bleu"
    const [user, setUser] = useState({password: "", name:"ClaudeMoney"});
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
        setUser({name:"ClaudeMoney", password: ""});
    }
    return (
        <div className={`session session--cm ${(user.password !== "") ? "session--logged" : ""}`}>
            {(user.password !== "") ? (
                <LoggedSession Logout={Logout} username={user.name}/>
            ): (
                <LoginForm help={help} username={user.name} Login={Login} error={error}/>   
            )}
        </div>
    );
}

export default CMDesktop;
