import React from "react";
import AuthPopup from "./AuthPopup"

export default function Login(props) {
  return (
    <AuthPopup title={'Вход'} confirmButton={'Войти'} titleHeader={props.titleHeader} redirect={props.redirect}/>
  )
}