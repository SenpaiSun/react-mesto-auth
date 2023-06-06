import { Link, useLocation } from "react-router-dom"
import Header from "./Header"
import React from "react";

export default function AuthPopup(props) {
  const location = useLocation();
  const [emailUser, setEmailUser] = React.useState('')
  const [passwordUser, setPasswordUser] = React.useState('')

  const handleEmailChange = (event) => {
    setEmailUser(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPasswordUser(event.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    props.onRegister(emailUser, passwordUser)
  }

  return(
    <>
      <div className="popup-auth">
        <Header titleHeader={props.titleHeader} redirect={props.redirect}/>
        <form className="popup-auth__page" onSubmit={handleSubmit}>
          <p className="popup-auth__auth-header">{props.title}</p>
          <input className="popup-auth__auth-input" placeholder="Email" value={emailUser} onChange={handleEmailChange}></input>
          <input className="popup-auth__auth-input" placeholder="Пароль" value={passwordUser} onChange={handlePasswordChange}></input>
          <button className="popup-auth__auth-confirm">{props.confirmButton}</button>
          {location.pathname === "/sign-up" && (
            <p className="popup-auth__signin">Уже зарегистрированы? <Link className="popup-auth__signin" to="/sign-in">Войти</Link></p>
          )}
        </form>
      </div>
    </>
  )
}