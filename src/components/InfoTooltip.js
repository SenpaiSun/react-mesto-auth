import Union from '../image/Union.png'

export default function InfoTooltip() {
  return(
    <div className="popup">
      <div className="popup__page popup__page-item">
        <button className="popup__close popup__close-profile" aria-label="Закрытие редактирования профиля" />
        <img src={Union} className='popup__checkout-image'/>
        <p className="popup__checkout-auth">Вы успешно зарегистрировались!</p>
      </div>
    </div>
  )
}