var a = document.getElementById("loginBtn");
var b = document.getElementById("registerBtn");
var x = document.getElementById("login");
var y = document.getElementById("form");

function login() {
  x.style.left = "100px";
  y.style.right = "-820px";
  a.className += " white-btn";
  b.className = "btn";
  x.style.opacity = 2;
  y.style.opacity = 1;
}

function register() {
  x.style.left = "-810px";
  y.style.right = "100px";
  a.className = "btn";
  b.className += " white-btn";
  x.style.opacity = 1;
  y.style.opacity = 2;
}
// -------- login close and open

const form1 = document.querySelector(".form-box");
const loginlink = document.querySelector(".login-container");
const registerlink = document.querySelector(".register-container");
const buttons = document.querySelectorAll(".btn");
const iconclose = document.querySelector(".icon-close");

loginlink.addEventListener("click", () => {
  form1.classList.add("active");
});
registerlink.addEventListener("click", () => {
  form1.classList.remove("active");
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    form1.classList.add("active-popue");
  });
});

iconclose.addEventListener("click", () => {
  form1.classList.remove("active-popue");
});
