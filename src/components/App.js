import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'
import EditProfilePopup from './EditProfilePopup'
import EditAvatarPopup from './EditAvatarPopup'
import AddPlacePopup from './AddPlacePopup'
import { api, apiAuth } from '../utils/api'
import Login from './Login'
import Register from './Register'
import PageNotFound from './PageNotFound'
import {CurrentUserContext} from '../contexts/CurrentUserContext'
import {AppContext} from '../contexts/AppContext'
import Union from '../image/Union.png'
import UnionCancel from '../image/UnionCancel.png'




function App() {
  const [registerSuccess, setRegisterSuccess] = React.useState(false)
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditRegisterPopupOpen, setEditRegisterPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null)
  const [currentUser, setCurrentUser] = React.useState(null)
  const [cards, setCards] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false);
  const isOpen = isEditAvatarPopupOpen || isEditProfilePopupOpen || isAddPlacePopupOpen || selectedCard || isEditRegisterPopupOpen
  const [isStateTooltip, setStateTooltip] = React.useState(false)

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getDefaultCards()])
      .then(([user, cards]) => {
        setCurrentUser(user);
        setCards(cards);
      })
      .catch(console.error)
  }, []);

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true)
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true)
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false)
    setAddPlacePopupOpen(false)
    setEditAvatarPopupOpen(false)
    setEditRegisterPopupOpen(false)
    setSelectedCard(null)
  }

  React.useEffect(() => {
    function closeByEscape(evt) {
      if(evt.key === 'Escape') {
        closeAllPopups();
      }
    }
    if(isOpen) {
      document.addEventListener('keydown', closeByEscape);
      return () => {
        document.removeEventListener('keydown', closeByEscape);
      }
    }
  }, [isOpen])

  function handleCardClick(card) {
    setSelectedCard(card)
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked)
    .then((newCard) => {
        setCards((state) => state.map((cards) => cards._id === card._id ? newCard : cards));
    })
    .catch(console.error)
}

  function handleCardDelete(cardId) {
    api.deleteCard(cardId)
    .then(() => {
      setCards((cards) => cards.filter(card => card._id !== cardId))
    })
    .catch(console.error)
  }

  function handleUpdateUser(data) {
    setIsLoading(true)
    api.updateUserProfile(data)
    .then((data) => {
      setCurrentUser(data)
      closeAllPopups()
    })
    .catch(console.error)
    .finally(() => {
      setIsLoading(false)
    })
  }

  function handleUpdateAvatar(data) {
    setIsLoading(true)
    api.changeAvatar(data)
    .then((data) => {
      setCurrentUser(data)
      closeAllPopups()
    })
    .catch(console.error)
    .finally(() => {
      setIsLoading(false)
    })
  }

  function handleAddPlaceSubmit(data) {
    setIsLoading(true)
    api.createNewCard(data)
    .then((newCard) => {
      setCards([newCard, ...cards])
      closeAllPopups()
    })
    .catch(console.error)
    .finally(() => {
      setIsLoading(false)
    })
  }

  function infoTooltipAprove() {
    setEditRegisterPopupOpen(true)
    setStateTooltip(true)
  }

  function infoTooltipCancel() {
    setEditRegisterPopupOpen(true)
    setStateTooltip(false)
  }

  function handleUserRegister(email, password) {
    apiAuth.userRegister(email, password)
    .then((res) => {
      if(res) {
        setRegisterSuccess(true)
        infoTooltipAprove()
      }
    })
    .catch(console.error)
  }

  function handleUserLogin() {
    apiAuth.userRegister()
    .then()
  }

  function handleUserToken() {
    apiAuth.userRegister()
    .then()
  }

  return (
          <AppContext.Provider value={{ isLoading, closeAllPopups, isOpen }}>
            <div className='root'>
              <Routes>
                <Route path='/' element={
                  <>
                    <Header titleHeader={'Выйти'} redirect={'sign-in'} email='SenpaiSun@yandex.ru'/>
                    <CurrentUserContext.Provider value={currentUser}>
                      {currentUser && <Main onCards={cards} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete} />}

                      <EditProfilePopup onUpdateUser={handleUpdateUser} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />

                      <AddPlacePopup onClose={closeAllPopups} isOpen={isAddPlacePopupOpen ? "popup__opened" : ""} onAddPlace={handleAddPlaceSubmit} />

                      <PopupWithForm onClose={closeAllPopups} name="delete_card" title="Вы уверены?" buttonText="Да" />

                      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}  onChangeAvatar={handleUpdateAvatar}/>

                      <ImagePopup onClose={closeAllPopups} card={selectedCard} />
                    </CurrentUserContext.Provider>

                    <Footer />
                  </>
                } />
                <Route path='/sign-up' element={<Register titleHeader={'Вход'} redirect='/sign-in' onClose={closeAllPopups} isOpen={isEditRegisterPopupOpen ? "popup__opened" : ""} onRegister={handleUserRegister}/>} onImageTooltip={isStateTooltip ? Union : UnionCancel}/>
                <Route path='/sign-in' element={<Login titleHeader={'Регистрация'} redirect='/sign-up'/>}/>
                <Route path='*' element={<PageNotFound/>}/>
              </Routes>
            </div>
          </AppContext.Provider>
  );
}

export default App;

/*разобраться в src*/