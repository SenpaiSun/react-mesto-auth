import React from "react";
import AuthPopup from "./AuthPopup";
import InfoTooltip from "./InfoTooltip";

export default function Register() {
  return(
    <>
      <AuthPopup title={'Регистрация'} confirmButton={'Зарегистрироваться'}/>
      <InfoTooltip/>
    </>
  )
}