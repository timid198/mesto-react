import React, {useState, useEffect} from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import {CurrentUserContext} from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import CardDeletePopup from './CardDeletePopup';

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

  const [isCardToDelete, setIsCardToDelete] = React.useState({});

  function handleDeleteCard(element) {
    setIsCardToDelete(element);
  }

  const [selectedCard, setSelectedCard] = React.useState({});

  function handleCardClick(element) {
    setSelectedCard(element);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsCardToDelete({})
    setSelectedCard({});
  }

  const [currentUser, setCurrentUser] = useState({name: '', about: '', avatar: '', _id: ''});
  const [cards, setCards] = useState({ name: '', link: '', likes: '', _id: '', owner: '' });
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    Promise.all([api.getUserData(), api.getCards()])
      .then(res => {
        setLoading(false)
        setCurrentUser(res[0]);
        setCards(res[1].map((item) => ({ 
          name: item.name, 
          link: item.link, 
          likes: item.likes, 
          _id: item._id,
          owner: item.owner, 
          })));}) 
      .catch((err) => console.log(err));
  }, [])

function handleUpdateUser(props) {
  api.pushUserData(props)
  .then(res => {
    currentUser.name = res.name;
    currentUser.about = res.about;
    closeAllPopups();})
}

function handleUpdateAvatar(props) {
  api.changeAvatar(props.avatar)
  .then(res => {
    currentUser.avatar = res.avatar;
    closeAllPopups();})
  }
  
  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeCardsLikes(card._id, isLiked)
    .then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
  });
} 

function handleCardDelete(card) {
  api.deleteCard(card._id)
  .then((newCard) => {
    setCards((state) => state.filter((c) => c._id === card._id ? !newCard : c));
    closeAllPopups();});
} 

function handleAddPlaceSubmit(props) {
  api.pushAddCardData(props)
  .then(res => {
    setCards([res, ...cards]);
    closeAllPopups();})
}

  return (

    <CurrentUserContext.Provider value={currentUser}>      
        <div className="App">
          <div className="page">

            <Header />
            <Main 
            onEditProfile={handleEditProfileClick} 
            onAddPlace={handleAddPlaceClick} 
            onEditAvatar={handleEditAvatarClick} 
            onCardClick={handleCardClick} 
            onCardDelete={handleDeleteCard}
            cards={cards} 
            onCardLike={handleCardLike}
            isLoading={isLoading}
             />
            <Footer />

            <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
            <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} /> 
            <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} /> 
            <CardDeletePopup card={isCardToDelete} onClose={closeAllPopups} onCardDelete={handleCardDelete} />           

            

            <ImagePopup card={selectedCard} onClose={closeAllPopups} />

          </div>
        </div>      
    </CurrentUserContext.Provider>
  );
}

export default App;