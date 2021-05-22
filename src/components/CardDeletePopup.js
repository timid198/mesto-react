import React from 'react';

function CardDeletePopup({card, onClose, onCardDelete}) {

    function handleSubmit(e) {
        e.preventDefault();      
        onCardDelete({
          _id: card._id,
        });
    } 

    let className = `popup popup-delete ${card._id ? 'popup_opened' : ''}`;

    return(
        <div className={className}>
            <div className="popup__window popup-delete__window">
                <button type="reset" className="popup__close popup-delete__close" onClick={onClose}></button>
                <h2 className="popup__title popup-delete__title">Вы уверены?</h2>
                <form className="popup__form popup-delete__form" onSubmit={handleSubmit} noValidate>
                    <button type="submit" autoFocus className="popup__button popup-delete__button">Да</button>
                </form>
            </div>
        </div>
    )
}

export default CardDeletePopup;