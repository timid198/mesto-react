import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  const [cardToDelete, setCardToDelete] = React.useState(false);

  function handleDeleteCard() {
    setCardToDelete(true);
  }

  const [selectedCard, setSelectedCard] = React.useState({});

  function handleCardClick(element) {
    setSelectedCard(element);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setCardToDelete(false)
    setSelectedCard(false);
  }

  return (
    <div className="App">
      <div className="page">

        <Header />
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} deleteCard={handleDeleteCard} />
        <Footer />

        <PopupWithForm name="edit" title="Редактировать профиль" children buttonText="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
          <section className="popup__section">
            <input type="text" name="name" className="popup__input popup__input_name" placeholder="Имя" minLength="2" maxLength="40" required />
            <span className="popup__error popup__error_name" id="name-error"> </span>
          </section>
          <section className="popup__section">
            <input type="text" name="about" className="popup__input popup__input_about" placeholder="О себе" minLength="2" maxLength="200" required />
            <span className="popup__error popup__error_about" id="about-error"> </span>
          </section>
        </PopupWithForm>

        <PopupWithForm name="avatar" title="Обновить аватар" children buttonText="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
          <section className="popup__section">
            <input type="url" name="avatar" className="popup__input popup__input_avatar" placeholder="Ссылка на аватар" required />
            <span className="popup__error popup__error_avatar" id="avatar-error"> </span>
          </section>
        </PopupWithForm>

        <PopupWithForm name="add" title="Новое место" children buttonText="Сохранить" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
          <section className="popup__section">
            <input type="text" name="title" className="popup__input popup__input_title" placeholder="Название" minLength="2" maxLength="30" required />
            <span className="popup__error popup__error_title" id="title-error"></span>
          </section>
          <section className="popup__section">
            <input type="url" name="link" className="popup__input popup__input_link" placeholder="Ссылка на картинку" required />
            <span className="popup__error popup__error_link" id="link-error"></span>
          </section>
        </PopupWithForm>

        <PopupWithForm name="delete" title="Вы уверены?" children buttonText="Да" isOpen={cardToDelete} onClose={closeAllPopups} />

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />

      </div>
    </div>
  );
}

export default App;
