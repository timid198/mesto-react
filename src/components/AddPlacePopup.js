import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({isOpen, onClose, onAddPlace}) {

    const [title, setTitle] = React.useState('');
    const [link, setLink] = React.useState('');

    function handleChangeTitle(e) {
        setTitle(e.target.value);
    }

    function handleChangeLink(e) {
        setLink(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onAddPlace({
            name: title,
            link,
        });
        setTitle('');
        setLink('');
    } 

    return (
        <PopupWithForm name="add" title="Новое место" buttonText="Сохранить" isOpen={isOpen} onClose={onClose}>
            <form className="popup__form popup-avatar__form" onSubmit={handleSubmit} >
              <section className="popup__section">
                <input type="text" name="title" value={title} onChange={handleChangeTitle} className="popup__input popup__input_title" placeholder="Название" minLength="2" maxLength="30" required />
                <span className="popup__error popup__error_title" id="title-error"></span>
              </section>
              <section className="popup__section">
                <input type="url" name="link" value={link} onChange={handleChangeLink} className="popup__input popup__input_link" placeholder="Ссылка на картинку" required />
                <span className="popup__error popup__error_link" id="link-error"></span>
              </section>
              <button type="submit" className="popup__button popup-avatar__button">Сохранить</button>                
            </form>
        </PopupWithForm>
    )
}

export default AddPlacePopup;