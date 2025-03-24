function login() {
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;
    if (email === "admin@college.com" && password === "admin123") {
        alert("Login successful");
        return true;
    } else {
        alert("Invalid email or password");
        return false;
    }
}

function signup() {
    let username = document.getElementById("signup-username").value;
    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("signup-password").value;
    alert("Signup successful! Username: " + username + ", Email: " + email);
    return false;
}
