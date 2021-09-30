
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
        <div className="login">
            <div className="login__user">
                <img src="./static/img/villagers/Costaud.png"/>
            </div>

            <h1 className="login__title">{username}</h1>
            <form className="login__form" onSubmit={submitHandler}>
                {(error !== "") ? (
                    <div className="login__error">{ error }</div> 
                ) : "" }
                <div className="login__group">
                    <input className="login__input" placeholder="Password" type="password" name="password" id="password" onChange={ e => setDetails({...details, password: e.target.value})} value={details.password}/>
                    <button type='submit' className="login__submit" value="login">
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </div>
            </form>

            <button className="login__reset" onClick={showHelp}>Mot de passe oublié ?</button>

            {(visible.isVisible == 'true') ? (
                <div className="login__help">
                    Question secrète pour retrouver votre mot de passe:
                    <span>{help}</span>
                </div>
            ) : (
                ""
            )
            }
        </div>
            
    )
}

export default LoginForm;
