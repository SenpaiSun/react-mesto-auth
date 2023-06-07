import logo from '../image/mesto_logo.png';
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <>
      <header className="header">
        <img src={logo} className="header__logo" alt="Логотип сервиса Место" />
        <div className="header__container">
          <p className="header__text">{props.email}</p>
          <Link className="header__text" to={props.redirect} onClick={props.onClick}>{props.titleHeader}</Link>
        </div>
      </header>
      <hr className="header__line" />
    </>
  )
}