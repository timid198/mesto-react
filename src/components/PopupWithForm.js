import React from 'react';

function PopupWithForm({ name, title, buttonText, isOpen, onClose, children }) {

  let className = `popup popup-${name}`;
  if (isOpen) {
    className += ` popup_opened`;
  }

  return (
    <div className={className}>
      <div className={`popup__window popup-${name}__window`}>
        <button type="reset" className={`popup__close popup-${name}__close`} onClick={onClose}></button>
        <h2 className={`popup__title popup-${name}__title`}>{title}</h2>
        
          {children}
      </div>
    </div>
  )
}

export default PopupWithForm;