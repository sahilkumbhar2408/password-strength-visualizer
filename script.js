function checkStrength() {

    let password = document.getElementById("password").value;
    let bar = document.getElementById("strengthBar");
    let text = document.getElementById("strengthText");
    let crack = document.getElementById("crackTime");
    let entropy = document.getElementById("entropy");
    let suggestions = document.getElementById("suggestions");

    let lengthCheck = document.getElementById("length");
    let upperCheck = document.getElementById("uppercase");
    let numberCheck = document.getElementById("number");
    let specialCheck = document.getElementById("special");

    let score = 0;

    // Length
    if (password.length >= 8) {
        lengthCheck.classList.add("valid");
        lengthCheck.classList.remove("invalid");
        score++;
    } else {
        lengthCheck.classList.add("invalid");
    }

    // Uppercase
    if (/[A-Z]/.test(password)) {
        upperCheck.classList.add("valid");
        upperCheck.classList.remove("invalid");
        score++;
    } else {
        upperCheck.classList.add("invalid");
    }

    // Number
    if (/[0-9]/.test(password)) {
        numberCheck.classList.add("valid");
        numberCheck.classList.remove("invalid");
        score++;
    } else {
        numberCheck.classList.add("invalid");
    }

    // Special Character
    if (/[^A-Za-z0-9]/.test(password)) {
        specialCheck.classList.add("valid");
        specialCheck.classList.remove("invalid");
        score++;
    } else {
        specialCheck.classList.add("invalid");
    }

    let entropyValue = password.length * 4;
    entropy.innerHTML = "Entropy Score: " + entropyValue + " bits";

    if (score <= 1) {
        text.innerHTML = "Security Status: WEAK";
        bar.style.width = "25%";
        bar.style.background = "#ff3b3b";
        crack.innerHTML = "Estimated Crack Time: < 10 seconds";
        suggestions.innerHTML = "High vulnerability detected.";
    }
    else if (score == 2 || score == 3) {
        text.innerHTML = "Security Status: MODERATE";
        bar.style.width = "60%";
        bar.style.background = "#ffaa00";
        crack.innerHTML = "Estimated Crack Time: Few hours";
        suggestions.innerHTML = "Improve password complexity.";
    }
    else {
        text.innerHTML = "Security Status: STRONG";
        bar.style.width = "100%";
        bar.style.background = "#00ff9c";
        crack.innerHTML = "Estimated Crack Time: Several years";
        suggestions.innerHTML = "Password meets modern security standards.";
    }
}

function togglePassword() {
    let pass = document.getElementById("password");
    let icon = document.querySelector(".eye-icon");

    if (pass.type === "password") {
        pass.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        pass.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}