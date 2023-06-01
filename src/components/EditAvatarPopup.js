import PopupWithForm from "./PopupWithForm"
import React from "react"

export default function EditAvatarPopup(props) {

  const avatarRef = React.useRef('')

  function handleSubmit(e) {
    e.preventDefault()
    props.onChangeAvatar({
      avatar: avatarRef.current.value
    })
  }

  return (
    <PopupWithForm onClose={props.onClose} isOpen={props.isOpen ? "popup__opened" : ""} name="update_avatar" title="Обновить аватар" buttonText="Сохранить" onSubmit={handleSubmit}>
      <input type="url" className="popup__note form__input" id="update-avatar-input" name="link" placeholder="Ссылка на картинку" required ref={avatarRef}/>
      <span className="popup__input-error update-avatar-input-error"></span>
    </ PopupWithForm>
  )
}