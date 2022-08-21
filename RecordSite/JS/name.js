const sectionId = document.querySelector(".ID");
const sectionid = document.querySelector(".id");
const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#my_ID")
const loginSubmit = document.querySelector("#Submit")
const greeting = document.querySelector(".user__name")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function LoginClick(evnet) {
    evnet.preventDefault();  //새로고침 이벤 막기
    const username = loginInput.value;          //username에 값 저장

    if(username === "") {
        localStorage.removeItem(USERNAME_KEY);
        alert("이름을 적어주세요.");
    } else {
        loginForm.classList.add(HIDDEN_CLASSNAME);  //form 없애버리기
        sectionId.classList.remove("ID");
        sectionid.classList.remove("id");
        localStorage.setItem(USERNAME_KEY, username); //local에 저장
        copyGreeting(username);
    }
}

function copyGreeting(username) {  //똑같은 것이 반복되기 때문에.
    greeting.innerText = `${username} `;   
    sectionId.classList.remove("ID");
    sectionid.classList.remove("id");
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginSubmit.addEventListener("click", LoginClick);
} else {
    copyGreeting(savedUsername);
}