function checkPassword(inputPassword) {
    const hardcodedPassword = "Bodie";
    return inputPassword == hardcodedPassword;
}

console.log(document.getElementById("password"))

document.getElementById("enterButton").addEventListener("click", function() {
    const inputPassword = document.getElementById("adminPassword").value;
    if (checkPassword(inputPassword)) {
        sessionStorage.setItem('isAdmin', 'true');
        window.location.href='../../';
    } else {
        sessionStorage.setItem('isAdmin', 'false');
        window.location.href='../../';
    }
});
