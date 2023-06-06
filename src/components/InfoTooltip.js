import React from 'react'



export default function InfoTooltip(props) {

  return(
    <div className={`popup ${props.isOpen}`}>
      <div className="popup__page popup__page-item">
        <button className="popup__close popup__close-profile" aria-label="Закрытие редактирования профиля" onClick={props.onClose}/>
        <img src={props.onImageTooltip} className='popup__checkout-image'/>
        <p className="popup__checkout-auth">Вы успешно зарегистрировались!</p>
      </div>
    </div>
  )
}