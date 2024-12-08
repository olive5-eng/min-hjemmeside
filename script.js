const users = [
    { username: "medarbejder", password: "1234" },
    { username: "chef", password: "admin123" }
];

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        alert("Logget ind!");
        // Skift til rutevalgssektionen eller vis relevant indhold
        document.getElementById("loginSection").style.display = "none";
        document.getElementById("routeSelection").style.display = "block";
    } else {
        alert("Forkert brugernavn eller adgangskode!");
    }
}
