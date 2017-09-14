// Слайдер""
var button1 = document.querySelector(".button-1");
var button2 = document.querySelector(".button-2");
var button3 = document.querySelector(".button-3");

var slides = document.querySelectorAll(".slide-item");

function changeBackGround(color, image) {
  document.body.style.backgroundColor = color;
  document.body.style.backgroundImage = 'url(img/' + image + ')';
}

var onButton1Click = function (evt) {
  evt.preventDefault();
  slides[0].classList.remove("hidden");
  slides[1].classList.add("hidden");
  slides[2].classList.add("hidden");
  button2.classList.remove("slide-toggle-checked");
  button3.classList.remove("slide-toggle-checked");

  if (button1.classList.contains("slide-toggle-checked") != null ) {
    button1.classList.add("slide-toggle-checked");
  }

  changeBackGround("#8996a6", "slide-1.png");
}

var onButton2Click = function (evt) {
  evt.preventDefault();
  slides[0].classList.remove("hidden");
  slides[1].classList.add("hidden");
  slides[2].classList.add("hidden");
  button1.classList.remove("slide-toggle-checked");
  button2.classList.add("slide-toggle-checked");
  button3.classList.remove("slide-toggle-checked");
  changeBackGround("#8996a6", "slide-2.png");
}

var onButton3Click = function (evt) {
  evt.preventDefault();
  slides[2].classList.remove("hidden");
  slides[1].classList.add("hidden");
  slides[0].classList.add("hidden");
  button3.classList.add("slide-toggle-checked");
  button2.classList.remove("slide-toggle-checked");
  button1.classList.remove("slide-toggle-checked");
  changeBackGround("#9d8b84", "slide-3.png");
}

button1.addEventListener("click", onButton1Click);
button2.addEventListener("click", onButton2Click);
button3.addEventListener("click", onButton3Click);

// Карта сайта 
var ymaps = document.querySelector(".map-ymaps");
var map = document.querySelector(".map-pin");
ymaps.classList.remove("hidden");
map.classList.add("hidden");

// Форма обратной связи
var feedback = document.querySelector(".btn-feedback");
var overlay = document.querySelector(".overlay");
  
var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".modal-close");
  
var form = popup.querySelector(".feedback-form-modal");
var yourName = popup.querySelector("[name=your-name]");
var mail = popup.querySelector("[name=mail");
  
var storage = localStorage.getItem("name");
  
feedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("hidden");
  overlay.classList.remova("hidden");
   
  if (storage) {
    yourName.value = storage;
    mail.focus();
  } else {
    yourName.focus();
  }
});
  
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("hidden");
  overlay.classList.add("hidden");
  popup.classList.remove("modal-error");
});
  
form.addEventListener("submit", function (evt) {
  if (!yourName.value || !mail.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    localStorage.setItem("name", yourName.value);
  }
});
  
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-feedback")) {
      popup.classList.add("hidden");
      overlay.classList.add("hidden");
      popup.classList.remove("modal-error");
    }
  }
});