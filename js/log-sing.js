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

// -------Form Validation With Localstorage
// let btn = document.getElementById("submit");

// btn.addEventListener("click", (e) => {
//   e.preventDefault();

//   let userName = document.getElementById("userName").value;
//   let email = document.getElementById("email").value;
//   let password = document.getElementById("password").value;
//   let confirmPass = document.getElementById("confirPass").value;

//   if (userName === "" || email === "" || password === "" || confirmPass === "") {
//     alert("You must fill out the entire form before signing up");
//   } else if (password !== confirmPass) {
//     alert("Please check your password");
//   } else {
//     let storedData = localStorage.getItem('user-Data');
//     let userData = [];

//     if (storedData) {
//       userData = JSON.parse(storedData);
//     }

//     userData.push({
//       userName: userName,
//       email: email,
//       password: password,
//       confirmPass: confirmPass,
//       scores: 0,
//     });

//     let jsonData = JSON.stringify(userData);
//     localStorage.setItem('user-Data', jsonData);

//     alert('Successful registration, and you are now logged in');
//     localStorage.setItem('is-Login', 'true');
//     localStorage.setItem('user-Login', userName);
//     window.location.href = '../index/emoji.html';

//   }
// });
function checkUsername() {
  // اعتبارسنجی نام کاربری
  let username = document.getElementById('userName').value;
  if (username === '') {
    alert('Please enter a username');
    return;
  }
}

document.getElementById('submit').addEventListener('click', function() {
  // اعتبارسنجی ایمیل
  let email = document.getElementById('email').value;
  if (!email.includes('@') || !email.includes('.com')) {
    alert('Please enter a valid email address (e.g. example@gmail.com)');
    return;
  }

  // اعتبارسنجی رمز عبور
  let password = document.getElementById('password').value;
  let confirmPassword = document.getElementById('confirPass').value;
  if (password.length < 8 || !/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
    alert('Password must be at least 8 characters long and contain both letters and numbers');
    return;
  }
  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return;
  }

  // ذخیره‌سازی اطلاعات کاربر
  let userData = {
    username: document.getElementById('userName').value,
    email: document.getElementById('email').value,
    password: document.getElementById('password').value
  };

  // ذخیره‌سازی اطلاعات در localStorage
  let users = JSON.parse(localStorage.getItem('users')) || [];
  users.push(userData);
  localStorage.setItem('users', JSON.stringify(users));

  // انتقال به صفحه index/emoji.html
  window.location.href = 'index/emoji.html';
});
