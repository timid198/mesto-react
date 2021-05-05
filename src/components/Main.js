import React, { useEffect, useState } from 'react';
import Card from './Card';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick, deleteCard, userAvatar, userDescription, userName, cards }) {

  return (
    <main className="main">
      <section className="profile">
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
        {cards.map((item) => (<Card key={item.id} card={item} cardClick={onCardClick} cardDeleteClick={deleteCard} />))}
      </section>
    </main>
  );
}

export default Main;