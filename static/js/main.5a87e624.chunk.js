(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(6),s=n.n(o),i=(n(14),n(9)),r=n(2),u=n(0);var l=function(){return Object(u.jsx)("header",{className:"header",children:Object(u.jsx)("div",{className:"header__logo"})})},p=c.a.createContext("");var d=function(e){var t=e.card,n=e.cardClick,a=e.onCardDelete,o=e.onCardLike,s=c.a.useContext(p),i=t.owner._id===s._id,r="element__trash ".concat(i?"element__trash_set":"element__trash_unset"),l=t.likes.some((function(e){return e._id===s._id})),d="element__title-like ".concat(l?"element__title-like_unset":"element__title-like_set");return Object(u.jsxs)("div",{className:"element",children:[Object(u.jsx)("img",{src:t.link,alt:t.name,className:"element__image",onClick:function(){n(t)}}),Object(u.jsx)("button",{type:"submit",className:d,onClick:function(){o(t)}}),Object(u.jsx)("p",{className:"element__title-counter",children:t.likes.length}),Object(u.jsxs)("div",{className:"element__title",children:[Object(u.jsx)("button",{type:"button",className:r,onClick:function(){a(t)}}),Object(u.jsx)("h2",{className:"element__title-text",children:t.name})]})]})};var _=function(e){var t=e.onEditProfile,n=e.onAddPlace,a=e.onEditAvatar,o=e.onCardClick,s=(e.deleteCard,e.cards),i=e.onCardLike,r=e.onCardDelete,l=c.a.useContext(p);return Object(u.jsxs)("main",{className:"main",children:[Object(u.jsx)("section",{className:"profile",children:Object(u.jsxs)("div",{className:"profile__content",children:[Object(u.jsxs)("div",{className:"profile__image",children:[Object(u.jsx)("img",{src:l.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440",className:"profile__avatar"}),Object(u.jsx)("button",{type:"button",className:"profile__overlay",onClick:a})]}),Object(u.jsxs)("div",{className:"profile__info",children:[Object(u.jsxs)("div",{className:"profile__info-title",children:[Object(u.jsx)("h2",{className:"profile__visitor-name",children:l.name}),Object(u.jsx)("button",{type:"button",className:"profile__edit-button",onClick:t})]}),Object(u.jsx)("p",{className:"profile__visitor-attribute",children:l.about})]}),Object(u.jsx)("div",{className:"profile__add",children:Object(u.jsx)("button",{type:"button",className:"profile__add-button",onClick:n})})]})}),Object(u.jsx)("section",{className:"elements",children:Array.from(s).map((function(e){return Object(u.jsx)(d,{card:e,cardClick:o,onCardDelete:r,onCardLike:i},e._id)}))})]})};var j=function(){return Object(u.jsx)("footer",{className:"footer",children:Object(u.jsxs)("article",{className:"footer__copyright",children:["\xa9 ",(new Date).getFullYear()," Mesto Russia"]})})};var h=function(e){var t=e.card,n=e.onClose,a="popup ".concat(t.link?"popup_opened":"");return Object(u.jsx)("div",{className:a,children:Object(u.jsxs)("div",{className:"popup__window popup-view__window",children:[Object(u.jsx)("button",{type:"reset",className:"popup__close popup-view__close",onClick:n}),Object(u.jsxs)("div",{className:"popup-view__form",children:[Object(u.jsx)("img",{src:t.link,alt:t.name,className:"popup-view__image"}),Object(u.jsx)("h2",{className:"popup-view__title",children:t.name})]})]})})},m=n(7),b=n(8),f=new(function(){function e(t){var n=t.address,a=t.token,c=t.groupID;Object(m.a)(this,e),this._address=n,this._token=a,this._groupID=c}return Object(b.a)(e,[{key:"_checkPromise",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status))}},{key:"getCards",value:function(){var e=this;return fetch("".concat(this._address,"v1/").concat(this._groupID,"/cards"),{headers:{authorization:"".concat(this._token)}}).then((function(t){return e._checkPromise(t)}))}},{key:"getUserData",value:function(){var e=this;return fetch("".concat(this._address,"v1/").concat(this._groupID,"/users/me"),{headers:{authorization:"".concat(this._token)}}).then((function(t){return e._checkPromise(t)}))}},{key:"pushUserData",value:function(e){var t=this;return fetch("".concat(this._address,"v1/").concat(this._groupID,"/users/me"),{method:"PATCH",headers:{authorization:"".concat(this._token),"Content-Type":"application/json"},body:JSON.stringify({name:"".concat(e.name),about:"".concat(e.about)})}).then((function(e){return t._checkPromise(e)}))}},{key:"pushAddCardData",value:function(e){var t=this;return fetch("".concat(this._address,"v1/").concat(this._groupID,"/cards"),{method:"POST",headers:{authorization:"".concat(this._token),"Content-Type":"application/json"},body:JSON.stringify({name:"".concat(e.name),link:"".concat(e.link)})}).then((function(e){return t._checkPromise(e)}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._address,"v1/").concat(this._groupID,"/cards/").concat(e),{method:"DELETE",headers:{authorization:"".concat(this._token)}}).then((function(e){return e.ok?Promise.resolve("sucsess"):Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status))}))}},{key:"changeCardsLikes",value:function(e,t){var n=this,a=t?"DELETE":"PUT";return fetch("".concat(this._address,"v1/").concat(this._groupID,"/cards/likes/").concat(e),{method:a,headers:{authorization:"".concat(this._token)}}).then((function(e){return n._checkPromise(e)}))}},{key:"changeAvatar",value:function(e){var t=this;return fetch("".concat(this._address,"v1/").concat(this._groupID,"/users/me/avatar"),{method:"PATCH",headers:{authorization:"".concat(this._token),"Content-Type":"application/json"},body:JSON.stringify({avatar:"".concat(e)})}).then((function(e){return t._checkPromise(e)}))}}]),e}())({address:"https://mesto.nomoreparties.co/",token:"4f64f170-2de3-4b0f-8592-8133023e0f4d",groupID:"cohort-22"});var O=function(e){var t=e.name,n=e.title,a=e.buttonText,c=e.isOpen,o=e.onClose,s=e.onSubmit,i=e.children,r="popup popup-".concat(t," ").concat(c?"popup_opened":"");return Object(u.jsx)("div",{className:r,children:Object(u.jsxs)("div",{className:"popup__window popup-".concat(t,"__window"),children:[Object(u.jsx)("button",{type:"reset",className:"popup__close popup-".concat(t,"__close"),onClick:o}),Object(u.jsx)("h2",{className:"popup__title popup-".concat(t,"__title"),children:n}),Object(u.jsxs)("form",{className:"popup__form popup-".concat(t,"__form"),onSubmit:s,noValidate:!0,children:[i,Object(u.jsx)("button",{type:"submit",className:"popup__button popup-".concat(t,"__button"),children:a})]})]})})};var v=function(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateUser,o=c.a.useState(""),s=Object(r.a)(o,2),i=s[0],l=s[1],d=c.a.useState(""),_=Object(r.a)(d,2),j=_[0],h=_[1],m=c.a.useContext(p);return c.a.useEffect((function(){l(m.name),h(m.about)}),[m]),Object(u.jsxs)(O,{name:"edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a({name:i,about:j})},children:[Object(u.jsxs)("section",{className:"popup__section",children:[Object(u.jsx)("input",{type:"text",value:i,onChange:function(e){l(e.target.value)},name:"name",className:"popup__input popup__input_name",placeholder:"\u0418\u043c\u044f",minLength:"2",maxLength:"40",required:!0}),Object(u.jsx)("span",{className:"popup__error popup__error_name",id:"name-error",children:" "})]}),Object(u.jsxs)("section",{className:"popup__section",children:[Object(u.jsx)("input",{type:"text",value:j,onChange:function(e){h(e.target.value)},name:"about",className:"popup__input popup__input_about",placeholder:"\u041e \u0441\u0435\u0431\u0435",minLength:"2",maxLength:"200",required:!0}),Object(u.jsx)("span",{className:"popup__error popup__error_about",id:"about-error",children:" "})]})]})};var x=function(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateAvatar,o=c.a.useRef();return Object(u.jsx)(O,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a({avatar:o.current.value}),o.current.value=""},children:Object(u.jsxs)("section",{className:"popup__section",children:[Object(u.jsx)("input",{type:"url",ref:o,name:"avatar",className:"popup__input popup__input_avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",required:!0}),Object(u.jsx)("span",{className:"popup__error popup__error_avatar",id:"avatar-error",children:" "})]})})};var k=function(e){var t=e.isOpen,n=e.onClose,a=e.onAddPlace,o=c.a.useState(""),s=Object(r.a)(o,2),i=s[0],l=s[1],p=c.a.useState(""),d=Object(r.a)(p,2),_=d[0],j=d[1];return c.a.useEffect((function(){l(""),j("")}),[t]),Object(u.jsxs)(O,{name:"add",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a({name:i,link:_})},children:[Object(u.jsxs)("section",{className:"popup__section",children:[Object(u.jsx)("input",{type:"text",name:"title",value:i,onChange:function(e){l(e.target.value)},className:"popup__input popup__input_title",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"2",maxLength:"30",required:!0}),Object(u.jsx)("span",{className:"popup__error popup__error_title",id:"title-error"})]}),Object(u.jsxs)("section",{className:"popup__section",children:[Object(u.jsx)("input",{type:"url",name:"link",value:_,onChange:function(e){j(e.target.value)},className:"popup__input popup__input_link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(u.jsx)("span",{className:"popup__error popup__error_link",id:"link-error"})]})]})};var C=function(e){var t=e.card,n=e.onClose,a=e.onCardDelete,c="popup popup-delete ".concat(t._id?"popup_opened":"");return Object(u.jsx)("div",{className:c,children:Object(u.jsxs)("div",{className:"popup__window popup-delete__window",children:[Object(u.jsx)("button",{type:"reset",className:"popup__close popup-delete__close",onClick:n}),Object(u.jsx)("h2",{className:"popup__title popup-delete__title",children:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?"}),Object(u.jsx)("form",{className:"popup__form popup-delete__form",onSubmit:function(e){e.preventDefault(),a({_id:t._id})},noValidate:!0,children:Object(u.jsx)("button",{type:"submit",autoFocus:!0,className:"popup__button popup-delete__button",children:"\u0414\u0430"})})]})})};n(16);var N=function(e){return e.isLoading,Object(u.jsx)("div",{className:"spinner"})};var g=function(){var e=c.a.useState(!1),t=Object(r.a)(e,2),n=t[0],o=t[1],s=c.a.useState(!1),d=Object(r.a)(s,2),m=d[0],b=d[1],O=c.a.useState(!1),g=Object(r.a)(O,2),y=g[0],D=g[1],P=c.a.useState({}),S=Object(r.a)(P,2),w=S[0],L=S[1],A=c.a.useState({}),T=Object(r.a)(A,2),E=T[0],I=T[1];function U(){o(!1),b(!1),D(!1),L({}),I({})}var z=Object(a.useState)({name:"",about:"",avatar:"",_id:""}),F=Object(r.a)(z,2),q=F[0],J=F[1],B=Object(a.useState)([]),H=Object(r.a)(B,2),M=H[0],R=H[1],V=Object(a.useState)(!1),Y=Object(r.a)(V,2),G=Y[0],K=Y[1];return Object(a.useEffect)((function(){K(!0),Promise.all([f.getUserData(),f.getCards()]).then((function(e){var t=Object(r.a)(e,2),n=t[0],a=t[1];J(n),R(a)})).catch((function(e){return console.log(e)})).finally((function(){K(!1)}))}),[]),Object(u.jsx)(p.Provider,{value:q,children:Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("div",{className:"page",children:[Object(u.jsx)(l,{}),G?Object(u.jsx)(N,{}):"",Object(u.jsx)(_,{onEditProfile:function(){D(!0)},onAddPlace:function(){b(!0)},onEditAvatar:function(){o(!0)},onCardClick:function(e){I(e)},onCardDelete:function(e){L(e)},cards:M,onCardLike:function(e){K(!0);var t=e.likes.some((function(e){return e._id===q._id}));f.changeCardsLikes(e._id,t).then((function(t){R((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.log(e)})).finally((function(){K(!1)}))}}),Object(u.jsx)(j,{}),Object(u.jsx)(v,{isOpen:y,onClose:U,onUpdateUser:function(e){K(!0),f.pushUserData(e).then((function(e){J(e),U()})).catch((function(e){return console.log(e)})).finally((function(){K(!1)}))}}),Object(u.jsx)(x,{isOpen:n,onClose:U,onUpdateAvatar:function(e){K(!0),f.changeAvatar(e.avatar).then((function(e){J(e),U()})).catch((function(e){return console.log(e)})).finally((function(){K(!1)}))}}),Object(u.jsx)(k,{isOpen:m,onClose:U,onAddPlace:function(e){K(!0),f.pushAddCardData(e).then((function(e){R([e].concat(Object(i.a)(M))),U()})).catch((function(e){return console.log(e)})).finally((function(){K(!1)}))}}),Object(u.jsx)(C,{card:w,onClose:U,onCardDelete:function(e){K(!0),f.deleteCard(e._id).then((function(t){R((function(n){return n.filter((function(n){return n._id===e._id?!t:n}))})),U()})).catch((function(e){return console.log(e)})).finally((function(){K(!1)}))}}),Object(u.jsx)(h,{card:E,onClose:U})]})})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),o(e),s(e)}))};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root")),y()}},[[17,1,2]]]);
//# sourceMappingURL=main.5a87e624.chunk.js.map