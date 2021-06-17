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
import Spinner from './Spinner/Spinner';

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

  const [cardToDelete, setCardToDelete] = React.useState({});

  function handleDeleteCard(card) {
    setCardToDelete(card);
  }

  const [selectedCard, setSelectedCard] = React.useState({});

  function handleCardClick(element) {
    setSelectedCard(element);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setCardToDelete({})
    setSelectedCard({});
  }

  const [currentUser, setCurrentUser] = useState( {name: '', about: '', avatar: '', _id: '00000000000000'} );
  const [cards, setCards] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    Promise.all([api.getUserData(), api.getCards()])
      .then(res => {
        let [userData, cardsData] = res;
        setCurrentUser(userData);
        setCards(cardsData);}) 
      .catch((err) => console.log(err))
      .finally(() => {setLoading(false)})
  }, [])

function handleUpdateUser(props) {
  setLoading(true)
  api.pushUserData(props)
  .then(res => {
    setCurrentUser(res);
    closeAllPopups();})
  .catch((err) => console.log(err))
  .finally(() => {setLoading(false)});
}

function handleUpdateAvatar(props) {
  setLoading(true)
  api.changeAvatar(props.avatar)
  .then(res => {
    setCurrentUser(res);
    closeAllPopups();})
  .catch((err) => console.log(err))
  .finally(() => {setLoading(false)});
  }
  
  function handleCardLike(card) {
    setLoading(true)
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeCardsLikes(card._id, isLiked)
    .then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));})
    .catch((err) => console.log(err))
    .finally(() => {setLoading(false)});
} 

function handleCardDelete(card) {
  setLoading(true)
  api.deleteCard(card._id)
  .then((newCard) => {
    setCards((state) => state.filter((c) => c._id === card._id ? !newCard : c));
    closeAllPopups();})
  .catch((err) => console.log(err))
  .finally(() => {setLoading(false)});
} 

function handleAddPlaceSubmit(props) {
  setLoading(true)
  api.pushAddCardData(props)
  .then(res => {
    setCards([res, ...cards]);
    closeAllPopups();})
  .catch((err) => console.log(err))
  .finally(() => {setLoading(false)});
}

  return (

    <CurrentUserContext.Provider value={currentUser}>      
        <div className="App">
          <div className="page">
          
            <Header />
            { isLoading ? <Spinner /> : '' }
            <Main 
            onEditProfile={handleEditProfileClick} 
            onAddPlace={handleAddPlaceClick} 
            onEditAvatar={handleEditAvatarClick} 
            onCardClick={handleCardClick} 
            onCardDelete={handleDeleteCard}
            cards={cards} 
            onCardLike={handleCardLike}            
             />
            <Footer />
            
            <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
            <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} /> 
            <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} /> 
            <CardDeletePopup card={cardToDelete} onClose={closeAllPopups} onCardDelete={handleCardDelete} />           

            

            <ImagePopup card={selectedCard} onClose={closeAllPopups} />

          </div>
        </div>      
    </CurrentUserContext.Provider>
  );
}

export default App;
