function login() {
let role = document.getElementById("role").value;
let username = document.getElementById("username").value;
let password = document.getElementById("password").value;


if (username === "" || password === "") {
document.getElementById("error").innerText = "All fields required";
return;
}


if (role === "admin" && username === "admin" && password === "admin123") {
window.location.href = "admin.html";
}
else if (role === "vendor" && username === "vendor" && password === "vendor123") {
window.location.href = "vendor.html";
}
else if (role === "user" && username === "user" && password === "user123") {
window.location.href = "user.html";
}
else {
document.getElementById("error").innerText = "Invalid credentials";
}
}
