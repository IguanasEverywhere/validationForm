const email = document.getElementById("mail");
const country = document.getElementById("country");
const zip = document.getElementById("zip");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("passwordConfirm");
const emailErrorMsg = document.getElementsByClassName("email-error-msg")[0];
const countryErrorMsg = document.getElementsByClassName("country-error-msg")[0];
const zipErrorMsg = document.getElementsByClassName("zip-error-msg")[0];
const passwordErrorMsg = document.getElementsByClassName("password-error-msg")[0];

const showEmailError = () => {
    if (email.validity.valid) {
        emailErrorMsg.textContent = "";
        email.classList.remove("error-box");
    } else if (email.validity.valueMissing) {
        email.classList.add("error-box");
        emailErrorMsg.textContent = "Must enter an email";
    } else if (email.validity.typeMismatch) {
        email.classList.add("error-box");
        emailErrorMsg.textContent = "Invalid email address: Must include @";
    }
}

const showCountryError = () => {
    if (country.validity.valid) {
        countryErrorMsg.textContent = "";
        country.classList.remove("error-box");
    } else if (country.validity.valueMissing) {
        country.classList.add("error-box");
        countryErrorMsg.textContent = "Must enter a country";
    }
}

const showZipError = () => {
    if (zip.validity.valid) {
        zip.classList.remove("error-box");
        zipErrorMsg.textContent = "";
    } else if (zip.validity.valueMissing) {
        zip.classList.add("error-box");
        zipErrorMsg.textContent = "Must Enter a Zip Code";
    } else if (zip.validity.tooShort) {
        zip.classList.add("error-box");
        zipErrorMsg.textContent = "Zip Code Must Be At Least 5 numbers";
    } else if (zip.validity.patternMismatch) {
        zip.classList.add("error-box");
        zipErrorMsg.textContent = "Zip must only be numbers";
    }
}

const showPasswordError = () => {
    if (password.validity.valid) {
        password.classList.remove("error-box");
        passwordErrorMsg.textContent = "";
    } else if (password.validity.valueMissing) {
        password.classList.add("error-box");
        passwordErrorMsg.textContent = "Please enter a password";
    } else if (password.validity.tooShort) {
        password.classList.add("error-box");
        passwordErrorMsg.textContent = "Password must be at least 8 characters";
    }
}


const submitForm = document.getElementById("entry-form");

submitForm.addEventListener("submit", (e) => {
    if (password.value !== passwordConfirm.value) {
        password.classList.add("error-box");
        passwordConfirm.classList.add("error-box");
        passwordErrorMsg.textContent="Passwords don't match";
        e.preventDefault();
    }
    else if (email.validity.valid && country.validity.valid && zip.validity.valid && password.validity.valid) {
        alert("HIGH FIVE!");
        // since form doesn't submit anything, this prevents a browser error message for now
        e.preventDefault(); 
    }
    else {
        e.preventDefault();
    }
});
