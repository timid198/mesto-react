import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import PopupWithForm from './components/PopupWithForm';
import ImagePopup from './components/ImagePopup';

function App() {

  const [isOpenEditAvatar, isEditAvatarPopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    isEditAvatarPopupOpen(true);
  }

  const [isOpenAddPlace, isAddPlacePopupOpen] = React.useState(false);

  function handleAddPlaceClick() {
    isAddPlacePopupOpen(true);
  }

  const [isOpenEditProfile, isEditProfilePopupOpen] = React.useState(false);

  function handleEditProfileClick() {
    isEditProfilePopupOpen(true);
  }

  const [isDeletedCard, isDeletedCardPopupOpen] = React.useState(false);

  function handleDeleteCard() {
    isDeletedCardPopupOpen(true);
  }

  const [selectedCard, setSelectedCardPopupOpen] = React.useState(false);

  function handleCardClick(element) {
    setSelectedCardPopupOpen(element);
  }

  function closeAllPopups() {
    isEditAvatarPopupOpen(false);
    isAddPlacePopupOpen(false);
    isEditProfilePopupOpen(false);
    isDeletedCardPopupOpen(false)
    setSelectedCardPopupOpen(false);
  }

  return (
    <div className="App">
      <div className="page">

        <Header />
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} deleteCard={handleDeleteCard} />
        <Footer />

        <PopupWithForm name="edit" title="Редактировать профиль" children isOpen={isOpenEditProfile} onClose={closeAllPopups}>
          <section className="popup__section">
            <input type="text" name="name" className="popup__input popup__input_name" placeholder="Имя" minLength="2" maxLength="40" required />
            <span className="popup__error popup__error_name" id="name-error"> </span>
          </section>
          <section class="popup__section">
            <input type="text" name="about" className="popup__input popup__input_about" placeholder="О себе" minLength="2" maxLength="200" required />
            <span className="popup__error popup__error_about" id="about-error"> </span>
          </section>
          <button type="submit" className="popup__button popup-edit__button">Сохранить</button>
        </PopupWithForm>

        <PopupWithForm name="avatar" title="Обновить аватар" children isOpen={isOpenEditAvatar} onClose={closeAllPopups}>
          <section className="popup__section">
            <input type="url" name="avatar" className="popup__input popup__input_avatar" placeholder="Ссылка на аватар" required />
            <span className="popup__error popup__error_avatar" id="avatar-error"> </span>
          </section>
          <button type="submit" className="popup__button popup-avatar__button">Сохранить</button>
        </PopupWithForm>

        <PopupWithForm name="add" title="Новое место" children isOpen={isOpenAddPlace} onClose={closeAllPopups}>
          <section className="popup__section">
            <input type="text" name="title" className="popup__input popup__input_title" placeholder="Название" minLength="2" maxLength="30" required />
            <span className="popup__error popup__error_title" id="title-error"></span>
          </section>
          <section className="popup__section">
            <input type="url" name="link" className="popup__input popup__input_link" placeholder="Ссылка на картинку" required />
            <span className="popup__error popup__error_link" id="link-error"></span>
          </section>
          <button type="submit" className="popup__button popup-add__button">Сохранить</button>
        </PopupWithForm>

        <PopupWithForm name="delete" title="Вы уверены?" children isOpen={isDeletedCard} onClose={closeAllPopups}>
          <button type="submit" className="popup__button popup-delete__button">Да</button>
        </PopupWithForm>

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />





        <template className="template__element template__element_simple">
          <div className="element">
            <img src="#" alt="#" className="element__image" />
            <button type="submit" className="element__title-like"></button>
            <p className="element__title-counter"></p>
            <div className="element__title">
              <button type="button" className="element__trash"></button>
              <h2 className="element__title-text"></h2>
            </div>
          </div>
        </template>

      </div>
    </div>
  );
}

export default App;
