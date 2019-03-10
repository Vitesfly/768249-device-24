var Link = document.querySelector(".main-contacts-btn");

var popup = document.querySelector(".modal-login");
var close = popup.querySelector(".modal-input-dropdown-close");

var form = popup.querySelector("form");
var login = popup.querySelector("[name=user-name]");
var password = popup.querySelector("[name=user-password]");

var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("login");    
} catch (err)  {
    isStorageSupport = false;
}

Link.addEventListener("click", function (evt)  {
    evt.preventDefault();
    popup.classList.add("modal-show");

    if (storage)  {
        login.value = storage;
    } else  {    
    login.focus();
    }
});

close.addEventListener("click", function (evt)  {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");   
});
    

form.addEventListener("submit", function (evt)  {  
    if (!login.value || !password.value)  {
        evt.preventDefault();
        popup.classList.remove("modal-error"); 
        popup.offsetWidth = popup.offsetWidth;             
        popup.classList.add("modal-error");    
    } else  {
        if (isStorageSupport)  {
        localStorage.setItem("login", login.value);
    }
  }
});

window.addEventListener("keydown", function (evt)  {
    if (evt.keyCode === 27)  {
        evt.preventDefault();
        if (popup.classList.contains("modal-show"))  {
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");   
        }
    }
});

var mapLink = document.querySelector(".main-contacts-map");

var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-map-close");

mapLink.addEventListener("click", function (evt)  {
    evt.preventDefault();
    mapPopup.classList.add("modal-map-show");    
});

mapClose.addEventListener("click", function (evt)  {
    evt.preventDefault();
    mapPopup.classList.remove("modal-map-show");
});

window.addEventListener("keydown", function (evt)  {
    if (evt.keyCode === 27)  {
        evt.preventDefault();
        if (mapPopup.classList.contains("modal-map-show"))  {
            mapPopup.classList.remove("modal-map-show");
        }
    }
});