// JavaScript source code

const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text) {
    console.log("savename");
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    console.log("handleSubmit");
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName() {
    console.log("askForName");
    form.classList.add(SHOWING_CN);
        console.log("complete add class name showing");
    form.addEventListener("submit" , handleSubmit);
}

function paintGreeting(text) {
    console.log("paintGreeting");
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = "Hello " + text;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}


function init() {
    loadName();
}

init();
