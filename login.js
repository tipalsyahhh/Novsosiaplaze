const successAlert = document.getElementById("success-alert");

if (successAlert) {
    setTimeout(function () {
        successAlert.style.display = "none";
    }, 10000);
}

const signUpButton = document.getElementById('register');
const signInButton = document.getElementById('login');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
container.classList.remove("right-panel-active");
});

$(document).ready(function () {
    $("#inputUsername").focus(function () {
        $(this).next(".input-label").addClass("active");
    });

    $("#inputUsername").blur(function () {
        if (!$(this).val()) {
            $(this).next(".input-label").removeClass("active");
        }
    });
});
