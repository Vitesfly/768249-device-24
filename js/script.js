var modalLoginLink = document.querySelector(".main-contacts-btn"),
    modalLogin = document.querySelector(".modal-login"),
    userName = modalLogin.querySelector("[name=user-name]"),
    userEmail = modalLogin.querySelector("[name=user-email]"),
    modalLoginForm = modalLogin.querySelector("form"),
    modalMapLink = document.querySelector(".main-contacts-map"),
    modalMap = document.querySelector(".modal-map"),
    modalLoginClose = document.querySelector("modal-input-dropdown-close"),
    modalMapClose = document.querySelector("modal-map-close");

modalLoginLink.addEventListener("click", function (evt)  {
    evt.preventDefault();
    modalLogin.classList.add("modal-login-active");
    userName.focus();
})    

nodalLoginForm.addEventListener("submit", function (evt)  {
    if (!userName.value || !userEmail.value)  {
        evt.preventDefault();
        modalLogin.classList.add("modal-login-error");
    }
})

window.addEventListener("keydown", function (evt)  {
    if (evt.keyCode === 27)  {
        evt.preventDefault();
        if (modalLogin.classList.contains("modal-login-active"))  {
            modalLogin.classList.remove("modal-login-active");
            modalLogin.classList.remove("modal-login-error");
        }
    }
})

modalLoginClose.addEventListener("click", function (evt)  {
    evt.preventDefault();
    modalLogin.classList.remove("modal-login-active");
    modalLogin.classList.remove("modal-login-error");
})

modalMapLink.addEventListener("click", function (evt)  {
    evt.preventDefault();
    modalMap.classList.remove("modal-map-active");
})

window.addEventListener("keydown", function (evt)  {
    if (evt.keyCode === 27)  {
        evt.preventDefault();
        if (modalMap.classList.contains("modal-map-active"))  {
            modalLogin.classList.remove("modal-map-active");
        }
    }
})

modalMapClose.addEventListener("click", function (evt)  {
    evt.preventDefault();
    modalMap.classList.remove("modal-map-active");
})