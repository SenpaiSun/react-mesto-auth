import React from "react";
import AuthPopup from "./AuthPopup";
import InfoTooltip from "./InfoTooltip";

export default function Register(props) {
  return(
    <>
      <AuthPopup title={'Регистрация'} confirmButton={'Зарегистрироваться'} titleHeader={props.titleHeader} redirect={props.redirect}/>
      <InfoTooltip/>
    </>
  )
}