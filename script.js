const themeButton = document.getElementById("changeTheme");

let isDarkTheme = false;

themeButton.addEventListener("click", function() {

    isDarkTheme = !isDarkTheme;

    if (isDarkTheme) {
        document.body.style.backgroundColor = "#222";
        document.body.style.color = "#fff";
        themeButton.textContent = "Šviesi tema";
        themeButton.setAttribute("aria-pressed", "true");

    } else {
        document.body.style.backgroundColor = "#fff";
        document.body.style.color = "#010a14";
        themeButton.textContent = "Tamsi tema";
        themeButton.setAttribute("aria-pressed", "false");
    }

});