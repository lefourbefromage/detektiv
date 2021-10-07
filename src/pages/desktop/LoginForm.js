import React,{useState} from 'react'


function LoginForm({Login, error, username, help}) {
    const [details, setDetails] = useState({password:""});
    const [visible, setVisible] = useState({isVisible: 'false'});
  
    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }

    const showHelp = (e, isVisible) => {
        e.preventDefault();
        setVisible({
            isVisible: 'true'
        })
    }

    return (
        <div className="login  animate__fadeIn animate__animated">
            <h1 className="login__title">Bienvenue sur WinNook98</h1>
            <form className="login__form" onSubmit={submitHandler}>
                {(visible.isVisible === 'true') ? (
                    <div className="login__help animate__flipInX animate__animated">
                        Question secrète pour retrouver votre mot de passe:
                        <span>{help}</span>
                    </div>
                ) : (
                    ""
                )
                }

                {(error !== "") ? (
                    <div className="login__error animate__animated animate__headShake">{ error }</div> 
                ) : "" }

                <div className="login__text">Tapez votre mot de passe pour rentrer sur WinNook</div>

                <div className="login__group">
                    <label htmlFor="password">Utilisateur</label>
                    <input className="login__input" type="text" name="username" id="Username" readOnly value={username}/>
                </div>

                <div className="login__group">
                    <label htmlFor="password">Password</label>
                    <input className="login__input" placeholder="Password" type="text" name="password" id="password" onChange={ e => setDetails({...details, password: e.target.value})} value={details.password}/>
                </div>
                <button type='submit' className="login__submit" value="login">
                    Valider
                </button>
                <button className="login__reset" onClick={showHelp}>Mot de passe oublié ?</button>
            </form>
        </div>
            
    )
}

export default LoginForm;
