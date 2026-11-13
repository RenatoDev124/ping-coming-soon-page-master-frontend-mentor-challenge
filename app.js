const $formContact = document.getElementById('formContact');

const $txtEmail = document.getElementById('txtEmail');
const $errorMessage = document.getElementById('errorMessage');

$formContact.addEventListener('submit', function (e) {
    e.preventDefault();

    let messageError = [];

    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const email = $txtEmail.value.trim();

    if (!email) {
        messageError.push("The email field is required.");
    } else if (!regexEmail.test(email)) {
        messageError.push("The email field is not formatted correctly.");
    }

    if (messageError.length > 0) {
        $errorMessage.textContent = messageError;
        $txtEmail.classList.add('input--error');
        return;
    }
    
    alert("Your data has been successfully submitted.");

    if($txtEmail.classList.contains('input--error'))
        $txtEmail.classList.remove('input--error');

    $errorMessage.textContent = "";
});