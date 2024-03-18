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
// ----RESPONSIV
window.addEventListener("resize", function () {
  if (window.innerWidth < 768) {
    // اگر اندازه صفحه کمتر از 768 پیکسل باشد
    a.style.display = "block";
    b.style.display = "block";
    x.style.left = "0";
    y.style.right = "0";
    x.style.opacity = 1;
    y.style.opacity = 1;
  } else {
    // اگر اندازه صفحه بیشتر از 768 پیکسل باشد
    a.style.display = "none";
    b.style.display = "none";
    x.style.left = "0";
    y.style.right = "0";
    x.style.opacity = 1;
    y.style.opacity = 1;
  }
});

// -------Form Validation With Localstorag
let btn = document.getElementById("submit");
// ----form refresh
btn.addEventListener("click", (e) => {
  e.preventDefault();
});

// ----setitem locastrong
// تبدیل اطلاعات داخل متغییر به مقدار
//  و انتقال به localStrong
btn.addEventListener("click", (e) => {
  let Name = document.getElementById("userName");
  name = Name.value;
  localStorage.setItem("userName", name);

  let Email = document.getElementById("Email");
  Email = Email.value;
  localStorage.setItem("Email", Email);

  let Pass = document.getElementById("password2");
  Pass = Pass.value;
  localStorage.setItem("Pass", Pass);

  let CPass = document.getElementById("CPass");
  CPass = CPass.value;
  localStorage.setItem("CPass", CPass);
// دستور دهی برای خالی نبودن هر قسمت
  if (Name === "" || Email === "" || Pass === "" || CPass === "") {
    alert("You must fill out the entire form before signing up");
  }
  // همخوانی رمز و تکرار رمز
  else if (Pass !== CPass) {
    alert("Please check your password");
  } 
  // استاندارد بودن رمز
  if (Pass.length < 8 || !/\d/.test(Pass) || !/[a-zA-Z]/.test(Pass)) 
      {alert( "Password must be at least 8 characters long and contain both letters and numbers"); return;}
// انقال اطلاعات از local به متغیر و تبدیل به ارایه

  else {
    let storedData = localStorage.getItem("user-Data");
    let userData = [];
  //  تبدیل به شی
    if (storedData) {
      userData = JSON.parse(storedData);
    }

    userData.push({
      name: Name,
      email: Email,
      password: Pass,
      confirmPassword: CPass,
      scores: 0,
    });

    
    let jsonData = JSON.stringify(userData);
    localStorage.setItem("user-Data", jsonData);

    alert("Successful registration, and you are now logged in");
    localStorage.setItem("is-Login", "true");
    localStorage.setItem("user-Login", Name);
// انقال به صفحه
    window.location.href = "../index.html";
  }
});

