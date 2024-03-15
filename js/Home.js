// -------log and sing btn

document.getElementById("loginBtn").addEventListener("click", function () {
  window.location.href = "/log-sing.html";
});
const loginButton = document.getElementById("loginButton");
loginButton.addEventListener("click", function () {
  window.location.href = "/log-sing.html";
});
// ---------------menu nav mobile
function myMenuFunction() {
  var i = document.getElementById("navMenu");
  if (i.className === "nav-menu") {
    i.className += " responsive";
  } else {
    i.className = "nav-menu";
  }
}
// ------------login screen mobail
function checkWindowSize() {
  const loginButton = document.getElementById("loginButton");
  if (window.innerWidth < 768) {
    loginButton.style.display = "inline";
  } else {
    loginButton.style.display = "none";
  }
}

checkWindowSize(); // اجرای تابع برای بارگذاری اولیه
window.addEventListener("resize", checkWindowSize); // اضافه کردن event listener برای تغییر اندازه صفحه

// -------------------emoji typing

var typed = new Typed(".type", {
  strings: ["", "Emoji Game"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

// hide and show
const eyeicon = document.querySelectorAll(".show-hide");

eyeicon.forEach((eyeicon) => {
  eyeicon.addEventListener("click", () => {
    const pinput = eyeicon.parentElement.querySelector("input");
    eyeicon.classList.replace("bxs-hide", "bx-show");
  });
});
// --------------------log in & start game
document.getElementById('loginButton').addEventListener('click', function() {

  window.location.href = 'log-sing.html';
});

document.getElementById("stGame").addEventListener("click", function (event) {
    
      window.location.href = "emoji.html";
    
  });
