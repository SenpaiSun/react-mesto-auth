import React from 'react'
import Union from '../image/Union.png'
import UnionCancel from '../image/UnionCancel.png'


export default function InfoTooltip(props) {

  return(
    <div className={`popup ${props.isOpen}`}>
      <div className="popup__page popup__page-item">
        <button className="popup__close popup__close-profile" aria-label="Закрытие редактирования профиля" onClick={props.onClose}/>
        <img src={props.onImageTooltip ? Union : UnionCancel} className='popup__checkout-image'/>
        <p className="popup__checkout-auth">{props.onImageTooltip ? 'Вы успешно зарегистрировались!' : "Что-то пошло не так! Попробуйте ещё раз."}</p>
      </div>
    </div>
  )
}