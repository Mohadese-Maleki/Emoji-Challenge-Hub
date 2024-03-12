// -------log and sing btn
document.getElementById("loginBtn").addEventListener("click", function() {
    window.location.href = "../index/log-sing.html";
  });
  
  
  
  // ---------------
  function myMenuFunction() {
    var i = document.getElementById("navMenu");
    if(i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
   }
  // -------------------emoji typing
  
  var typed = new Typed(".type", {
    strings: ["", "Emoji Game"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
  // ---------FORM VALIDATION
  const Form = document.querySelector("#form");
  userlFild = Form.querySelector(".UsernameField");
  userinput = userlFild.querySelector("#UsernameInput");
  emailFild = Form.querySelector(".emailField");
  emailinput = emailFild.querySelector("#emailInput");
  passFild = Form.querySelector(".creat-password");
  passinput = passlFild.querySelector("#password");
  passCFild = Form.querySelector(".confrim-password");
  passCinput = passCFild.querySelector("#confrimpassword");
  
  function checkEmail() {
    const pattern =/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailinput.value.match(pattern)) {
      return emailFild.classList.add("invalid");
    }
    emailFild.classList.remove("invalid");
  }
  Form.addEventListener("submit", (event) => {
    event.preventDefault()
    checkUsername();
  
    emailinput.addEventListener('keyup',checkEmail)
  });
  
  
  function checkUsername() {
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!userinput.value.match(pattern)) {
      userField.classList.add("invalid");
    } else {
      userField.classList.remove("invalid");
    }
  }
  Form.addEventListener("submit", (event) => {
    event.preventDefault()
    checkUsername();
  });
  
  // hide and show 
  const eyeicon=document.querySelectorAll('.show-hide');
  
  eyeicon.forEach((eyeicon)=>{
    eyeicon.addEventListener('click',()=>{
      const pinput=eyeicon.parentElement.querySelector('input');
      eyeicon.classList.replace('bxs-hide' ,'bx-show')
    })
  })