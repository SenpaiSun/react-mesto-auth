import Header from "./Header"

export default function AuthPopup(props) {
  return(
    <>
      <div className="popup-auth">
        <Header/>
        <form className="popup-auth__page">
          <p className="popup-auth__auth-header">{props.title}</p>
          <input className="popup-auth__auth-input" placeholder="Email"></input>
          <input className="popup-auth__auth-input" placeholder="Пароль"></input>
          <button className="popup-auth__auth-confirm">{props.confirmButton}</button>
        </form>
      </div>
    </>
  )
}