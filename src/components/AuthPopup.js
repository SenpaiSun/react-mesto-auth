import { Link, useLocation } from "react-router-dom"
import Header from "./Header"
import React from "react";

export default function AuthPopup(props) {
  const location = useLocation();
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  return(
    <>
      <div className="popup-auth">
        <Header titleHeader={props.titleHeader} redirect={props.redirect}/>
        <form className="popup-auth__page">
          <p className="popup-auth__auth-header">{props.title}</p>
          <input className="popup-auth__auth-input" placeholder="Email" value={email}></input>
          <input className="popup-auth__auth-input" placeholder="Пароль" value={password}></input>
          <button className="popup-auth__auth-confirm">{props.confirmButton}</button>
          {location.pathname === "/sign-up" && (
            <p className="popup-auth__signin">Уже зарегистрированы? <Link className="popup-auth__signin" to="/sign-in">Войти</Link></p>
          )}
        </form>
      </div>
    </>
  )
}