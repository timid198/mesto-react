import React, { useEffect, useState } from 'react';
import Card from './Card';
import api from '../utils/Api';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick, deleteCard }) {

  const [userName, setUserName] = useState([]);
  const [userDescription, setUserDescription] = useState([]);
  const [userAvatar, setUserAvatar] = useState([]);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getCards(), api.getUserData()])
      .then((res) => {
        setUserName(res[1].name);
        setUserDescription(res[1].about);
        setUserAvatar(res[1].avatar);
        setCards(res[0].map((item) => ({
          name: item.name,
          link: item.link,
          likes: item.likes.length,
          id: item._id,
        })));
      })
      .catch((err) => console.log(err));
  }, [])


  return (
    <main className="main">
      <section className="profile" _id="#">
        <div className="profile__content">
          <div className="profile__image">
            <img src={userAvatar} alt="Аватар" className="profile__avatar" />
            <button type="button" className="profile__overlay" onClick={onEditAvatar}></button>
          </div>
          <div className="profile__info">
            <div className="profile__info-title"><h2 className="profile__visitor-name">{userName}</h2><button type="button" className="profile__edit-button" onClick={onEditProfile}></button></div>
            <p className="profile__visitor-attribute">{userDescription}</p>
          </div>
          <div className="profile__add">
            <button type="button" className="profile__add-button" onClick={onAddPlace}></button>
          </div>
        </div>
      </section>

      <section className="elements">
        {cards.map((item) => <Card key={item.id} card={item} cardClick={onCardClick} cardDeleteClick={deleteCard} />)}
      </section>
    </main>
  );
}

export default Main;