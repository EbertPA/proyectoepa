const formSearch = document.getElementById('mySearch');
const formLogin = document.getElementById('myInput');
const formRegister = document.getElementById('myRegister');
const formSubscribe = document.getElementById('mySubscribe');

function searchValidate() {
    var acumErrores = 0;

    formSearch.classList.remove('is-invalid');

    var inputSearch = document.forms["mySearch"]["inputSearch"];

    if (inputSearch.value == "") {
        inputSearch.classList.add("is-invalid");
        document.getElementById("errorSearch").textContent = "Es campo es obligatorio";
        acumErrores++;
    } else if (!validar_search(inputSearch.value)) {
        inputSearch.classList.add("is-invalid");
        document.getElementById("errorSearch").textContent = "Debe tener 3 caracteres como mínimo";
        acumErrores++;
    } else {
        formSearch.classList.remove('is-invalid');
    }

    if (acumErrores > 0) {
        return false;
    } else {
        return true;
    }
}

function inputValidate() {
    var acumErrores = 0;

    formLogin.classList.remove('is-invalid');
    var inputEmail = document.forms["myInput"]["inputEmail"];
    var inputPassword = document.forms["myInput"]["inputPassword"];

    if (inputEmail.value == "") {
        inputEmail.classList.add("is-invalid");
        document.getElementById("errorEmail").textContent = "Es campo es obligatorio";
        acumErrores++;
    } else if (!validar_email(inputEmail.value)) {
        inputEmail.classList.add("is-invalid");
        document.getElementById("errorEmail").textContent = "El email no cumple el formato";
        acumErrores++;
    } else {
        formLogin.classList.remove('is-invalid');
    }

    if (inputPassword.value == "") {
        inputPassword.classList.add("is-invalid");
        document.getElementById("errorPassword").textContent = "Es campo es obligatorio";
        acumErrores++;
    } else if (!validar_password(inputPassword.value)) {
        inputPassword.classList.add("is-invalid");
        document.getElementById("errorPassword").textContent = "Mínimo ocho caracteres y al menos una letra mayúscula y un número";
        acumErrores++;
    } else {
        formLogin.classList.remove('is-invalid');
    }

    if (acumErrores > 0) {
        return false;
    } else {
        return true;
    }
}

function registerValidate() {
    var acumErrores = 0;

    formRegister.classList.remove('is-invalid');

    var inputEmail = document.forms["myRegister"]["registerEmail"];

    var inputPassword = document.forms["myRegister"]["registerPassword"];
    var inputRepetirPassword = document.forms["myRegister"]["repetirRegisterPassword"];
    var inputProvince = document.forms["myRegister"]["inputProvince"];

    if (inputEmail.value == "") {
        inputEmail.classList.add("is-invalid");
        document.getElementById("errorRegisterEmail").textContent = "Es campo es obligatorio";
        acumErrores++;
    } else if (!validar_email(inputEmail.value)) {
        inputEmail.classList.add("is-invalid");
        document.getElementById("errorRegisterEmail").textContent = "El email no cumple el formato";
        acumErrores++;
    } else {
        formRegister.classList.remove('is-invalid');
    }

    if (inputPassword.value == "") {
        inputPassword.classList.add("is-invalid");
        document.getElementById("errorRegisterPassword").textContent = "Es campo es obligatorio";
        acumErrores++;
    } else if (!validar_password(inputPassword.value)) {
        inputPassword.classList.add("is-invalid");
        document.getElementById("errorRegisterPassword").textContent = "Mínimo ocho caracteres y al menos una letra mayúscula y un número";
        acumErrores++;
    } else {
        formRegister.classList.remove('is-invalid');
    }

    if (inputRepetirPassword.value == "") {
        inputRepetirPassword.classList.add("is-invalid");
        document.getElementById("errorRepetirRegisterPassword").textContent = "Es campo es obligatorio";
        acumErrores++;
    } else if (!validar_password(inputPassword.value)) {
        inputPassword.classList.add("is-invalid");
        document.getElementById("errorRepetirRegisterPassword").textContent = "Mínimo ocho caracteres y al menos una letra mayúscula y un número";
        acumErrores++;
    } else if (inputPassword.value != inputRepetirPassword.value) {
        inputRepetirPassword.classList.add("is-invalid");
        document.getElementById("errorRepetirRegisterPassword").textContent = "Las contraseñas tienen que ser iguales";
        acumErrores++;
    } else {
        formRegister.classList.remove('is-invalid');
    }

    if (inputProvince.value == "") {
        inputProvince.classList.add("is-invalid");
        document.getElementById("errorProvince").textContent = "Es campo obligatorio";
        acumErrores++;
    } else {
        formRegister.classList.remove('is-invalid');
    }

    if (acumErrores > 0) {
        return false;
    } else {
        return true;
    }
}

function subscribeValidate() {
    var acumErrores = 0;

    formSubscribe.classList.remove('is-invalid');
    var subscribeEmail = document.forms["mySubscribe"]["subscribeEmail"];

    if (subscribeEmail.value == "") {
        subscribeEmail.classList.add("is-invalid");
        document.getElementById("errorSubscribeEmail").textContent = "Rellenar email antes de enviar";
        acumErrores++;
    } else if (!validar_email(subscribeEmail.value)) {
        subscribeEmail.classList.add("is-invalid");
        document.getElementById("errorSubscribeEmail").textContent = "El email no cumple el formato";
        acumErrores++;
    } else {
        formSubscribe.classList.remove('is-invalid');
    }

    if (acumErrores > 0) {
        return false;
    } else {
        return true;
    }
}

formSearch.addEventListener('blur', (event) => {
    if (event.target.value != '') event.target.classList.remove('is-invalid');
    searchValidate();
}, true);

formLogin.addEventListener('blur', (event) => {
    if (event.target.value != '') event.target.classList.remove('is-invalid');
    inputValidate();
}, true);

formRegister.addEventListener('blur', (event) => {
    if (event.target.value != '') event.target.classList.remove('is-invalid');
    registerValidate();
}, true);

formSubscribe.addEventListener('blur', (event) => {
    if (event.target.value != '') event.target.classList.remove('is-invalid');
    subscribeValidate();
}, true);

function validar_email(email) {
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
}

function validar_search(search) {
    var regex = /^([a-zA-Z0-9_\.\-]{3,})+$/;
    return regex.test(search) ? true : false;
}

function validar_password(password) {
    var regex = /(?=(.*[A-Z]+))(?=(.*[0-9]+))(?=.*[a-z]*)(?=(.*)).{8,}$/;
    return regex.test(password) ? true : false;
}