import React from 'react';

function Card({ card, cardClick, cardDeleteClick }) {

  function handleClick() {
    cardClick(card);
  }

  return (
    <div className="element">
      <img src={card.link} alt={card.name} className="element__image" onClick={handleClick} />
      <button type="submit" className="element__title-like"></button>
      <p className="element__title-counter">{card.likes}</p>
      <div className="element__title">
        <button type="button" className="element__trash" onClick={cardDeleteClick}></button>
        <h2 className="element__title-text">{card.name}</h2>
      </div>
    </div>
  )
}

export default Card;