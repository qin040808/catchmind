const body = document.querySelector("body");
const loginForm = document.getElementById("jsLogin");
const LOGGED_OUT = "loggedOut";
const LOGGED_IN = "loggedIn";
const NICKNAME = "nickname";
const logIn = (nickname) => {
    const socket = io("/");
    socket.emit("setNickname",{nickname});
}
const nickname = localStorage.getItem(NICKNAME);

console.log(window.events);

if (nickname === null) {
    body.className = LOGGED_OUT;
} else {
    body.className = LOGGED_IN;
    logIn(nickname);
}

const handleFormSubmit = (event) => {
    event.preventDefault();
    const input = loginForm.querySelector("input");
    localStorage.setItem(NICKNAME ,input.value);
    logIn(input.value);
    input.value = "";
};

if (loginForm) {
    loginForm.addEventListener("submit", handleFormSubmit)
}
